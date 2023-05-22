import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { Banner } from "../../components/organisms/Banner/Banner";
import { CardMenu } from "../../components/moleculs/CardMenu/CardMenu";

export const Home: FC = () => {
  return (
    <Container className={styles.pageWrapper} fluid={true}>
      <Banner />
      <div className={styles.contentWrapper}>
        <div className={styles.menuWrapper}>
          <Row>
            <Col lg={3} md={12} sm={12}>
              <h4 className="pb-5">
                Yang dapat kamu lakukan dengan{" "}
                <span className={styles.bold}>InvestasiApp</span>
              </h4>
            </Col>
            <Col>
              {/*<div className="d-flex gap-5 justify-content-between pb-5  p-5">*/}
              {/*</div>*/}
              <Row>
                <CardMenu
                  icon={"icon"}
                  header={"Dana Pensiun"}
                  text={"Dana Pensiun adalah blablablabla"}
                  to={"/dana-pensiun"}
                />
                <CardMenu
                  icon={"icon"}
                  header={"Dana Pensiun"}
                  text={"Dana Pensiun adalah blablablabla"}
                  to={"/dana-pensiun"}
                />
                <CardMenu
                  icon={"icon"}
                  header={"Dana Pensiun"}
                  text={"Dana Pensiun adalah blablablabla"}
                  to={"/dana-pensiun"}
                />
                <CardMenu
                  icon={"icon"}
                  header={"Dana Pensiun"}
                  text={"Dana Pensiun adalah blablablabla"}
                  to={"/dana-pensiun"}
                />
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};
