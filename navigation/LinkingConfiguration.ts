import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Explore: {
            screens: {
              ExploreScreen: 'one',
            },
          },
          MyStocks: {
            screens: {
              MyStocksScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
