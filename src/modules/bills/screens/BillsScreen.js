import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedCustomerSelector } from '../../customer/redux/selectors';
import {getBills} from '../redux/thunks';
import { billsSelector, billsLoading } from '../redux/selectors';
import { BillItem } from '../components/BillItem';
import { Spin } from 'antd';
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
           {bills.map((bill)=> {
              return (
                <BillItem bill={bill} />
              )
           })}
        </div>
    )
}
