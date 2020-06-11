import React from 'react'
import styles from './CustomerList.module.css';
import { List, Typography } from 'antd';
import { resolveCitySelector } from '../redux/selectors';
import { useSelector } from 'react-redux';

const CustomerListItem = ({ customer, onPress }) => {
    const city = useSelector(resolveCitySelector(customer.CityId))
    return (
        <div onClick={() => { onPress(customer) }} className={styles.container}>
            <List.Item className={styles.content}>
                <List.Item.Meta
                    title={
                        <Typography.Text>{`${customer.Name} ${customer.Surname}`}</Typography.Text>
                    }
                    description={`${customer.Email} . ${customer.Telephone}. ${city}`}
                />
            </List.Item>
        </div>
    )
}
export default React.memo(CustomerListItem);