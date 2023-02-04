<template>
  <div class="py-6 m-0">
    <p class="p-0 m-0">Message me:</p>
    <nav class="flex flex-wrap w-full justify-center gap-6 pt-2">
      <a
        v-for="(l, k) in links"
        :key="k"
        :href="l.href"
        :title="l.tooltip"
        target="_blank"
      >
        <SvgIcon :name="l.icon" class="w-6" />
      </a>
    </nav>
  </div>
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
