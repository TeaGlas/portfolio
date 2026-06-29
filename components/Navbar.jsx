import { LANGUAGES } from "../data/portfolio";
import styles from "../page.module.css";

const NAV_ITEMS = ["about", "skills", "work", "contact"];

export default function Navbar({
  content,
  language,
  onLanguageChange,
  onNavigate,
  scrolled,
}) {
  const nextLanguage = language === "nl" ? "en" : "nl";

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <span className={styles.brand}>{content.profile.brand}</span>
      <div className={styles.navLinks}>
        {NAV_ITEMS.map((id) => (
          <button
            key={id}
            className={styles.navBtn}
            onClick={() => onNavigate(id)}
            type="button"
          >
            {content.nav[id]}
          </button>
        ))}
        <button
          className={styles.languageToggle}
          onClick={() => onLanguageChange(nextLanguage)}
          type="button"
          aria-label={`Switch to ${LANGUAGES[nextLanguage]}`}
        >
          {LANGUAGES[language]}
        </button>
      </div>
    </nav>
  );
}
