import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import  Almond from '../French-Almond-Cake-6-500x500.jpg'

import Death from '../delish-death-by-chocolate-cake-3.jpg'

class Home extends Component {

    render() {
        console.log(this.props);
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Almond} alt="Almond Cake"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                <span className="card-title orange-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
            
                        </div>

                    </div>

                )
            })
           
               ) : (
               <div className="center">No posts yet</div>
               )

        return(
            <div className="container home">
            <h4 className="center">Home</h4>
            {postList}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
   }

export default connect(mapStateToProps)(Home);