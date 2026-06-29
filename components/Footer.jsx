import styles from "../page.module.css";

export default function Footer({ content }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        {content.footer.builtBy} {content.profile.name} &middot;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
