import React, { FunctionComponent, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { User } from './models/user.models';
import { restService } from './services/rest.service';
import { Album, albumsSlice } from './store/albums-slice';
import { Todo, todosSlice } from './store/todos-slice';
import { useDispatch } from 'react-redux';
import { usersSlice } from './store/users-slice';
import { AxiosResponse } from 'axios';

const Home = React.lazy(() => import('./components/Home'));
const Albums = React.lazy(() => import('./components/Albums'));
const Users = React.lazy(() => import('./components/Users'));
const Todos = React.lazy(() => import('./components/Todos'));
const NotFound = React.lazy(() => import('./components/NotFound'));

interface AppProps {}

const App: FunctionComponent<AppProps> = (props: AppProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch initial data to the store

    const populateUsers = async () => {
      const usersResponse = await restService.get<User[]>('users');

      dispatch(usersSlice.actions.loadUsers(usersResponse.data));
    };

    const populateAlbums = async () => {
      const albumsResponse = await restService.get<Album[]>('albums');
      dispatch(albumsSlice.actions.loadAlbums(albumsResponse.data));
    };

    const populateTodos = async () => {
      const todosResponse = await restService.get<Todo[]>('todos');
      console.log('populateTodos', todosResponse.data);
      dispatch(todosSlice.actions.loadTodos(todosResponse.data));
    };

    const getDataFromServer = async () => {
      await populateAlbums();
      await populateTodos();
      await populateUsers();
    };

    getDataFromServer();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container p-5'>
          <React.Suspense fallback={<div>Loading app...</div>}>
            <Switch>
              <Route path='/home' exact component={Home} />
              <Redirect from='/' to='/home' exact />
              <Route path='/albums' exact component={Albums} />
              <Route path='/users' exact component={Users} />
              <Route exact component={Todos} path='/todos' />

              <Route path='*' component={NotFound} />
            </Switch>
          </React.Suspense>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
