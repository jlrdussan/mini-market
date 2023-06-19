import { ReactNode } from 'react';

import Divider from 'components/Divider';

import styles from './styles.module.scss';

interface Props {
  children?: ReactNode;
  title?: string;
}

const WrapperPage = ({ children, title }: Props) => {
  return (
    <div className={styles.wrapper}>
      {title && <h4>{title}</h4>}
      <Divider />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default WrapperPage;
