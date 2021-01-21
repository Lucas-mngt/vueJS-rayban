
<template>
  <div id="app">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from './components/Menu'

export default {
  components: {
    'Menu': Menu
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
body {
  font-family: Helvetica, sans-serif;
  background-color: white;
}
.rectangle-menu {
  position: absolute;
  display: flex;
  width: 58px;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #ed212f;
}
.nav-1 {
  position: absolute;
  top: 5%;
}
.nav-2 {
  position: absolute;
  bottom: 0;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ed212f;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  text-decoration-color: white;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
