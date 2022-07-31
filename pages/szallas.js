import styles from "../pages/accomodation.module.css";
const Accomodation = () => {
  return (
    <div>
      <p className={styles.text_h1}>Kedves Család!</p>
      <p className={styles.text}>
        A következő családagoknak a{" "}
        <a
          className={styles.kolonics}
          href="https://www.google.com/maps/place/Kolonics+Pinc%C3%A9szet/@47.1362343,17.3809434,15z/data=!4m2!3m1!1s0x0:0xdbb303b29a707315?sa=X&ved=2ahUKEwjsnbC3r6D5AhU4h_0HHa7DBTIQ_BJ6BAhXEAU"
        >
          Kolonics pincészetben
        </a>{" "}
        lesz a szállásuk, ami 5 percnyi járóföldre helyeszkedik el az esküvő
        helyszínétől :)
      </p>

      <div className={styles.list_container}>
        <p className={styles.list}>Szabó Lackó és gyermekei (5 fő)</p>
        <p className={styles.list}>Drucker Vera család (4 fő)</p>
        <p className={styles.list}>Schmidt család (6 fő)</p>
        <p className={styles.list}>Trézsi pár (2 fő)</p>
        <p className={styles.list}>Szeki pár (2 fő)</p>
        <p className={styles.list}>Zenész (1 fő)</p>
      </div>

      <p className={styles.text}>
        A szálláson 2 ágyas szobák lesznek és déltől lehet átvenni őket!
      </p>

      <div className={styles.container}>
        <div>
          <img src="/terkep.png" className="aranyom2" />
        </div>
        <div>
          <img src="/kolonics.jpeg" className="aranyom2" />
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
