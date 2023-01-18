import React from 'react';

import styles from './Tooltip.module.css';

/* Tooltip Component */

export const Tooltip = ({ title, type, children }) => {
  let tooltipType = '';
  switch (type) {
    case 'top':
      tooltipType = styles.mdTooltipTop;
      break;
    case 'right':
      tooltipType = styles.mdTooltipRight;
      break;
    case 'left':
      tooltipType = styles.mdTooltipLeft;
      break;
    case 'disabled':
      tooltipType = styles.mdTooltipDisabled;
      break;
  }
  return (
    <div className={`${tooltipType}`} data-md-tooltip={title}>
      {children}
    </div>
  );
};
