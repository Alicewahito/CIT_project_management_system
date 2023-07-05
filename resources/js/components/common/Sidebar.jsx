import React from "react";
import { Link } from "@inertiajs/react";
import { useSelector } from "react-redux";

import GroupIcon from "@mui/icons-material/Group";
import PaymentIcon from "@mui/icons-material/Payment";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GamesIcon from "@mui/icons-material/Games";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";

import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { selectNav } from "../../redux/slices/navSlice";

import logo from "../../assets/logo.png";

const Sidebar = () => {
    const showNav = useSelector(selectNav);

    const width = showNav ? "w-100" : "";

    return (
        <nav
            className="sidebar px-3 shadow-sm bg-white"
            style={{ width: showNav ? "16rem" : "6rem" }}
        >
            <div className="bg-white sticky-top pt-1 pb-2">
                <img src={logo} className="logo" />
            </div>

            <div className="d-flex flex-column justify-content-between">
                <div
                    className={`d-flex flex-column gap-2 ${width}`}
                    style={{ marginTop: "1rem" }}
                >
                    <h5
                        className="opacity-70"
                        style={{
                            fontSize: ".8rem",
                            display: showNav ? "" : "none",
                        }}
                    >
                        MAIN MENU
                    </h5>
                    <Link
                        to="/dashboard"
                        className="d-flex align-items-center gap-2 p-2 rounded menu-item"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Dashboard"
                    >
                        <DashboardIcon />
                        <span style={{ display: showNav ? "" : "none" }}>
                            Dashboard
                        </span>
                    </Link>
                    <Link
                        to="/activities"
                        className="d-flex align-items-center gap-2 p-2 rounded menu-item"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Activities"
                    >
                        <GamesIcon />
                        <span style={{ display: showNav ? "" : "none" }}>
                            Activities
                        </span>
                    </Link>

                    <Link
                        to="/events"
                        className="d-flex align-items-center gap-2 p-2 rounded menu-item"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Events"
                    >
                        <CalendarMonthIcon />
                        <span style={{ display: showNav ? "" : "none" }}>
                            Events
                        </span>
                    </Link>

                    <Link
                        to="/blog"
                        className="d-flex align-items-center gap-2 p-2 rounded menu-item"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Posts"
                    >
                        <LibraryBooksOutlinedIcon />
                        <span style={{ display: showNav ? "" : "none" }}>
                            Posts
                        </span>
                    </Link>

                    <Link
                        to="/newsletters"
                        className="d-flex align-items-center gap-2 p-2 rounded menu-item"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Newsletters"
                    >
                        <NewspaperIcon />
                        <span style={{ display: showNav ? "" : "none" }}>
                            Newsletters
                        </span>
                    </Link>

                    <Link
                        to="/players"
                        className="d-flex align-items-center gap-2 p-2 rounded menu-item"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Players"
                    >
                        <SportsKabaddiIcon />
                        <span style={{ display: showNav ? "" : "none" }}>
                            Players
                        </span>
                    </Link>

                    <Link
                        to="/partners"
                        className="d-flex align-items-center gap-2 p-2 rounded menu-item"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Partners"
                    >
                        <GroupWorkOutlinedIcon />
                        <span style={{ display: showNav ? "" : "none" }}>
                            Partners
                        </span>
                    </Link>

                    <Link
                        to="/donations"
                        className="d-flex align-items-center gap-2 p-2 rounded menu-item"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Donations"
                    >
                        <PaymentIcon />
                        <span style={{ display: showNav ? "" : "none" }}>
                            Donations
                        </span>
                    </Link>

                    <Link
                        to="/users"
                        className="d-flex align-items-center gap-2 p-2 rounded menu-item"
                    >
                        <GroupIcon />
                        <span style={{ display: showNav ? "" : "none" }}>
                            Users
                        </span>
                    </Link>
                </div>

                <div
                    className="position-absolute w-100 pr-5"
                    style={{ bottom: "2rem" }}
                >
                    <h5
                        className="opacity-70"
                        style={{
                            fontSize: ".8rem",
                            display: showNav ? "" : "none",
                        }}
                    >
                        ACCOUNT
                    </h5>
                    <div className="" style={{ paddingRight: "1rem" }}>
                        <Link
                            to="/profile"
                            className="d-flex align-items-center gap-2 p-2 rounded menu-item"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Profile"
                        >
                            <SettingsIcon />
                            <span style={{ display: showNav ? "" : "none" }}>
                                Profile
                            </span>
                        </Link>

                        <Link
                            to="/logout"
                            className="d-flex align-items-center gap-2 p-2 rounded menu-item"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Logout"
                        >
                            <LogoutIcon />
                            <span style={{ display: showNav ? "" : "none" }}>
                                Logout
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
