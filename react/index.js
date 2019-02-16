/**
 * The Entrypoint of our React application
 */
import React from 'react';
import { render } from 'react-dom';
import App from './client/app';

render(<App/>, document.getElementById('app'));