import React from 'react';
import styles from './index.less';
import UseState from './hooks/useState.jsx';
import Effect from './hooks/useEffect.jsx';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <UseState></UseState>
      <Effect></Effect>
    </div>
  );
}
