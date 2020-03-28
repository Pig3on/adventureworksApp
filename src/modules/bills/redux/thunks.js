import { billsLoadingAction, billsErrorAction, billsDoneAction } from "./actions"

export function getBills(customerId){
    return async (dispatch) => {
        try{
            dispatch(billsLoadingAction());
            const accountsResponse = await fetch('http://www.fulek.com/nks/api/aw/customerbills/' + customerId)
            const accounts = await accountsResponse.json();

            dispatch(billsDoneAction(accounts));
        }catch(e){
            dispatch(billsErrorAction(e.message));
        }


    }
}