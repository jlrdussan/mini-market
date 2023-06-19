import styles from './styles.module.scss';

interface Props {
  count?: number;
  bottom?: string;
  left?: string;
  position?: 'absolute' | 'relative' | 'static';
  right?: string;
  top?: string;
  width?: string;
}

const CircleCount = ({
  count,
  bottom,
  left,
  position,
  right,
  top,
  width = '45px',
}: Props) => {
  const stylesCircle = {
    bottom: bottom,
    height: width,
    left: left,
    position: position,
    right: right,
    top: top,
    width: width,
  };

  return (
    <div
      data-testid="custom-circle-count"
      className={styles.circle}
      style={stylesCircle}
    >
      <span className={styles.count}>{count}</span>
    </div>
  );
};

export default CircleCount;
