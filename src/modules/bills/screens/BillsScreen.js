import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedCustomerSelector } from '../../customer/redux/selectors';
import {getBills} from '../redux/thunks';
import { billsSelector, billsLoading } from '../redux/selectors';
import { BillItem } from '../components/BillItem';
import { Spin } from 'antd';
import { PageableList } from '../../../shared/PageableList/PageableList';
import { useHistory } from 'react-router-dom';
export const BillsScreen = () => {
    const selectedCustomer = useSelector(getSelectedCustomerSelector);
    const bills = useSelector(billsSelector);
    const isLoading = useSelector(billsLoading);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(()=>{
        dispatch(getBills(selectedCustomer.Id))
    },[selectedCustomer,dispatch])

    if(isLoading){
        return (
            <Spin />
        )
    }
    return (
        <div>
           <PageableList items={bills} itemsPerPage={10} renderItem={(item)=> {return ( <BillItem bill={item} onPress={()=> {history.push('/billitems/'+ item.Id)}} />)}}/>
        </div>
    )
}
