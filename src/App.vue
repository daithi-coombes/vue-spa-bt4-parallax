<template>
  <div id="app">
      <b-navbar toggleable="md" type="light" variant="info" class="text-center">
        <div class="container">

          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-navbar-brand href="#">
            <h3 class="title">My Spunky Company</h3>
          </b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav id="logo-right">
              <b-nav-item href="#"><icon name="phone"></icon></b-nav-item>
              <b-nav-item href="#"><icon name="map-marker-alt"></icon></b-nav-item>
              <b-nav-item href="#">Get Quote</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav id="main-nav">
              <b-nav-item to="/" disabled>Home</b-nav-item>
              <b-nav-item to="/about">About</b-nav-item>
              <b-nav-item to="/contact">Contact</b-nav-item>
            </b-navbar-nav>

          </b-collapse>
        </div>
      </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'

Vue.component('icon', Icon)

export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style scoped>
#main-nav{
  position: absolute;
  width: 100%;
  top: 50px;
  background: #032e41;
  border: 1px solid;
}
#main-nav a{
  color: #C0C0C0;
}
nav.navbar{
  margin-bottom: 50px;
}
nav.navbar.bg-info{
  background: #fff;
}
nav.navbar #nav_collapse{
  position: relative;
}
</style>
