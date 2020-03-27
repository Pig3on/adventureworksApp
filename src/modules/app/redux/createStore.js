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

  
  const rootReducer = combineReducers({
    customers: CustomersReducer
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