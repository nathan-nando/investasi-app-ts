import styles from "./style.module.css";
import { Button, Col, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ReactElement } from "react";
import { HeaderText } from "../../atoms/HeaderText/HeaderText";
import {
  nextStepForm,
  prevStepForm,
} from "../../../features/DanaPensiun/slice";

export const StepForm = () => {
  const dispatch = useAppDispatch();
  const stepForm = useAppSelector((state) => state.danaPensiun.stepForm);

  console.count("rerender stepform");

  const stepOne = (
    <div>
      <h5>Hitung pengeluaran kamu tiap bulan</h5>
      <Form.Group
        className={`${styles.formGroup} mt-4 mb-3`}
        controlId="formBasicEmail"
      >
        <Form.Label className={styles.formLabel}>
          Pengeluaran / bulan
        </Form.Label>
        <Form.Control
          type="text"
          className={styles.formControl}
          autoComplete="nope"
          onChange={(e) => {}}
        />
      </Form.Group>
    </div>
  );

  const stepTwo = <div>step 2</div>;
  const stepThree = <div>step 3</div>;

  let show: ReactElement;

  if (stepForm === 1) {
    show = stepOne;
  } else if (stepForm === 2) {
    show = stepTwo;
  } else {
    show = stepThree;
  }

  const checkActive = (checkStep: number) => {
    if (stepForm === checkStep) {
      return styles.active;
    }
  };

  return (
    <>
      <Col className={`${styles.formWrapper} mt-5`} lg={12}>
        <HeaderText text={"Ini adalah Header"} width={"15vw"} height={"10vh"} />
        <div className="d-flex mb-3  mt-5 text-center gap-3 rounded justify-content-center">
          <div className={`${checkActive(1)} p-2`}>
            <p>step 1/3</p>
            <p className={"fw-bold"}>Pengeluaran per hari</p>
          </div>
          <div className={`${checkActive(2)} p-2`}>
            <p>step 2/3</p>
            <p className={"fw-bold"}>Jumlah Investasi yang dibutuhkan</p>
          </div>
          <div className={`${checkActive(3)} p-2 `}>
            <p>step 3/3</p>
            <p className={"fw-bold"}>Pengeluaran saat pensiun</p>
          </div>
        </div>
      </Col>
      <Col lg={8}>
        <Form>{show}</Form>
      </Col>
      <div>
        <Button
          onClick={() => {
            dispatch(nextStepForm());
          }}
        >
          Next
        </Button>
        <Button
          onClick={() => {
            dispatch(prevStepForm());
          }}
        >
          Prev
        </Button>
      </div>
    </>
  );
};
