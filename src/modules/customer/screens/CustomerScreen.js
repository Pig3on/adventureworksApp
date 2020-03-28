import React, { useEffect, useState } from 'react';
import { Spin, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../redux/thunks';
import { getCustomersSelector, customersLoadingSelector } from '../redux/selectors';
import CustomerListItem from '../components/CustomerListItem';
import styles from  './CustomerScreen.module.css';
import { AccountsScreen } from '../../bills';

const CustomerScreen = () => {
    const dispatch = useDispatch();
    const customers = useSelector(getCustomersSelector);
    const customersLoading = useSelector(customersLoadingSelector);
    const [modalVisible,setModalVisible] = useState(false);

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
                    <CustomerListItem onPress={() => {setModalVisible(true)}} customer={customer} />
                )
            })}

            <Modal
            visible={modalVisible}
            onCancel={()=>{setModalVisible(false)}}
            >
                <AccountsScreen />
            </Modal>
        </div>
    )
}
export default CustomerScreen;