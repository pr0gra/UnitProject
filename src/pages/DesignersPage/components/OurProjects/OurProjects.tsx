import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img1 from "../../../../assets/images/design-img1.png";
import img2 from "../../../../assets/images/design-img2.png";
import img3 from "../../../../assets/images/design-img3.png";
import img4 from "../../../../assets/images/design-img4.png";
import img5 from "../../../../assets/images/design-img5.png";
import img6 from "../../../../assets/images/design-img6.png";
import img7 from "../../../../assets/images/design-img7.png";
import img8 from "../../../../assets/images/design-img8.png";
import img9 from "../../../../assets/images/design-img9.png";
import img10 from "../../../../assets/images/design-img10.png";
import styles from "./OurProjects.module.css";

export function OurProjects() {
  const itemData = [
    {
      img: `${img10}`,
      title: "Burger",
    },
    {
      img: `${img3}`,
      title: "Camera",
    },
    {
      img: `${img4}`,
      title: "Coffee",
    },
    {
      img: `${img5}`,
      title: "Hats",
    },
    {
      img: `${img6}`,
      title: "Honey",
    },
    {
      img: `${img7}`,
      title: "Basketball",
    },
  ];
  return (
    <div className={styles["our"]}>
      <h2 className={styles["title"]}>Фото портфолио</h2>
      <ImageList sx={{ width: 100, height: 200 }} cols={2} rowHeight={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
