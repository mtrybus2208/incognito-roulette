import styles from './test.module.css';

/* eslint-disable-next-line */
export interface TestProps {}

export function Test(props: TestProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Test - mt!</h1>
    </div>
  );
}
