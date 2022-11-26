<script setup lang="ts">
import api from "@/api";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const username = ref<string>("");
const password = ref<string>("");
const repeatPassword = ref<string>("");
const isLogin = ref<boolean>(false);

const setUserAndToken = (token: string) => {
  store.commit("setUser", username.value);
  localStorage.setItem("user", username.value);
  store.commit("setToken", token);
  localStorage.setItem("token", token);
};

const handleSubmit = async (event: any) => {
  event.preventDefault();
  try {
    const res = isLogin.value
      ? await api.login({ username: username.value, password: password.value })
      : await api.register({
          username: username.value,
          password: password.value,
        });
    res.data.token
      ? setUserAndToken(res.data.token)
      : window.alert(res.data.message);
  } catch (error: any) {
    window.alert(error.message);
  }
  username.value = "";
  password.value = "";
  repeatPassword.value = "";
  router.push({ name: "home" });
};
</script>

<template>
  <div class="container">
    <h2 v-if="isLogin">Login</h2>
    <h2 v-else>Register</h2>
    <div class="row">
      <div class="col text-start">
        <form class="container">
          <div class="row">
            <div class="col">
              <label for="username">username</label>
            </div>
            <div class="col">
              <input name="username" type="text" v-model="username" required />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="password">password</label>
            </div>
            <div class="col">
              <input name="password" type="text" v-model="password" required />
            </div>
          </div>
          <div class="row" v-if="!isLogin">
            <div class="col">
              <label for="repeatPassword">Repeat Password</label>
            </div>
            <div class="col">
              <input
                name="repeatPassword"
                type="text"
                v-model="repeatPassword"
                required
              />
            </div>
          </div>
          <div class="row vh-5">
            <div v-if="username && password && isLogin" class="col">
              <button class="btn btn-light" @click="handleSubmit">
                Submit
              </button>
            </div>
            <div
              v-else-if="
                username && password && password === repeatPassword && !isLogin
              "
              class="col"
            >
              <button @click="handleSubmit" class="btn btn-light">
                submit
              </button>
            </div>
            <div class="col"></div>
          </div>
          <div v-if="!isLogin" class="row">
            <p>Already registered?</p>
            <div class="col">
              <button class="btn btn-light" @click="isLogin = true">
                Log In
              </button>
            </div>
          </div>
          <div v-else class="row">
            <p>Nedd to Register?</p>
            <div class="col">
              <button class="btn btn-light" @click="isLogin = false">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<!-- import React, { FC, FormEvent, useRef, useState } from "react";

      <form action="submit" onSubmit={handleSubmit}>
        <div className="label-input">
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={username}
            id="username"
            autoComplete="username"
          />
        </div>
        <div className="label-input">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            id="password"
            autoComplete="new-password"
          />
        </div>
        {login ? (
          <></>
        ) : (
          <div className="label-input">
            <label htmlFor="repeatPassword">repeat password</label>
            <input
              type="password"
              name="repeatPassword"
              onChange={handleChange}
              value={repeatPassword}
              id="repeatPassword"
              autoComplete="new-password"
            />
          </div>
        )}
        <div className="label-input">
          <button
            type="submit"
            ref={submitButtonRef}
            disabled={
              login
                ? !(username && password)
                : !(username && password && password === repeatPassword)
            }
          >
            Submit
          </button>
        </div>
      </form>
      <div className="toggle-box">
        <p>{login ? "Need to Register?" : "Already Registered?"}</p>
        <button onClick={() => setLogin(!login)}>
          {login ? "Register" : "Log In"}
        </button>
      </div>
    </div>
  );
}; -->
