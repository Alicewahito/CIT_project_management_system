import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createInertiaApp({
    //   resolve: name => {
    //     const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    //     return pages[`./Pages/${name}.jsx`]
    //   },
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        createRoot(el).render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App {...props} />
                </PersistGate>
            </Provider>
        );
    },
});
