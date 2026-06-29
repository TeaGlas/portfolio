import styles from "../page.module.css";
import SectionLabel from "./SectionLabel";

export default function AboutSection({ content }) {
  return (
    <section className={`${styles.card} ${styles.aboutSection}`}>
      <SectionLabel>{content.about.label}</SectionLabel>
      <div className={styles.profileRow}>
        <div className={styles.photoBox}>{content.about.photo}</div>
        <div>
          <p className={styles.profileName}>{content.profile.name}</p>
          <p className={styles.profileLocation}>{content.profile.location}</p>
        </div>
      </div>
      <p className={styles.bodyCopy}>{content.about.paragraphs[0]}</p>
      <p className={`${styles.bodyCopy} ${styles.bodyCopySpaced}`}>
        {content.about.paragraphs[1]}
      </p>
    </section>
  );
}
