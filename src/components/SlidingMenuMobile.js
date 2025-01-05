import styles from "./styles/SlidingMenuMobile.module.css";

export default function SlidingMenuMobile() {
  return (
    <div className={styles.slidingMenuMobile}>
      <div className={styles.dimmedBackground}>
        <div className={styles.slidingMenu}></div>
      </div>
    </div>
  );
}
