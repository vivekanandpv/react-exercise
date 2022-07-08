import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { User } from '../models/user.models';
import { AppState } from '../store/app-store';

interface UsersProps {}

const Users: FunctionComponent<UsersProps> = (props: UsersProps) => {
  const users = useSelector<AppState, User[]>((state) => state.users);
  return (
    <>
      <h3>Users Component</h3>
      <table className='table table-bordered table-sm'>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
