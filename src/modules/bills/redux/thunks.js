import { billsLoadingAction, billsErrorAction, billsDoneAction } from "./actions"
import { apiClientFactory } from '../../api';
export function getBills(customerId) {
    return async (dispatch) => {
        try {
            dispatch(billsLoadingAction());
            const accounts = await apiClientFactory.getRestApiClient().get('/customerbills/' + customerId)


            dispatch(billsDoneAction(accounts.data));
        } catch (e) {
            dispatch(billsErrorAction(e.message));
        }


    }
}