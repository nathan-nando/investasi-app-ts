import { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "./style.module.css";
import { StepForm } from "../../components/organisms/StepForm/StepForm";

export const DanaPensiun: FC = () => {
  console.count("rerender dana pensiun");

  return (
    <Container className={styles.pageWrapper}>
      <StepForm />
    </Container>
  );
};
