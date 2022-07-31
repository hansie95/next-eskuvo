import styles from "../pages/location.module.css";
const Location = () => {
  return (
    <div>
      <div className={styles.helyszindoboz}>
        <p className={styles.text_h1}>
          Az esküvőnknek a Varsádi pincészet ad otthont!{" "}
        </p>
        <p className={styles.text_hazigazda}>
          Házigazdáink Varsádi Zsuzsi és Varsádi Laci
        </p>
        <p className={styles.text}>
          Cím:{" "}
          <a
            className={styles.cim}
            href="https://www.google.com/maps/place/Vars%C3%A1di+Pince/@47.1389475,17.3800653,17z/data=!3m1!4b1!4m5!3m4!1s0x47696bfbca8f59df:0x633ed97c85f6de0a!8m2!3d47.1389475!4d17.3800653"
          >
            Somlóvásárhely Varsádi Pince hrsz: 1246, 8481
          </a>
        </p>
      </div>

      <img className={styles.aranyom} src="/location_kep.jpeg" />
    </div>
  );
};

export default Location;
