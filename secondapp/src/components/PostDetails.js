import React, {Component } from 'react';
import { Link } from 'react-router-dom';

class PostDetails extends Component {
    constructor(props){
        super(props)

        console.log(props);

        this.state = {
            title: this.props.match.params.mysub
        }
    }
    render(){
        return(
            <div>
                <div class="panel panel-info">
                    <div class="panel-heading">Post Details Page</div>
                    <div class="panel-body">
                        <h2>Details page for {this.state.title}</h2>
                        <p>A jumbotron indicates a big box for calling extra attention to some special content or information.
                            A jumbotron is displayed as a grey box with rounded corners. It also enlarges the font sizes of the text inside it.
                            Tip: Inside a jumbotron you can put nearly any valid HTML, including other Bootstrap elements/classes.
                        </p>
                        <Link to="/posts" className="btn btn-danger">Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetails;