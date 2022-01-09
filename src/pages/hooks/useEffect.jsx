import React, { useEffect } from 'react';

const Effect = () => {
  useEffect(() => {
    console.log('生命周期钩子');
  }, []);
  return <div>生命周期钩子</div>;
};

export default Effect;
