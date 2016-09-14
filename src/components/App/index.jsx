import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import Navbar from '../Navbar';
import LoginModal from '../LoginModal';
import Sidebar from '../Sidebar';
import MainBody from '../MainBody';
import './App.scss';

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <div>
      <Navbar />
      <div className="flex-content-row">
        <Sidebar />
        <MainBody />
      </div>
      <LoginModal />
    </div>
  </Provider>
);

export default App;
