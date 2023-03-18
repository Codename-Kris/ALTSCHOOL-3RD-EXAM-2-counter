import { computed } from 'vue';
import { useStore } from 'vuex';

export default
    function useCounter() {
    const store = useStore();

    const count = computed(() =>
        store.getters.getCount);

    function increment() {
        store.dispatch('increment');
    }

    function decrement() {
        store.dispatch('decrement');
    }
    
    function reset() {
        store.dispatch('reset');
    }

    function setValue(value) {
        store.dispatch('setValue',
            value);

    }
    return {
        count,
        increment,
        decrement,
        reset,
        setValue,
    };
}