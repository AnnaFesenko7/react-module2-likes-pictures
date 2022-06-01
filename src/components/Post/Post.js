import { GrLike } from 'react-icons/gr';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Post.module.css';

class Post extends Component {
  toggleLike = () => {
    const { id, onChange } = this.props;
    onChange(id);
  };
  render() {
    const { imgUrl, isLiked, count } = this.props;
    return (
      <div>
        <span>{isLiked ? 'Like' : 'notLike'}</span>
        <span>count:{count}</span>

        <img className={s.image} src={imgUrl} alt="nature" />
        <div className={isLiked ? s.liked : s.notLiked}>
          <GrLike onClick={this.toggleLike} className={s.like} />
        </div>
      </div>
    );
  }
}

Post.PropType = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Post;
