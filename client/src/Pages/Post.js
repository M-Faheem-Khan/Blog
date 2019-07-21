import React, { Component } from "react"; 
// Components
import AppNavBar from '../Components/AppNavbar'; 
import Editor from '../Components/Editor';

// Create Blog Post
class POST extends Component {
  render() {
    return (
     <div>
       <AppNavBar/>
       <Editor/>
     </div>
    );
  }
}

export default POST;