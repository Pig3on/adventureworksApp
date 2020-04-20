import React from 'react';
import { createStore } from '../redux/createStore';
import { Provider } from 'react-redux';
import { MainRouter } from '../Router';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import DelayActionWrapper from '../../../shared/Utils/DelayedAction';

const store = createStore();

const persistor = persistStore(store);

const Application = () => {
    return (
       <Provider store={store}>
           <PersistGate persistor={persistor}>
                <DelayActionWrapper>
                    <MainRouter/>
                </DelayActionWrapper>
           </PersistGate>
       </Provider>
    )
}

export default React.memo(Application);