import { customersLoadingAction,customersDoneAction,customersErrorAction } from "./actions";
import { makeSureCitiesExist } from "../../cities";

export function getCustomers(page=0) {
    return async(dispatch) => {
        try {
            dispatch(makeSureCitiesExist());
            dispatch(customersLoadingAction());
            const customersResponse = await fetch('http://www.fulek.com/nks/api/aw/customers')
            const customers = await customersResponse.json();
            dispatch(customersDoneAction(customers));
        } catch(e) {
            dispatch(customersErrorAction(e.message));
        }

    }
}