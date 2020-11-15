<template>
  <div id="app">
    <Navbar/>
    <slot id="content"><Employee/></slot>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Employee from './components/Employees'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Employee
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
