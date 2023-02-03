<template>
  <div class="w-full flex items-center justify-center">
    <div
      class="border border-solid border-gray-400 rounded-full w-10 h-10 flex justify-center items-center"
    >
      <SvgIcon
        name="moon"
        v-show="colorMode.preference === 'light'"
        class="fill-gray-500 w-4"
        @click="colorModeClicked"
      />
      <SvgIcon
        name="sun"
        v-show="colorMode.preference === 'dark'"
        class="fill-gray-100 w-6"
        @click="colorModeClicked"
      />
    </div>
  </div>
</template>
<script>
export default {
  async setup() {
    const colorMode = useColorMode();
    return {
      colorMode,
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
