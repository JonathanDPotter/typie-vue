<script setup lang="ts"></script>

<template>
  <footer class="container fixed-bottom vh-10">
    <div class="row">
      <div class="col text-center">
        <p>Jonathan Potter 2022</p>
      </div>
      <div class="col">
        <nav class="w-100 d-flex justify-content-around">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/login">Login</router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>
