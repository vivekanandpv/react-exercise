import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Album } from '../store/albums-slice';
import { AppState } from '../store/app-store';

interface AlbumsProps {}

const Albums: FunctionComponent<AlbumsProps> = (props: AlbumsProps) => {
  const albums = useSelector<AppState, Album[]>((state) => state.albums);
  return (
    <>
      <h3>Albums Component</h3>
      <table className='table table-bordered table-sm'>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>User Id</th>
        </thead>
        <tbody>
          {albums.map((a) => {
            return (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.title}</td>
                <td>{a.userId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Albums;
