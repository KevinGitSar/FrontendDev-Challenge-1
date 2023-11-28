"use client";
import { persistStore } from 'redux-persist';
import { store } from './store';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export function ReduxProvider({children}) {
    let persistor = persistStore(store);
    return <Provider store = {store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
}