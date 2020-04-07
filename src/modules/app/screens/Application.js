import React from 'react';
import { createStore } from '../redux/createStore';
import { Provider } from 'react-redux';
import { MainRouter } from '../Router';
import { persistStore } from 'redux-persist';

const store = createStore();

persistStore(store);

const Application = () => {
    return (
       <Provider store={store}>
           <MainRouter/>
       </Provider>
    )
}

export default React.memo(Application);