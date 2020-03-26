import React from 'react';
import { createStore } from '../redux/createStore';
import { Provider } from 'react-redux';
import { MainRouter } from '../Router';

const store = createStore();


const Application = () => {
    return (
       <Provider store={store}>
           <MainRouter/>
       </Provider>
    )
}

export default React.memo(Application);