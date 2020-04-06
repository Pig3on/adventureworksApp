import { registerError, registerLoading, registerDone } from "./actions";
import { apiClientFactory } from "../../api/services/apiClientFactory";

export function registerUser(user) {
   return async (dispatch)=> {
       try {
            dispatch(registerLoading());
            
            const auth = await apiClientFactory.getRestApiClient().post("/registeruser", user);

            apiClientFactory.setTokens(auth.data.token);
            dispatch(registerDone(auth.data))
       } catch(e) {
           dispatch(registerError(e.message));
       }
   }
}