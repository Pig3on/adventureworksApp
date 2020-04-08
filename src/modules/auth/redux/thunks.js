import { registerError, registerLoading, registerDone, loginError, loginLoading, loginDone } from "./actions";
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

export function loginUser(userInput) {
    return async (dispatch)=> {
        try {
            dispatch(loginLoading());
            const login = await apiClientFactory.getRestApiClient().post('/login', userInput);

            apiClientFactory.setTokens(login.data.token);

            const user = await apiClientFactory.getRestApiClient().post("/getUser", {username: login.data.username});


            dispatch(loginDone(user.data));
        }catch (e){
            dispatch(loginError(e.message));
        }
    }
}