"use client";

import { useState } from "react";
import { TAG_COLORS } from "../data/portfolio";
import styles from "../page.module.css";
import SectionLabel from "./SectionLabel";
import Tag from "./Tag";

const PAGE_SIZE = 3;
const GAP = 12;

export default function WorkSection({ content }) {
  const projects = content.work.projects;
  const [page, setPage] = useState(0);

  const pages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const canPrev = page > 0;
  const canNext = page + 1 < pages;

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(p + 1, pages - 1));
  const gotoPage = (i) => setPage(i);

  return (
    <section id="work" className={`${styles.card} ${styles.workSection}`}>
      <SectionLabel className={styles.workLabel}>
        {content.work.label}
      </SectionLabel>
      <p className={styles.workIntro}>{content.work.intro}</p>
      <div className={styles.carouselWrapper}>
        <button
          className={styles.carouselArrow}
          onClick={prev}
          disabled={!canPrev}
          aria-label="Vorige pagina"
        >
          ‹
        </button>
        <div className={styles.carouselViewport}>
          <div
            className={styles.projectTrack}
            style={{
              transform: `translateX(calc(${-page} * (100% + ${GAP}px)))`,
            }}
          >
            {Array.from({ length: pages }).map((_, i) => {
              const slice = projects.slice(
                i * PAGE_SIZE,
                i * PAGE_SIZE + PAGE_SIZE,
              );
              return (
                <div key={i} className={styles.slide}>
                  <div className={styles.slideContent}>
                    {slice.map((project) => (
                      <article
                        key={project.title}
                        className={styles.projectCard}
                      >
                        <div className={styles.projectMetaRow}>
                          <span className={styles.projectMeta}>
                            {project.type} &middot; {project.year}
                          </span>
                          {project.live && (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.liveLink}
                            >
                              {content.work.liveLabel}
                            </a>
                          )}
                        </div>
                        <p className={styles.projectTitle}>{project.title}</p>
                        <p className={styles.projectDescription}>
                          {project.desc}
                        </p>
                        <div>
                          {project.tagLabels.map((label) => (
                            <Tag
                              key={label}
                              label={label}
                              variant="project"
                              {...TAG_COLORS[label]}
                            />
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className={styles.carouselArrow}
          onClick={next}
          disabled={!canNext}
          aria-label="Volgende pagina"
        >
          ›
        </button>
      </div>
      {pages > 1 && (
        <div className={styles.carouselDots}>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === page ? styles.dotActive : ""}`}
              onClick={() => gotoPage(i)}
              aria-label={`Pagina ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
