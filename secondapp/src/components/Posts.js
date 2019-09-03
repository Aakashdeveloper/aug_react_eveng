import React, {Component} from 'react';
import { Link} from 'react-router-dom';

class Posts extends Component {
    render(){
        return(
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">Post Page</div>
                    <div className="panel-body">
                        <p>A jumbotron indicates a big box for calling extra attention to some special content or information.
                            A jumbotron is displayed as a grey box with rounded corners. It also enlarges the font sizes of the text inside it.
                            Tip: Inside a jumbotron you can put nearly any valid HTML, including other Bootstrap elements/classes.
                            <h3>JavaScript</h3>
                            <Link to="/posts/javascript" className="btn btn-info btn-sm">Details</Link>
                            <h3>React</h3>
                            <Link to="/posts/react" className="btn btn-info btn-sm">Details</Link>
                            <h3>Node</h3>
                            <Link to="/posts/node" className="btn btn-info btn-sm">Details</Link>
                            <h3>Redux</h3>
                            <Link to="/posts/redux" className="btn btn-info btn-sm">Details</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts