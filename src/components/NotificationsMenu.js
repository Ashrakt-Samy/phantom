import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Envolope from "../Assits/imges/Envolope.svg"
import Correct from "../Assits/imges/Correct.svg"
function NotificationsMenu() {
  const [notifications, setNotifications] = useState([
    {
      id: uuidv4(),
      icon: Correct,
      title: "Transfer linke confirmed by ",
      email: "jemscorner@email.com",
      time: "just now",
    },
    {
      id: uuidv4(),
      icon: Correct,
      title: "Transfer linke confirmed by",
      email: "jemscorner@email.com",
      time: "2 min ago",
    },
    {
      id: uuidv4(),
      icon: Envolope,
      title: "confirmation email sent to",
      email: 'anthony2142@email.com',
      time: "5 min ago",
    }
  ])
  return (
    <div className="notificationsMenu container">
      <h5>Notifications</h5>
      {
        notifications.map((notification) => <div key={notification.id} className="notificationContainer d-flex align-items-center">
          <img src={notification.icon} />
          <div>
            <p className="p-title">{notification.title} </p>
            <p className="p-email">{notification.email} </p>
            <p className="p-time">{notification.time} </p>
          </div>
        </div>)
      }
      <div>

      </div>

    </div>
  )
}

export default NotificationsMenu;