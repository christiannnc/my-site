import { FC } from 'react';
import styles from './index.module.css';

interface NavbarTabProps {
  url: string;
  label: string;
}

const NavbarTab: FC<NavbarTabProps> = ({ url, label }) => {
  return (
    <div className={styles.tab}>
      <a className={styles.link} href={url} target={'_blank'}>
        {label}
      </a>
    </div>
  );
};

export default NavbarTab;
