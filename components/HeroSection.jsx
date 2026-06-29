import styles from "../page.module.css";
import PillButton from "./PillButton";
import SectionLabel from "./SectionLabel";

export default function HeroSection({ content, onNavigate }) {
  return (
    <section id="home" className={`${styles.card} ${styles.heroSection}`}>
      <SectionLabel className={styles.heroLabel}>
        {content.hero.status}
      </SectionLabel>
      <h1 className={styles.heroName}>{content.profile.name}</h1>
      <p className={styles.heroRole}>{content.profile.role}</p>
      <p className={styles.heroCopy}>{content.hero.intro}</p>
      <PillButton onClick={() => onNavigate("work")} type="button">
        {content.hero.cta} <span className={styles.buttonIcon}>&darr;</span>
      </PillButton>
    </section>
  );
}
