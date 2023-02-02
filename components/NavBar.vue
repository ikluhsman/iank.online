<template>
  <nav class="flex flex-wrap w-full justify-center gap-6 m-0 py-6">
    <a
      v-for="(l, k) in links"
      :key="k"
      :href="l.href"
      :title="l.tooltip"
      target="_blank"
    >
      <SvgIcon :name="l.icon" class="fill-gray-500 dark:fill-gray-200 w-6" />
    </a>
  </nav>
</template>
<script>
export default {
  props: {
    links: {
      type: Array,
      default: [],
      required: true,
    },
  },
};
</script>
