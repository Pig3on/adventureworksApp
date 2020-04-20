import React from 'react';
import { List, Button, Typography } from 'antd';

import styles from './ItemListItem.module.css';
import { useAuth } from '../../auth';

export const ItemListItem = ({item, onPress, onSecondPress,isLoggedin}) => {
    const {isLoggedIn } = useAuth()
     return (
        <div onClick={onPress} className={styles.container}>
            <List.Item className={styles.content}
               actions={isLoggedin ? [
                <Button type="danger" onClick={onSecondPress}>
                    Delete
                </Button>
            ]: []}
            >
         
            <List.Item.Meta
        
            title={
            <Typography.Text>{`${item.Product.Name}(${item.Product.Color})/${item.Product.ProductNumber}`}</Typography.Text>
          }
          description= {`Per Piece: ${item.PricePerPiece}, / Quantity: ${item.Quantity}`}
        />
        <div>
           Total Price: {item.TotalPrice}
        </div>
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