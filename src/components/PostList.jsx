import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    const { getPostsAndUsers } = this.props;

    getPostsAndUsers();
  }

  renderList() {
    const { posts } = this.props;

    return posts.map(({
      id, title, body, userId,
    }) => (
      <div className="item" key={id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <UserHeader userId={userId} />
        </div>
      </div>
    ));
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ).isRequired,
  getPostsAndUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ posts: state.posts });

export default connect(
  mapStateToProps,
  { getPostsAndUsers: fetchPostsAndUsers },
)(PostList);
