<template>
  <input type="email" id="email" />
  <input type="password" id="pass" />
  <button type="submit" @click="submit">Ingresar</button>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const user = {
      email: "emidesouches@gmail.com",
      pass: "emidesouches",
    };
    const submit = () => {
      var userEmail = document.getElementById("email"),
        userPass = document.getElementById("pass");
      if (userEmail.value === user.email && userPass.value === user.pass) {
        console.log("login correct");
        router.push({ name: "Home", params: { user: "Emiliano Desouches" } });
      } else {
        console.log("login incorrect");
      }
    };
    return {
      submit,
    };
  },
};
</script>

<style>
</style>
