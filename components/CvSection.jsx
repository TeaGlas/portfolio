import styles from "../page.module.css";
import PillButton from "./PillButton";
import SectionLabel from "./SectionLabel";

export default function CvSection({ content }) {
  return (
    <section className={`${styles.card} ${styles.cvCard}`}>
      <div>
        <SectionLabel>{content.cv.label}</SectionLabel>
        <p className={styles.cardTitle}>{content.cv.title}</p>
        <p className={styles.cardCopy}>{content.cv.copy}</p>
      </div>
      <PillButton
        as="a"
        href={content.cv.href}
        download={content.cv.download}
        type="application/pdf"
        className={styles.cvButton}
      >
        {content.cv.cta} <span className={styles.buttonIcon}>&darr;</span>
      </PillButton>
    </section>
  );
}
