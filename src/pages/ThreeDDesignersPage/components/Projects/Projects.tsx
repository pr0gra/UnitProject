import styles from "./Projects.module.css";
import pool from "../../../../assets/images/three-d-pool.png";
import house from "../../../../assets/images/three-d-house.png";
import coffee from "../../../../assets/images/three-d-coffee.png";
import yorik from "../../../../assets/images/three-d-yorik.png";
import village from "../../../../assets/images/three-d-village.png";
import stairs from "../../../../assets/images/three-d-stairs.png";
import stairs1 from "../../../../assets/images/three-d-stairs1.png";
import stairs2 from "../../../../assets/images/three-d-stairs2.png";
import stairs3 from "../../../../assets/images/three-d-stairs3.png";

export function Projects() {
  return (
    <div className={styles["projects"]}>
      <h2 className={styles["title"]}>Портфолио</h2>
      <div className={styles["container"]}>
        <div className={styles["carousel"]}>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={pool} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={house} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={coffee} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={yorik} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={village} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={stairs} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={stairs1} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={stairs2} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={stairs3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
