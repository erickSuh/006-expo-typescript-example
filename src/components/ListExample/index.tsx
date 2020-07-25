import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';

import { loadRequest } from '../../store/ducks/repositories/actions';

const ListExample: React.FC = (props) => {
  const dispatch = useDispatch();
  const { repositories } = useSelector((state: ApplicationState) => ({
    repositories: state.repositories.data,
  }));

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={repositories.map((repo) => ({ key: repo.name, name: repo.name }))}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ListExample;
