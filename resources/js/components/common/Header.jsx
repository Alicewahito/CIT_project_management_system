import React from "react";
import { Link } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";

import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";

import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { selectNav, toggle } from "../../redux/slices/navSlice";

const Header = () => {
    const dispatch = useDispatch();
    const showNav = useSelector(selectNav);

    const handleRedirect = (url) => {
        // navigate(url);
    };

    return (
        <header
            className="bg-white header d-flex justify-content-between align-items-center gap-3 shadow-none"
            style={{ paddingLeft: showNav ? "16.6rem" : "6.6rem" }}
        >
            <IconButton
                onClick={() => dispatch(toggle())}
                className="toggle-icon"
                style={{ backgroundColor: "#f2f7fe" }}
            >
                {showNav ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <div className="d-flex align-items-center gap-4">
                <IconButton>
                    <NotificationsNoneOutlinedIcon />
                </IconButton>
                <div
                    className="dropdown user"
                    id="userMenu"
                    data-bs-toggle="dropdown"
                >
                    <div className="d-flex align-items-center gap-2">
                        <Avatar />
                        <div className="">
                            <span>Jane Doe</span>
                        </div>
                        <KeyboardArrowDownIcon className="" />
                    </div>
                    <ul
                        className="dropdown-menu shadow border-0 mt-3"
                        aria-labelledby="userMenu"
                    >
                        <li>
                            <Link
                                className="dropdown-item d-flex align-items-center gap-1"
                                // onClick={() => handleRedirect("/profile")}
                            >
                                <SettingsIcon />
                                Profile
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="dropdown-item d-flex align-items-center gap-1"
                                // onClick={() => handleRedirect("/settings")}
                            >
                                <GroupWorkOutlinedIcon /> Users
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="dropdown-item d-flex align-items-center gap-1"
                                // onClick={() => handleLogout()}
                            >
                                <LogoutIcon /> Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
