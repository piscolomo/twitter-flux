import {Dispatcher} from 'flux';

const fluxDispatcher = new Dispatcher();

fluxDispatcher.register(action => console.log(action));

export default fluxDispatcher