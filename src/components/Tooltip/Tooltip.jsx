import React from 'react';

import styles from './Tooltip.module.css';

/* Tooltip Component

props:
title: Tooltip text
type: (optional) default is bottom display
      'top', 'right', 'left' will display tooltip on that side
      'disabled' will set the display to none

To change default colors, set css variables in Tooltip.module.css
To change hover delay, set css variable in Tooltip.module.css
*/

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
    <span className={`${tooltipType}`} data-md-tooltip={title}>
      {children}
    </span>
  );
};
