import MainLayout from 'components/layouts/MainLayout';
import initialLoad from 'helpers/initialLoad';

import { postPath, editPostPath,
         postsPath, contactsPath } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import EditPostContainer from 'containers/EditPostContainer';
import Contacts from 'components/views/Contacts';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

const EditPostRoute = {
  path: editPostPath(),
  component: EditPostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

const PostsRoute = {
  path: postsPath(),
  component: PostsContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts(params.page));
  }
};

const ContactsRoute = {
  path: contactsPath(),
  component: Contacts
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    EditPostRoute,
    PostsRoute,
    ContactsRoute
  ]
};
