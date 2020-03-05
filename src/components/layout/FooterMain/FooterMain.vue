<template>
  <footer class="footer-main border-t py-8 clear-both">
    <div class="container">
      <slot/>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterMain'
}
</script>
<style scoped>
.footer-main {
  min-height: 400px;
}
</style>
