import styles from "./root.module.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FC } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {};

export const Root: FC = (props: Props) => {
  const location = useLocation();
  return (
    <div className={styles.root}>
      <Navbar>
        <Nav
          className={styles.headerNavigator}
          activeKey={location.pathname}
          defaultActiveKey={"/"}
        >
          <NavItem>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/dana-pensiun" className="nav-link">
              Dana Pensiun
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Outlet />
    </div>
  );
};
