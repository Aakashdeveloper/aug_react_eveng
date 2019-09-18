import React,{Component} from 'react';
import {connect} from 'react-redux';
import { latestNews,articleNews } from '../actions';
import { bindActionCreators } from 'redux';

//
import LatestNews from '../components/home/LatestNews';
import ArticleNews from '../components/home/ArticleNews';

class Home extends Component{

    componentDidMount(){
        this.props.latestNews();
        this.props.articleNews()
    }

    render(){
        return(
            <div>
                <hr/>
               <LatestNews latest={this.props.myarticles.latest}/>
               <ArticleNews article={this.props.myarticles.article}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        myarticles:state.article
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)