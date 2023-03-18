<template>
  <div class="counter-app-container">
    <div class="counter">
      <h1>Counter</h1>
      <h2>{{ value }}</h2>
      <div class="buttons">
        <button class="dec" @click="decrement">Decrement</button>
        <button class="increment" @click="increment">Increment</button>
        <button class="reset" @click="reset">Reset</button>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
  props: {
    initialValue: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const value = ref(props.initialValue);

    const increment = () => {
      value.value++;
    };

    const decrement = () => {
      value.value--;
    };

    const reset = () => {
      value.value = props.initialValue;
    };

    const setValue = (newValue) => {
      value.value = newValue;
    };

    return {
      value,
      increment,
      decrement,
      reset,
      setValue
    };
  }
};
</script>
  
<style scoped>
.counter-app-container {
  width: 100%;
  height: 100vh;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
}

.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

h2 {
  font-size: 5em;
  margin: 0;
}

.buttons {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  margin: 0 10px;
  padding: 20px 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}

.dec {
  background-color: #f00;
  color: #fff;
}

.increment {
  background-color: #0f0;
  color: #fff;
}

.reset {
  background-color: #00f;
  color: #fff;
}
</style>