import React from 'react';
import ReactDOM from 'react-dom';
import Main from './lib/components/main';
import './style/main.css';

var initialProps = {
  frameUrl: '//slides.com/javierperez-3/deck/embed?style=light',
  seconds: 60 * 15
};

window.onload = () => {
  ReactDOM.render(
    <Main {...initialProps} />,
    document.querySelector('#container')
  );
};
