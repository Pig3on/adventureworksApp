import { itemsLoading, itemsDone, itemsError,removeItemAction } from "./actions"
import { makeSureSelectedCustomerExists } from "../../customer/redux/thunks";
import { apiClientFactory } from "../../api";

export function getItemsByBilId(billId) {
    return async(dispatch) => {
        
        try {
            dispatch(makeSureSelectedCustomerExists(billId));
            dispatch(itemsLoading());
            
            const billItems = await apiClientFactory.getRestApiClient().get('/billitems/' + billId);

            dispatch(itemsDone(billItems.data))
        } catch (e) {
            dispatch(itemsError(e.message))
        }
    }
}



export async function loadCategories() {
   const data = await apiClientFactory.getRestApiClient().get('/categories');
   return data.data;
}

export async function loadSubCategories(categoryId) {
    const data = await apiClientFactory.getRestApiClient().get('/subcategories/' + categoryId);
    return data.data;
}

export async function loadProducts(subcategoryId) {
    const data = await apiClientFactory.getRestApiClient().get('/products/' + subcategoryId);
    return data.data;

}

export async function addProduct(product) {
    return await apiClientFactory.getRestApiClient().post("/additem", product);
}

export function removeItem(itemId) {
    return async (dispatch)=> {
        await apiClientFactory.getRestApiClient().post('/deleteItem', {id: itemId});
        dispatch(removeItemAction(itemId));
    }
}