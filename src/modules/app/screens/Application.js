import React from 'react';
import { createStore } from '../redux/createStore';
import { Provider } from 'react-redux';

const store = createStore();


const Application = () => {
    return (
       <Provider store={store}>
           <div>hello world</div>
       </Provider>
    )
}

export default React.memo(Application);