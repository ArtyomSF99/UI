import styles from "./galaxy.module.scss";
import star1 from "../../assets/images/sparkle (1).png";
import star2 from "../../assets/images/sparkle.png";
import star3 from "../../assets/images/sparkler.png";
import { useEffect, useState } from "react";


export default function Galaxy() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const stars = [star1, star2, star3];
  const starSizes = [
    "5px",
    "10px",
    "15px",
    "20px",
    "25px",
    "30px",
    "35px",
    "40px",
    "45px",
    "50px",
  ];
  const [blocks, setBlocks] = useState<React.ReactNode[]>([]);

  // const removeFirstElement = () => {
  //   setBlocks((prevBlocks) => {
  //     const newBlocks = prevBlocks.slice(1); // Создание нового массива без первого элемента
  //     return newBlocks;
  //   });
  // };

  // // Пример использования

  // setTimeout(() => {
  //   setInterval(() =>{
  //     removeFirstElement()
  //   }, 100)
  // }, 10000)
  useEffect(() => {
    const timer = setTimeout(() => {
      const xCoordinate = getRandomWindowPosition(windowWidth - 70);
      const yCoordinate = getRandomWindowPosition(windowHeight - 70);
      const size = starSizes[getRandomWindowPosition(10)];

      setBlocks((prevBlocks) => {
        if (prevBlocks.length >= 100) {
          return [
            ...prevBlocks.slice(1),
            <div
              className={styles.star}
              key={Date.now()}
              style={{
                position: "absolute",
                left: xCoordinate,
                top: yCoordinate,
              }}
            >
              <img
                src={stars[getRandomWindowPosition(3)]}
                style={{
                  width: size,
                  height: size,
                  
                }}
                alt="img"
              />
            </div>,
          ];
        } else {
          return [
            ...prevBlocks,
            <div
              className={styles.star}
              key={Date.now()}
              style={{
                position: "absolute",
                left: xCoordinate,
                top: yCoordinate,
              }}
            >
              <img
                src={stars[getRandomWindowPosition(3)]}
                style={{
                  width: size,
                  height: size,
                }}
                alt="img"
              />
            </div>,
          ];
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [blocks]);

  const getRandomWindowPosition = (maxNumber: number) => {
    return Math.floor(Math.random() * maxNumber);
  };

  return <div className={styles.mainContainer}>{blocks}</div>;
}
