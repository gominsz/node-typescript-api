import { SetupServer } from './server';

console.log('Ta funcionando RELAXA!!');
const server = new SetupServer(3333);
server.init().then(() => {
  server.start(() => console.log('abriu'));
});
