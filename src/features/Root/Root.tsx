import styles from "./style.module.css";
import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/organisms/Navbar/Navbar";

type Props = {};

export const Root: FC = (props: Props) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <Outlet />
    </div>
  );
};
