import React from 'react'
import styles from './CustomerList.module.css';
import {List} from 'antd';
import {resolveCitySelector} from '../redux/selectors';
import { useSelector } from 'react-redux';

const CustomerListItem = ({customer, onPress}) => {
    const city = useSelector(resolveCitySelector(customer.CityId))
    return (
        <div onClick={onPress} className={styles.container}>
            <List.Item className={styles.content}>
                <div className={styles.item}>{customer.Id}</div>
                <div className={styles.item}>{customer.Name}</div>
                <div className={styles.item}>{customer.Surname}</div>
                <div className={styles.item}>{customer.Email}</div>
                <div className={styles.item}>{customer.Telephone}</div>
                <div className={styles.item}>{city}</div>
            </List.Item>
        </div>
    )
}
export default React.memo(CustomerListItem);