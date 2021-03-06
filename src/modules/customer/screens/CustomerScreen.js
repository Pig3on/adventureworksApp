import React, { useEffect, useState } from 'react';
import { Spin, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../redux/thunks';
import { getCustomersSelector, customersLoadingSelector } from '../redux/selectors';
import CustomerListItem from '../components/CustomerListItem';
import styles from './CustomerScreen.module.css';
import { AccountsScreen } from '../../bills';
import { setSelectedCustomer } from '../redux/actions';
import { PageableList } from '../../../shared/PageableList/PageableList';
import SearchFIlter from '../components/SearchFilter/SearchFIlter';
import { withRouter } from 'react-router-dom';

const CustomerScreen = () => {
    const dispatch = useDispatch();

    const customers = useSelector(getCustomersSelector);
    const customersLoading = useSelector(customersLoadingSelector);
    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        dispatch(getCustomers());
    }, [dispatch])
    if (customersLoading) {
        return (
            <Spin />
        )
    }
    return (
        <div className={styles.container}>
            <SearchFIlter />
            <PageableList items={customers} itemsPerPage={10} renderItem={(item) => {
                return (
                    <CustomerListItem onPress={(customer) => { dispatch(setSelectedCustomer(customer)); setModalVisible(true) }} customer={item} />
                )
            }} />

            <Modal
                width={900}
                visible={modalVisible}
                onCancel={() => { setModalVisible(false) }}
            >
                <AccountsScreen />
            </Modal>
        </div>
    )
}

export default withRouter(CustomerScreen);