import { useState } from "react";
import Alarm from "../Assits/imges/alarm.svg"
import arrow from '../Assits/imges/Vector.svg';
import whiteAlarm from '../Assits/imges/whiteAlarm.svg'
import NotificationsMenu from './NotificationsMenu';
function Header() {
    const [user, setUser] = useState({
        name: "Anthony Mike",
        email: "anthony2142@email.com",
        avatar: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    })
    const [showMenu, setShowMenu] = useState(false)
    function toggleMenu() {
        setShowMenu(!showMenu)
    }
    return (
        <div className="container d-flex w-100 justify-content-end align-items-start ">
            <div role="button" onClick={toggleMenu} className={`notification d-flex justify-content-center align-items-center ${showMenu ? 'active' : ''}`}>
                <img className="alarm" src={showMenu ? whiteAlarm : Alarm} />
                <div className="bubble"></div>
                {showMenu ? <NotificationsMenu /> : null}
            </div>

            <div className="userData d-flex align-items-center">
                <img className="userAvatar" src={user.avatar} alt="User Avatar" />
                <div className="userInfo">
                    <p className="userName">{user.name}</p>
                    <p className="userEmail">{user.email}</p>
                </div>
            </div>
            <img src={arrow}></img>

        </div>
    )

}
export default Header;