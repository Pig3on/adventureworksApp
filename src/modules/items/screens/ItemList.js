import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getItemsByBilId} from '../redux/thunks';
import { getBillItems, areBillItemsLoading, getTotalPrice } from '../redux/selectors';
import { ItemListItem } from '../components/ItemListItem';
import { PageableList } from '../../../ui/components/PageableList/PageableList';
import { Spin } from 'antd';
import BillData from '../components/BillData/BillData';
import UserData from '../components/UserData/UserData';
import { getSelectedCustomerSelector, customersLoadingSelector } from '../../customer/redux/selectors';
import { Link } from 'react-router-dom';
import AddItem from './AddItem';

export const ItemList = ({match}) => {
    const dispatch = useDispatch();
    const items = useSelector(getBillItems);
    const isLoading = useSelector(areBillItemsLoading);
    const isCustomerLoading = useSelector(customersLoadingSelector);
    const customer = useSelector(getSelectedCustomerSelector);
    const totalPrice = useSelector(getTotalPrice);
    useEffect(()=> {
        
        const { id } = match.params;
        dispatch(getItemsByBilId(id))
    },[dispatch, match.params])
    console.log(items);
    if(isLoading){
        return (
            <Spin />
        )
    }
    return (
        <div>
           <div>
                <AddItem billId={match.params.id} />
                <UserData customer={customer} loading={isCustomerLoading} billId={match.params.id}/>
                <Link>Add items to account</Link>
           </div>
           <PageableList items={items} renderItem={(item)=> {return (<ItemListItem item={item} />)}} itemsPerPage={10} />
           <BillData totalPrice={totalPrice} />
        </div>
    )
}