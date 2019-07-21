import React, { Component } from "react"; 

// Styles
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class Content extends Component {
    render() {
        return (
            <div key={this.props.post_info._id}>
                <div className="justify-content-start">
                    <div className="card" style={style.CardStyles}>
                        <img className="card-img-top" src={this.props.post_info.image}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.post_info.title}</h5>
                            <a href={this.props.post_info.url} className="btn btn-outline-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    CardStyles: {
        width: '100%',
        marginBottom: "7px"
    }
}

export default Content;