import React from 'react';
import { List } from 'antd';

import styles from './ItemListItem.module.css';
import { format } from 'date-fns';

export const ItemListItem = ({item, onPress}) => {
    return (
        <div onClick={()=> {}} className={styles.container}>
            <List.Item className={styles.content}>
                <div className={styles.item}>{item.Id}</div>
                <div className={styles.item}>{item.Product.Name}</div>
                <div className={styles.item}>{item.Product.Number}</div>
                <div className={styles.item}>{item.Product.Color || "-"}</div>
                <div className={styles.item}>{item.Quantity}</div>
                <div className={styles.item}>{item.PricePerPiece}</div>
                <div className={styles.item}>{item.TotalPrice}</div>
            </List.Item>
        </div>
    )

}




/*
Id: 10384
BillId: 46385
Quantity: 2
ProductId: 732
PricePerPiece: 356.898
TotalPrice: 713.796
Product:
    Id: 732
    Name: "ML Road Frame - Red, 48"
    ProductNumber: "FR-R72R-48"
    Color: "Red"
    ProductSubcategoryID: 14
*/