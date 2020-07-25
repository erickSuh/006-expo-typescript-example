import React, { useEffect } from 'react';

import { ApplicationState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';

import { loadRequest } from '../../store/ducks/repositories/actions';

const ListExample: React.FC = (props) => {
  const dispatch = useDispatch();
  const { repositories } = useSelector((state: ApplicationState) => ({
    repositories: state.repositories.data,
  }));

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  console.log('repositories', repositories);

  return (
    <div>
      <ul>
        {repositories.map((repo) => (
          <li>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListExample;
