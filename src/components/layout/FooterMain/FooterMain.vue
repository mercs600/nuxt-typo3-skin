<template>
  <footer class="footer-main border-t py-8 clear-both">
    <div class="container flex">
      <div class="footer-main__credits flex items-center">
        <slot name="credits"/>
      </div>
      <div class="footer-main__right ml-auto">
        <slot/>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterMain'
}
</script>
