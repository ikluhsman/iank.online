<template>
  <div class="pt-1">
    <span v-if="icon" class="h-[1em] w-[1em]" v-html="icon" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name?: string;
}>();

// Auto-load icons
const icons = Object.fromEntries(
  Object.entries(import.meta.glob("~/assets/svg/*.svg", { as: "raw" })).map(
    ([key, value]) => {
      const filename = key.split("/").pop()!.split(".").shift();
      return [filename, value];
    }
  )
);

// Lazily load the icon
const icon = props.name && (await icons?.[props.name]?.());
</script>
