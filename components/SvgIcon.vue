<template>
  <div class="pt-1">
    <span
      v-if="svg"
      class="h-[1em] w-[1em] fill-gray-600 dark:fill-gray-100"
      v-html="svg"
    />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    name: String,
  },
  async setup(props) {
    const mod = Object.entries(
      import.meta.glob("~/assets/svg/*.svg", { as: "raw" })
    ).filter(([key]) => {
      const filename = key.split("/").pop()!.split(".").shift();
      return filename === props.name;
    });
    const svg = await mod[0][1]?.();
    return {
      svg,
    };
  },
});
</script>
