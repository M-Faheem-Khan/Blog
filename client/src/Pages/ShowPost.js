import React from 'react';
// Components
import AppNavbar from '../Components/AppNavbar'; // Navbvar

// Styles
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class Posts extends React.Component {
	state = {
		posts: "",
		posts_len: 0
	}
	
	componentWillMount(){
		// fetch content from server in the mean show loading
		let url = "http://localhost:5000/api/posts" + window.location.pathname;
		fetch(url).then((response) => {
			return response.json()
		}).then((response) => {
			response = response.data[0]
			// setting the state
			this.setState({
				posts: response,
				posts_len: 1
			});
		}).catch((error) => {
			// logging the error
			console.log(error);
		})
	}

	render(){
		if (this.state.posts_len === 0){
			return (
				<div>
					<center>
						<AppNavbar />
						<div className="container">
							Loading...
						</div>
					</center>
				</div>
			)
		} else {
			const post_info = this.state.posts;
			return (
				<div>
					<AppNavbar />
					<div className="container">
						{console.log(post_info)}
						<div className="justify-content-start">
							<center>
								<img src={post_info.image} style={style.ImageStyles}/>
							</center>
							<div className="card-body">
								<h5 className="card-title">{post_info.title}</h5>
								<p className="card-text ">{post_info.content}</p>
								<a href="/" className="btn btn-outline-primary">Home</a>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

const style = {
    ImageStyles: {
		width: "100%",
		height: "70%",
        marginBottom: "7px"
    }
}

export default Posts;
