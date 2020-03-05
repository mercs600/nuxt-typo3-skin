<template>
   <header class="header-main bg-primary">
    <div class="container flex">
      <div class="header-main__logo mr-10 px-6 bg-white flex items-center">
        <slot name="logo"/>
      </div>
      <div class="header-main__nav flex-1">
        <slot name="navigation"/>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderMain'
}
</script>
