import { FC, useState } from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./style.module.css";
import { HeaderText } from "../../components/atoms/HeaderText/HeaderText";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { nextStepForm, prevStepForm } from "./slice";

export const DanaPensiun: FC = () => {
  const stepForm = useAppSelector((state) => state.danaPensiun.stepForm);

  const dispatch = useAppDispatch();
  const checkActive = (checkStep: number) => {
    if (stepForm === checkStep) {
      return styles.active;
    }
  };

  return (
    <Container className={styles.pageWrapper}>
      <HeaderText text={"Ini adalah Header"} width={"15vw"} height={"10vh"} />
      <div className="d-flex mb-3 w-50 mx-auto mt-5 text-center shadow-sm border gap-3 rounded">
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
    </Container>
  );
};
