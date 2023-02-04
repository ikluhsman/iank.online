<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script>
import { useAppStore } from "./stores/AppStore.js";
export default {
  setup() {
    const appStore = useAppStore();
    appStore.fetchRandomColor();
    return {
      appStore,
    };
  },
  mounted() {
    var root = document.querySelector(":root");
    root.style.setProperty("--accentColor", this.appStore.randomColor);
  },
};
</script>
