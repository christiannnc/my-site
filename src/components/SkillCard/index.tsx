import { FC } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

interface SkillCardProps {
  className: string;
  skill: string;
}

const SkillCard: FC<SkillCardProps> = ({ className, skill }) => {
  return (
    <div className={styles.skillCard}>
      <i className={clsx(className, styles.skillIcon)}></i>

      <label className={styles.skillLabel}>{skill}</label>
    </div>
  );
};

export default SkillCard;
