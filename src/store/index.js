import counter from './counter';
import { createStore } from 'vuex';

export default createStore({
  modules: {
    counter,
  },
});