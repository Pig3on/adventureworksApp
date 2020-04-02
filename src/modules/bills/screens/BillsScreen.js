import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedCustomerSelector } from '../../customer/redux/selectors';
import {getBills} from '../redux/thunks';
import { billsSelector, billsLoading } from '../redux/selectors';
import { BillItem } from '../components/BillItem';
import { Spin } from 'antd';
import { PageableList } from '../../../ui/components/PageableList/PageableList';
export const BillsScreen = () => {
    const selectedCustomer = useSelector(getSelectedCustomerSelector);
    const bills = useSelector(billsSelector);
    const isLoading = useSelector(billsLoading);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBills(selectedCustomer))
    },[selectedCustomer,dispatch])

    if(isLoading){
        return (
            <Spin />
        )
    }
    return (
        <div>
           <PageableList items={bills} itemsPerPage={10} renderItem={(item)=> {return ( <BillItem bill={item} />)}}/>
        </div>
    )
}
