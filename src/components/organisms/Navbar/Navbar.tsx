import { NavLink, useLocation } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";
import styles from "./style.module.css";

export const Navbar = () => {
  const location = useLocation();
  return (
    <div className={styles.navbarWrapper}>
      <Nav activeKey={location.pathname} defaultActiveKey={"/"}>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dana-pensiun" className="nav-link">
            Dana pensiun
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
