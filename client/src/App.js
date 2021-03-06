import React from 'react';
// Routing / Navigation
import { Route, Switch } from 'react-router-dom'
// Pages
import Homepage from './Pages/Homepage';
import ShowPost from './Pages/ShowPost';
import BlogPost from './Pages/Post';

// Styles
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} /> {/* Show All Posts */}
      <Route exact path="/post/create" component={BlogPost}/>
      <Route path="/:post_id" component={ShowPost} /> {/* Show Single Post */}
    </Switch>
  );
}

export default App;
