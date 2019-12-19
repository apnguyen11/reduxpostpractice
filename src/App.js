import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/Postform'
import { Provider} from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import store from './store'

// const store = createStore(() => [], {}, applyMiddleware())

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     
      <PostForm/>
      <hr />
      <Posts/>
     
    </div>
    </Provider>
  );
}

export default App;
