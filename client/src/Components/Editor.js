import React from 'react';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Input} from 'reactstrap'

class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            text: '',
            image: '',
            title: ''
        } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }  

    handleImageChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    
    handleChange(value){
        this.setState({text: value})
    }

    // onclick send the data back the the database
  
    render() {
        return (
            <div className="container">
                <Form>

                <div className="justify-content-start">
                    <ReactQuill value={this.state.text} onChange={this.handleChange} />
                    <Input style={style.ButtonStyles} onChange={this.handleImageChange.bind(this)} type="text" name="title" placeholder="Title" required/>
                    <Input style={style.ButtonStyles} onChange={this.handleImageChange.bind(this)} type="text" name="image" placeholder="Title Image URL" required/>
                    <Button style={style.ButtonStyles} outline color="primary">Post</Button>
                </div>
                </Form>
            </div>
        );
    }
}

const style = {
    ButtonStyles: {
        marginTop: "7px"
    }    
}

export default Editor;