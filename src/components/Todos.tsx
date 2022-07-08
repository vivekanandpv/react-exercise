import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/app-store';
import { Todo } from '../store/todos-slice';

interface TodosProps {}

const Todos: FunctionComponent<TodosProps> = (props: TodosProps) => {
  const todos = useSelector<AppState, Todo[]>((state) => state.todos);

  return (
    <>
      <h3>Todos Component</h3>
      <table className='table table-bordered table-sm'>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
        </thead>
        <tbody>
          {todos.map((t) => {
            return (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.completed ? 'Yes' : 'No'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Todos;
