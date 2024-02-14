import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { reducer } from "./rootReducer";

const store = configureStore({
    reducer: reducer
})

export const Providers = (props: React.PropsWithChildren) => {
    return(
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}