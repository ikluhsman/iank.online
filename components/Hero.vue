<template>
  <div class="w-full sm:flex sm:items-center sm:justify-center sm:text-left">
    <img src="/me.jpg" class="rounded-full w-48 md:w-64" />
    <div class="sm:pl-6">
      <h1 class="text-3xl p-0 m-0">Ian K</h1>
      <p class="mt-0">Status: <strong>Online!</strong></p>
      <p class="p-0 m-0">
        I am <span style="color: var(--accentColor)">online</span> and ready to
        chat with you!
      </p>
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-height: 699px) {
  img {
    width: 10rem;
  }
}
@media screen and (max-height: 399px) {
  img {
    width: 6rem;
    content: url("/me2.jpg");
  }
}
</style>
