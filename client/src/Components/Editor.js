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
    createPost(e){
        if (this.state.text.length < 100){
            alert("Please Add more content")
        } else {
            let data = {
                "title": this.state.title,
                "image": this.state.image,
                "text": this.state.text
            }
            console.log(data)
            fetch("http://localhost:5000/api/posts/create", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => {
                return response.json();
            }).then((response) => {
                console.log(response)
                window.location.href = "http://localhost:3000/"
            });
        }
    }
  
    render() {
        return (
            <div className="container">
                <Form>
                    <div className="justify-content-start">
                        <ReactQuill value={this.state.text} onChange={this.handleChange} />
                        <Input style={style.ButtonStyles} onChange={this.handleImageChange.bind(this)} type="text" name="title" placeholder="Title" required/>
                        <Input style={style.ButtonStyles} onChange={this.handleImageChange.bind(this)} type="text" name="image" placeholder="Title Image URL" required/>
                        <Button style={style.ButtonStyles} onClick={this.createPost.bind(this)} outline color="primary" >Post</Button>
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