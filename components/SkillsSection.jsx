import { SKILLS } from "../data/portfolio";
import styles from "../page.module.css";
import SectionLabel from "./SectionLabel";
import Tag from "./Tag";

export default function SkillsSection({ content }) {
  return (
    <section id="skills" className={`${styles.card} ${styles.skillsSection}`}>
      <SectionLabel>{content.skills.label}</SectionLabel>
      {Object.entries(SKILLS).map(([category, tags]) => (
        <div key={category} className={styles.skillGroup}>
          <p className={styles.skillCategory}>
            {content.skills.categories[category]}
          </p>
          <div>
            {tags.map((tag) => (
              <Tag key={tag.label} {...tag} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
