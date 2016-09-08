import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import Navbar from '../Navbar';
import LoginModal from '../LoginModal';
import Sidebar from '../Sidebar';
import Results from '../Results';
import '../../stylesheets/App.scss';

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <div>
      <Navbar />
      <div className="flex-content-row">
        <Sidebar />
        <Results />
      </div>
      <LoginModal />
    </div>
  </Provider>
);

export default App;
