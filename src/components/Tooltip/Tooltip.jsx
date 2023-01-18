import React from 'react';

import styles from './Tooltip.module.css';

/* Tooltip Component */

export const Tooltip = ({ title, children }) => {
  return (
    <div className={styles.mdTooltipTop} data-md-tooltip={title}>
      {children}
    </div>
  );
};
