import { customersLoadingAction,customersDoneAction,customersErrorAction, setSelectedCustomer } from "./actions";
import { makeSureCitiesExist } from "../../cities";
import { getSelectedCustomerSelector } from "./selectors";
import { apiClientFactory } from "../../api";

export function getCustomers(page=0) {
    return async(dispatch) => {
        try {
            dispatch(makeSureCitiesExist());
            dispatch(customersLoadingAction());
            
            const customers = await apiClientFactory.getRestApiClient().get('/customers/')
            dispatch(customersDoneAction(customers.data));
        } catch(e) {
            dispatch(customersErrorAction(e.message));
        }

    }
}

export function makeSureSelectedCustomerExists(billId) {
    return async(dispatch,getState)=> {
        try {
            const selectedCustomer = getSelectedCustomerSelector(getState());
            if(selectedCustomer) {
                return;
            }
            dispatch(customersLoadingAction())
           
            const customer = await apiClientFactory.getRestApiClient().get('/customerByBill/' + billId);

            dispatch(setSelectedCustomer(customer.data))
            dispatch(customersDoneAction([]))
        }catch(e) {
            dispatch(customersErrorAction())
        }
    }
}