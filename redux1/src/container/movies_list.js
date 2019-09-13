import React, {Component} from 'react';
import { connect} from 'react-redux';
import * as actions from '../actions';
import List from '../component/list'

class MoviesList extends Component {

    componentDidMount(){
        this.props.moviesList();
    }

    render(){
        return(
            <div>
                <List movlist={this.props.data}></List>
            </div>
        )
    }


}

function mapStateToProps(state){
    return{
        data: state.movies
    }
}

export default connect(mapStateToProps,actions) (MoviesList);