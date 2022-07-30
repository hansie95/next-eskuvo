import styles from "./program.module.css";
const Program = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.cim}>
        2022. augusztus 6-án szombaton a Varsádi pincészetben várunk titeket!
      </h1>
      <h1 className={styles.program}>16:30 vendégvárás</h1>
      <h1 className={styles.program}>17:30 házasságkötés</h1>
      <h1 className={styles.program}>18:00 fotózkodás a párral</h1>
      <h1 className={styles.program}>19:30 vacsora</h1>
      <h1 className={styles.program}>
        Vacsora után torta és menyasszonytánc, majd mulatás amedig bírjuk!
      </h1>
    </div>
  );
};

export default Program;
