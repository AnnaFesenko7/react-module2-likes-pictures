import React, { Component } from 'react';
import s from './App.module.css';
import Post from './Post/Post';

export class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        isLiked: false,
        count: 0,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_q43zase--Uy4kOJR8Tx5nIVbA0g1jpI2mg&usqp=CAU',
      },
      {
        id: 2,
        isLiked: false,
        count: 0,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsQB5g1noqrv-d9ySbI_VYEO_dFllLaS5aQ&usqp=CAU',
      },
      {
        id: 3,
        isLiked: false,
        count: 0,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiEi7kNyO3qT5gpybIiaUDBCTBT2kBj54Mg&usqp=CAU',
      },
    ],
  };

  onChange = id => {
    this.setState(prevState => {
      const prevPosts = prevState.posts;
      const currentPostIndex = prevPosts.findIndex(post => post.id === id);
      const oldPost = prevPosts[currentPostIndex];
      return {
        posts: [
          ...prevPosts.filter((_, index) => index < currentPostIndex),
          {
            id: oldPost.id,
            imgUrl: oldPost.imgUrl,
            isLiked: !oldPost.isLiked,
            count: oldPost.count + 1,
          },
          ...prevPosts.filter((_, index) => index > currentPostIndex),
        ],
      };
    });
  };

  getLikesCount = () => {
    const { posts } = this.state;
    return posts.reduce((total, post) => (post.isLiked ? total + 1 : total), 0);
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <div className={s.wrapper}>
          {posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              imgUrl={post.imgUrl}
              isLiked={post.isLiked}
              count={post.count}
              onChange={this.onChange}
            />
          ))}
        </div>
        <span className={s.total}>Total likes:{this.getLikesCount()}</span>
      </div>
    );
  }
}
