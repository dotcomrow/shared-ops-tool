import * as React from 'react';
import './App.css';

export default function App() {
  return (
    <div
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{
        __html:
          "<iframe src='https://mephmanx.github.io/csb-3zsiwp/' class='container'/>",
      }}
    />
  );
}
