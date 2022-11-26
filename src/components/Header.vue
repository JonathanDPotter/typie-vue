<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const logOut = () => {
  store.dispatch("logOut");
  router.push({ name: "login" });
};
</script>

<template>
  <header class="vh-15 container py-2">
    <div class="row">
      <div class="col-md">
        <h1 class="fw-bold">
          Typie-Talkie<FontAwesomeIcon :icon="faBullhorn" class="ms-2" />
        </h1>
      </div>
      <div class="col text-end">
        <button @click="logOut" class="btn btn-light">Log Out</button>
      </div>
    </div>
  </header>
</template>
