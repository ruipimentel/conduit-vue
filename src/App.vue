<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from './components/Header';
import Home from './components/Home';
export default {
  name: 'App',
  components: {
    Home,
    Header
  }
}
</script>

<style>
</style>
