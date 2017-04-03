import MainLayout from 'components/layouts/MainLayout';
import { postPath, postsPath } from 'helpers/routes';
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

const PostsRoute = {
  path: postsPath(),
  component: PostsContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPosts(params.page));
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    PostsRoute
  ]
};
