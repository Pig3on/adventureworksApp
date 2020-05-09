import { registerError, registerLoading, registerDone, loginError, loginLoading, loginDone, updateDone, updateLoading, updateError } from "./actions";
import { apiClientFactory } from "../../api/services/apiClientFactory";
import { history } from "../../../index";

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

            const userResp = await apiClientFactory.getRestApiClient().post("/getUser", {username: login.data.username});
            
            const user = {
                ...userResp.data,
                token: login.data.token,
            }
        
            dispatch(loginDone(user));
            
        }catch (e){
            dispatch(loginError(e.message));
        }
    }
}


export function updateUser(user) {
    return async (dispatch)=> {
        try {
             dispatch(updateLoading());
              
             const userResp = await apiClientFactory.getRestApiClient().post("/editUser", user);
             console.log(userResp);
             dispatch(updateDone(userResp.data))
        } catch(e) {
            dispatch(updateError(e.message));
        }
    }
 }