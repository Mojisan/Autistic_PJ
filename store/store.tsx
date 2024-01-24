import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
    reducer: {}
})

export const Providers = (props: React.PropsWithChildren) => {
    return(
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}