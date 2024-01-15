
import Header from './Header';
import Nav from './Nav'
import NewPost from './NewPost';
import About from './About'
import Home from './Home'
import Missing from './Missing';
import Footer from './Footer';
import PostPage from './PostPage';

import {Route, Switch, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/post'>
      <NewPost />
      </Route>
      <Route path='/post/:id'>
      <PostPage />
      </Route>
      <Route path='/about' Component={About} />
      <Route path='.' Component={Missing} />
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
