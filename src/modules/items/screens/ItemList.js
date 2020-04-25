import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getItemsByBilId, removeItem} from '../redux/thunks';
import { getBillItems, areBillItemsLoading, getTotalPrice } from '../redux/selectors';
import { ItemListItem } from '../components/ItemListItem';
import { PageableList } from '../../../shared/PageableList/PageableList';
import { Spin, Button } from 'antd';
import BillData from '../components/BillData/BillData';
import UserData from '../components/UserData/UserData';
import { getSelectedCustomerSelector, customersLoadingSelector } from '../../customer/redux/selectors';
import AddItem from './AddItem';
import { useAuth } from '../../auth';
import { DelayTriggerContext } from '../../../shared/Utils/DelayedAction';
import { withRouter } from 'react-router-dom';


function ItemList({match}) {
    const dispatch = useDispatch();
    const [isFormShown, setIsFormShown] = useState(false);
    const items = useSelector(getBillItems);
    const isLoading = useSelector(areBillItemsLoading);
    const isCustomerLoading = useSelector(customersLoadingSelector);
    const customer = useSelector(getSelectedCustomerSelector);
    const totalPrice = useSelector(getTotalPrice);
    const {isLoggedIn } = useAuth();
    const executeFunctionAfter = useContext(DelayTriggerContext);
    useEffect(()=> {
            const { id } = match.params;
            dispatch(getItemsByBilId(id))

    },[dispatch, match.params])
  
    if(isLoading){
        return (
            <Spin />
        )
    }
 
    return ( 
        <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{flex:"1"}} />
        <div>
            <UserData customer={customer} loading={isCustomerLoading} billId={match.params.id}/>
             {isLoggedIn && <Button onClick={()=> {setIsFormShown(!isFormShown)}}>{isFormShown ? "Hide" : "Add item to account"}</Button>} 
             {isFormShown && <AddItem billId={match.params.id} />}
            <div style={{flex:"1"}}/>
        </div>
            <PageableList items={items} renderItem={(item)=> {return (<ItemListItem isLoggedin={isLoggedIn} onSecondPress={()=> {executeFunctionAfter(removeItem,[item.Id],10)}} item={item} />)}} itemsPerPage={10} />
            <BillData totalPrice={totalPrice} />
     </div>
    )
}
    
export default withRouter(ItemList)