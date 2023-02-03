<template>
  <div
    class="bg-gray-100 dark:bg-gray-800 text-center h-screen sm:flex sm:items-center"
  >
    <div
      class="flex flex-col items-center justify-center h-full sm:h-auto w-full bg-gray-200 dark:bg-gray-900 py-8"
    >
      <Hero />
      <NavBar :links="links" />
      <ColorBar />
    </div>
  </div>
</template>
<script lang="ts">
const getLinks = () =>
  import("~~/data/messageLinks.json").then((m) => m.default || m);
export default {
  async setup() {
    const colorMode = useColorMode();
    const { data: links } = await useAsyncData("links", () => {
      const l = getLinks();
      return l;
    });
    return {
      colorMode,
      links,
    };
  },
  methods: {
    colorModeClicked() {
      this.colorMode.preference === "dark"
        ? (this.colorMode.preference = "light")
        : (this.colorMode.preference = "dark");
    },
  },
};
</script>
