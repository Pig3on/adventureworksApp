import {
    combineReducers,
    compose,
    applyMiddleware,
    StoreEnhancer,
    createStore as createStoreBase,
  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; 
import { CustomersReducer } from '../../customer';
import { CitiesReducer } from '../../cities';
import { BillsReducer } from '../../bills';
import { ItemsReducer } from '../../items';
import { AuthReducer } from '../../auth';
import { apiClientFactory } from '../../api';
  const rootReducer = combineReducers({
    customers: CustomersReducer,
    cities: CitiesReducer,
    bills: BillsReducer,
    items: ItemsReducer,
    auth: AuthReducer,
    rehidrate: (state = {},action) => {
      if(action.type === "persist/REHYDRATE") {
        if(action.payload && action.payload.currentLoggedUser){
          apiClientFactory.setTokens(action.payload.currentLoggedUser.token)
        }
      }
      return state;
    }
  });
  const enhancerList = [
    // add enhancers here
  ];
  const middlewares = [thunk];
  
  export function createStore() {
    const composeMethod =
      // @ts-ignore
      process.env.NODE_ENV === 'production' ? compose : composeWithDevTools;
    const enhancers = composeMethod(
      ...enhancerList,
      applyMiddleware(...middlewares),
    );
  
    return createStoreBase(rootReducer, enhancers);
  }