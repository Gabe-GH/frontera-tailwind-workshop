import styles from "../css/card.module.css";

const name = "Gabe Lira";
const degree = "Computer Science";
const year = 2025;

const MobileCard = () => {
  return (
    <>
      {/* Background */}
      <div
        id="bg"
        className={`${styles.bg_gradient} ${styles.anta_regular} w-screen h-screen overflow-hidden flex justify-center items-center relative md:hidden`}
      >
        {/* BG Image */}
        <img
          src="./assets/crystal-bg.mobile.png"
          alt=""
          className="absolute w-screen h-screen object-contain z-0 scale-200"
        />

        {/* Card */}
        <div id="card" className={`${styles.card_bg}`}>
          {/* Overlay */}
          <div className={`${styles.pattern}`}></div>
        </div>
      </div>
    </>
  );
};

export default function Card() {
  return (
    <div className="md:hidden">
      <MobileCard />
    </div>
  );
}
