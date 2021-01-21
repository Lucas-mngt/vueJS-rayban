<template>
  <div>
    <div class="rectangle-menu">
      <nav class="nav flex-column">
        <div class="nav-1">
          <router-link to="/" exact>
            <a class="nav-link active" href="#">
              <img src="..\assets\images\icon-1.svg" alt="" />
            </a>
          </router-link>
          <a class="nav-link dropdown" href="#">
            <img src="..\assets\images\icon-2.svg" alt="" />
            <div class="dropdown-content">
              <a href="#">Add Customer</a>
              <a href="#">Add Booking</a>
            </div>
          </a>
          <a class="nav-link" href="#">
            <img src="..\assets\images\icon-3.svg" alt="" />
          </a>
          <a class="nav-link" href="#">
            <img src="..\assets\images\icon-4.svg" alt="" />
          </a>
          <a class="nav-link" href="#" title="Specialist">
            <img src="..\assets\images\icon-5.svg" alt="" />
          </a>
          <a class="nav-link" href="#">
            <img src="..\assets\images\icon-6.svg" alt="" />
          </a>
        </div>
        <div class="nav-2">
          <a class="nav-link" href="#">
            <img src="..\assets\images\icon-7.svg" alt="" />
          </a>
          <a class="nav-link" href="#">
            <img src="..\assets\images\icon-8.svg" alt="" />
          </a>
          <a class="nav-link" href="#">
            <img src="..\assets\images\icon-9.svg" alt="" />
          </a>
        </div>
      </nav>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

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