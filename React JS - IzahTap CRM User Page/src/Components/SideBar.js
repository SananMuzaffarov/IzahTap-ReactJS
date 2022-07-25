import React from "react";
import { FaUserAlt } from "react-icons/fa";
const SideBar = () => {
    return(
        <div className="sideBar">
            <nav className="navigatorUp">
                <div className="nav-links">
                    <ul>
                        <li><a href="/"><i><FaUserAlt/></i>Dashboard</a></li>
                        <li><a href="/"><i><FaUserAlt/></i>Selling Books</a></li>
                        <li><a href="/"><i><FaUserAlt/></i>Starred Solutions</a></li>
                        <li><a href="/"><i><FaUserAlt/></i>Profile</a></li>
                        <li><a href="/"><i><FaUserAlt/></i>Log out</a></li>
                    </ul>
                </div>
            </nav>
            <nav className="navigatorBottom">
                <div className="nav-header">
                    <h3>Admin</h3>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="/"><i><FaUserAlt/></i>Explanations</a></li>
                        <li><a href="/"><i><FaUserAlt/></i>Books</a></li>
                        <li><a href="/"><i><FaUserAlt/></i>Blogs</a></li>
                        <li><a href="/"><i><FaUserAlt/></i>Users</a></li>
                        <li><a href="/"><i><FaUserAlt/></i>Vacancies</a></li>
                        <li><a href="/"><i><FaUserAlt/></i>Team</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default SideBar;