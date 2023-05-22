import { Col } from "react-bootstrap";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

type Props = {
  icon: string;
  header: string;
  text: string;
  to: string;
};
export const CardMenu = ({
  icon = "default",
  header = "default",
  text = "default",
  to = "/",
}: Props) => {
  return (
    <Col
      className={styles.wrapper}
      lg={{ span: 4, offset: 2 }}
      md={{ span: 12, offset: 1 }}
      xs={12}
      sm={12}
    >
      <Link to={to}>
        <div className={styles.item}>
          <p>{icon}</p>
          <p className={"mt-5"}>{header}</p>
          <p>{text}</p>
        </div>
      </Link>
    </Col>
  );
};
