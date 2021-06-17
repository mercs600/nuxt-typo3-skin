<template functional>
  <div class="ce-frame block" :class="[
    `frame-${props.frameClass}`,
    `layout-${props.layout}`,
    `space-before-${props.spaceBefore}`,
    `space-after-${props.spaceAfter}`
    ]">
    <slot/>
  </div>
</template>
<script>
import CeFrameBase from 'nuxt-typo3/lib/templates/components/content/CeFrame.js'
export default {
  name: 'CeFrame',
  extends: CeFrameBase
}
</script>
<style lang="postcss">
/* purgecss start ignore */
@import '../../../styles/core/layout.css';

.frame-default {
  @apply container pb-6 pt-6;
}

.frame-indent {
  @apply frame-default;
  max-width: theme('container.indent');
}

.space {
  &-before {
    &-extra-small {
      @apply pt-4;
    }

    &-small {
      @apply pt-5;
    }

    &-medium {
      @apply pt-6;
    }

    &-large {
      @apply pt-10;
    }

    &-extra-large {
      @apply pt-12;
    }
  }

  &-after {
   &-extra-small {
      @apply pb-4;
    }

    &-small {
      @apply pb-5;
    }

    &-medium {
      @apply pb-6;
    }

    &-large {
      @apply pb-10;
    }

    &-extra-large {
      @apply pb-12;
    }
  }
}
/* purgecss end ignore */
</style>
