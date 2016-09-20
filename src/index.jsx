import 'babel-polyfill';
import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import configureStore from './store';

const store = configureStore();

render(<AppContainer><App store={store} /></AppContainer>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const AppComponent = require('./components/App').default;

    render(
      <AppContainer>
        <AppComponent store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
