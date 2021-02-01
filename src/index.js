import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

// redux setup
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk';    

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(error) {
    console.log(error);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
	composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
