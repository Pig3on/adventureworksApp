import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../redux/thunks';
import { getCustomersSelector, customersLoadingSelector } from '../redux/selectors';
import CustomerListItem from '../components/CustomerListItem';
import styles from  './CustomerScreen.module.css';
const CustomerScreen = () => {
    const dispatch = useDispatch();
    const customers = useSelector(getCustomersSelector);
    const customersLoading = useSelector(customersLoadingSelector);

    useEffect(() => {
        dispatch(getCustomers());
    },[dispatch])
    if(customersLoading) {
        return (
            <Spin />
        )
    }
    return (
        <div className={styles.container}>
            {customers.map(customer => {
                return (
                    <CustomerListItem customer={customer} />
                )
            })}
        </div>
    )
}
export default CustomerScreen;