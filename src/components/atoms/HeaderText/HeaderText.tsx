import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";

type Props = {
  icon?: string;
  text?: string;
  bgColor?: string;
  width?: number | string;
  height?: number | string;
  center?: boolean;
  fontSize?: number | string;
  fontWeight?: number | string;
};
export const HeaderText = ({
  icon = "default",
  text = "default",
  bgColor = "lightblue",
  width = 30,
  height = 30,
  center = false,
  fontSize = 16,
  fontWeight = "bold",
}: Props) => {
  const centerValue = center ? "center" : undefined;
  return (
    <Container
      className={styles.wrapper}
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
        textAlign: centerValue,
      }}
    >
      <Row>
        <Col lg={3}>{icon}</Col>
        <Col>
          <h5 style={{ fontSize: fontSize, fontWeight: fontWeight }}>{text}</h5>
        </Col>
      </Row>
    </Container>
  );
};
