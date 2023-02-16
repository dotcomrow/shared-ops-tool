import * as React from 'react';
import './App.css';

export default function App() {
  return (
    <div
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{
        __html: "<iframe src='https://k09ml1.csb.app/' class='container'/>",
      }}
    />
  );
}
