import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Todos from './container/Todos';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
