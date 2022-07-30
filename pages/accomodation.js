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
        lesz a szállásuk, ami 3 napi járóföldre helyeszkedik az esküvő
        helyszínétől :)
      </p>
      <p className={styles.text}>
        A szálláson 2 ágyas szobák lesznek és déltől lehet átvenni őket!
      </p>
      <ul className={styles.list}>
        <li>Szabó Lackó és gyermekei (5 fő)</li>
        <li>Drucker Vera család (4 fő)</li>
        <li>Schmidt család (6 fő)</li>
        <li>Trézsi pár (2 fő)</li>
        <li>Szeki pár (2 fő)</li>
        <li>Zenész (1 fő)</li>
      </ul>
      <p className={styles.text}></p>
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
