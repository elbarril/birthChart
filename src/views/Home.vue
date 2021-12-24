<template>
  <div class="home">
    <UserChart v-if="user" :userName="$route.params.user" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserChart from "@/components/UserChart.vue";
import { ref, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Home",
  props: {
    user: Object,
  },
  components: {
    UserChart,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const user = ref(false);
    onBeforeMount(() => {
      if (route.params.user !== "Emiliano Desouches") {
        router.push("/login");
      } else {
        user.value = true;
      }
    });
    return { user };
  },
};
</script>