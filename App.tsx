import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { BottomNavigation, Button, DefaultTheme, Text, Provider as PaperProvider, Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1f6ef3',
    accent: '#0e1c36',
  },
};

const MusicRoute = () => (
  <View style={styles.container}>
    <Text>Search</Text>
    <StatusBar style="auto" />
  </View>
)

const AlbumsRoute = () => (
  <View style={styles.container}>
    <Text>Recents</Text>
    <StatusBar style="auto" />
  </View>
)

const RecentsRoute = () => (
  <View style={styles.container}>
    <Text>Albumbs</Text>
    <StatusBar style="auto" />
  </View>
)

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'camera' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <PaperProvider theme={theme}>
          <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
      <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
