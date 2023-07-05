import React from 'react'
import { useSelector } from "react-redux";

import { selectNav } from "../../redux/slices/navSlice";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    const show = useSelector(selectNav);

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="content">
                <Header />
                <div
                    className="content-wrapper"
                    style={{ paddingLeft: show ? "17.5rem" : "7rem" }}
                >
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
