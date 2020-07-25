import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from "react-native";

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

  return (
    <View>
      <FlatList data={repositories.map((repo) => ({ key: repo.name, name: repo.name }))}
        renderItem={({ item }) => <Text>{item.name}</Text>}>
      </FlatList>
    </View>
  );
};

export default ListExample;
