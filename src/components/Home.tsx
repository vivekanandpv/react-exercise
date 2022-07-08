import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/app-store';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = (props: HomeProps) => {
  const appState = useSelector<AppState, AppState>((state) => state);

  return (
    <>
      <h3>Home Component</h3>
      <p>Albums: {appState.albums.length}</p>
      <p>Users: {appState.users.length}</p>
      <p>Todos: {appState.todos.length}</p>
    </>
  );
};

export default Home;
