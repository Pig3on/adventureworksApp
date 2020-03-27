import React from 'react'
import styles from './CustomerList.module.css';
import {List} from 'antd';
const CustomerListItem = ({customer}) => {
    return (
        <List.Item className={styles.container}>
            <div className={styles.item}>{customer.Id}</div>
            <div className={styles.item}>{customer.Name}</div>
            <div className={styles.item}>{customer.Surname}</div>
            <div className={styles.item}>{customer.Email}</div>
            <div className={styles.item}>{customer.Telephone}</div>
            <div className={styles.item}>{customer.CityId}</div>
        </List.Item>
    )
}
export default React.memo(CustomerListItem);