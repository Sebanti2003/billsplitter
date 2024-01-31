import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userslice.js'
import selectReducer from './slices/selectslice.js'
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
const percon={
    key:'root',
    version:1,
    storage
}
const rootreducers=combineReducers({
    user:userReducer,
    selected:selectReducer
})
const perred=persistReducer(percon,rootreducers)
const store=configureStore({
    reducer:perred,
    middleware:midd=>midd({serializableCheck:false})
});
export default store;
export const persistor=persistStore(store);