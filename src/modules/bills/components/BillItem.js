import React from 'react';
import { List, Typography } from 'antd';

import styles from './Billitem.module.css';
import { format } from 'date-fns';


export const BillItem = ({ bill, onPress }) => {
    return (
        <div onClick={() => { onPress(bill.Id) }} className={styles.container}>
            <List.Item className={styles.content}>
                <List.Item.Meta
                    title={
                        <Typography.Text>{`${bill.Id} ${bill.BillNumber}`}</Typography.Text>
                    }
                    description={`${format(new Date(bill.Date), 'dd-MM-yyyy')} . ${bill.CustomerId}. ${bill.SellerId}`}
                />
            </List.Item>
        </div>
    )
}