import React from 'react';
import ReactQuill from 'quill'; // ES6
import 'react/dist/quill.snow.css'; // ES6

class Editor extends React.Component {
    constructor(props) {
      super(props)
      this.state = { text: '' } // You can also pass a Quill Delta here
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(value) {
      this.setState({ text: value })
    }
  
    render() {
      return (
        <ReactQuill value={this.state.text} onChange={this.handleChange} />
      )
    }
}

export default Editor;