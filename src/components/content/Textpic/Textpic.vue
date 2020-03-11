<script>
import CeTextpicBase from 'nuxt-typo3/lib/templates/components/content/elements/CeTextpic.vue'
export default {
  extends: CeTextpicBase
}
</script>
<style lang="postcss">
/* purgecss start ignore */
.ce-gallery {

  &:not(&--vertical-intext) {
    @apply flex flex-col;
  }

  &--horizontal--center {
     @apply items-center;
  }

  &--horizontal-right {
    @apply items-end;
  }

  &--horizontal-left {
    @apply items-start;
  }

  &--vertical-above {
    .ce-gallery__container {
      @apply mb-6;
    }
  }

  &--vertical-below {
    .ce-gallery__container {
      @apply mt-6;
    }
  }

  &--vertical-intext:not(&--no-wrap) {
    &::after {
      content: "";
      display: table;
      clear: both;
    }

    &.ce-gallery--horizontal-right .ce-gallery__container {
      @apply float-right ml-6;
    }

    &.ce-gallery--horizontal-left .ce-gallery__container {
      @apply float-left mr-6;
    }
  }

  &--vertical-intext.ce-gallery--no-wrap {
    @apply flex items-center;

    &.ce-gallery--horizontal-right .ce-gallery__text {
      @apply order-first mr-6;
    }

    .ce-gallery__text {
      @apply flex-1 items-center ml-6;
    }
  }

  &__row {
    @apply flex -mx-6;
  }

  &__col {
    @apply m-6;
  }

  &--no-wrap {}
}
/* purgecss end ignore */
</style>
