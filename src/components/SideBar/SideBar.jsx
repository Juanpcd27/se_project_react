import "./SideBar.css";
import avatar from "../../images/Userlogo.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="default avatar" />
      <p className="sidebar__username">username</p>
    </div>
  );
}

export default SideBar;
