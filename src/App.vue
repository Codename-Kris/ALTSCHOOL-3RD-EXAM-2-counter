<template>
  <div id="app">

    <Counter :initialValue="count" />

  </div>
</template>

<script>
import Counter from "./components/CounterApp.vue";

export default {
  name: "App",
  components: {
    Counter
  },
  
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.counter {
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

</style>