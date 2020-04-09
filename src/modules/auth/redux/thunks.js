import { registerError, registerLoading, registerDone, loginError, loginLoading, loginDone, updateDone, updateLoading, updateError } from "./actions";
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
        console.log("YEEES")
        try {
            dispatch(loginLoading());
            console.log(userInput)
            const login = await apiClientFactory.getRestApiClient().post('/login', userInput);

            apiClientFactory.setTokens(login.data.token);

            const userResp = await apiClientFactory.getRestApiClient().post("/getUser", {username: login.data.username});
            console.log(login)
            const user = {
                ...userResp.data,
                token: login.data.token,
            }
            console.log('final user')
            console.log(user);
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
             
             const auth = await apiClientFactory.getRestApiClient().post("/editUser", user);

             dispatch(updateDone(auth.data))
        } catch(e) {
            dispatch(updateError(e.message));
        }
    }
 }