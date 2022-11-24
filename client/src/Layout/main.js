import React from 'react';

/* Using React Memo to prevent Unnecessary re-renders */

function Main({ children, className }) {
  return <main className={className}>{children}</main>;
}

export default React.memo(Main);
