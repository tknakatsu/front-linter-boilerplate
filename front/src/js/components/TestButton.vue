<template>
  <button class="btn" :disabled="isDisabled">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
