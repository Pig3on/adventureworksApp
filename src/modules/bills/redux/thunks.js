import { accoutsLoadingAction, accountsErrorAction, accountsDoneAction } from "./actions"

export function getAccounts(customerId){
    return async (dispatch) => {
        try{
            dispatch(accoutsLoadingAction());
            const accountsResponse = await fetch('http://www.fulek.com/nks/api/aw/customerbills/' + customerId)
            const accounts = await accountsResponse.json();

            dispatch(accountsDoneAction(accounts));
        }catch(e){
            dispatch(accountsErrorAction(e.message));
        }


    }
}