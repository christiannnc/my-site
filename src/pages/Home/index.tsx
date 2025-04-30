import { FC, useState } from 'react';
import portrait from '../../assets/portrait.jpg';
import styles from './index.module.css';
import clsx from 'clsx';
import { RESUME_URL, SKILL_CARD_MAPPING } from '../../constants';
import { SKILL_CATEGORY } from '../../enums';
import SkillCard from '../../components/SkillCard';
import { capitalizeFirstLetters } from '../../utils/strings';

const HomePage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SKILL_CATEGORY>(
    SKILL_CATEGORY.ALL
  );

  return (
    <div>
      <h1>Hello, I'm Christian</h1>

      <div className={styles.aboutSectionContainer}>
        <img className={styles.portrait} src={portrait} />

        <a className={styles.viewResumeLink} href={RESUME_URL} target="_blank">
          View resume
        </a>

        <div className={styles.tagContainer}>
          <span className={styles.tag}>{'<about>'}</span>
          <span className={styles.description}>
            I like to build things that solve problems
          </span>
          <span className={styles.tag}>{'</about>'}</span>
        </div>

        <div className={styles.paragraphContainer}>
          <p className={clsx(styles.paragraph, styles.condensed)}>
            I'm a recent Economics graduate from North Carolina State
            University.
          </p>
          <p className={styles.paragraph}>
            I chose economics because it teaches critical-thinking and
            analytical problem-solving skills. This aligns with my interest in
            software engineering, where I enjoy the challenge of solving
            meaningful and complex real-world problems.
          </p>
        </div>
      </div>

      <div className={styles.technicalSkillsContainer}>
        <h3>Skills</h3>

        <div className={styles.skillSelectorContainer}>
          <div className={styles.skillCategorySelector}>
            {Object.values(SKILL_CATEGORY).map((category, idx) => (
              <label
                key={idx}
                className={
                  selectedCategory === category
                    ? clsx(styles.skillCategoryLabel, styles.selected)
                    : styles.skillCategoryLabel
                }
                onClick={() => setSelectedCategory(category)}
              >
                {capitalizeFirstLetters(category)}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.skillsContainer}>
          {SKILL_CARD_MAPPING.map(
            ({ category, skill, img }, idx) =>
              (category === selectedCategory ||
                selectedCategory === SKILL_CATEGORY.ALL) && (
                <SkillCard key={idx} skill={skill} className={img} />
              )
          )}
        </div>
      </div>

      <div className={styles.contactContainer}>
        <h2>Let's talk!</h2>

        <div className={styles.emailContainer}>
          <a className={styles.email} href="mailto:christian@christianmcox.com">
            christian@christianmcox.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
