import React, { useState } from 'react';
import styles from './index.less';
import UseState from './hooks/useState.jsx';
import Effect from './hooks/useEffect.jsx';
export default function IndexPage() {
  let [isOk, setIsOk] = useState(true);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <UseState></UseState>
      {isOk ? <Effect></Effect> : ''}
      <button onClick={() => setIsOk(!isOk)}>切换Effect</button>
    </div>
  );
}
