import React from 'react';
import { List } from 'antd';

import styles from './Billitem.module.css';
import { format } from 'date-fns';


export const BillItem = ({bill, onPress}) => {
    return (
        <div onClick={()=> {onPress(bill.Id)}} className={styles.container}>
            <List.Item className={styles.content}>
                <div className={styles.item}>{bill.Id}</div>
                <div className={styles.item}>{format(new Date(bill.Date),'dd-MM-yyyy')}</div>
                <div className={styles.item}>{bill.BillNumber}</div>
                <div className={styles.item}>{bill.CustomerId}</div>
                <div className={styles.item}>{bill.SellerId}</div>
                <div className={styles.item}>{bill.CreditCardId}</div>
                <div className={styles.item}>{bill.Comment}</div>
            </List.Item>
        </div>
    )
}


/*
Id(pin):44292
Date(pin):"2001-10-01T00:00:00"
BillNumber(pin):"SO44292"
CustomerId(pin):541
SellerId(pin):275
CreditCardId(pin):15875
Comment(pin):null

*/