# Random-Pokemon

aplikasi yang menghasilkan random pokemon dari koneksi ke graphql server -> PokeAPI

##Cara Setup

1.Clone

2.Install dependies server.Masuk ke folder server dan eksekusi:
	`yarn`

3. untuk menghasilkan folder android dan ios eksekusi;
 `react-native eject`

4.jalankan server

5.replace url graphql server
	`const client = new ApolloClient({ uri: 'http://URL_GRAPHQL_SERVER:4000/graphql' });` 
