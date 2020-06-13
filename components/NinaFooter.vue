<template>
  <footer class="page-footer">
    <small class="copy">
      &copy; {{ copyright }}
    </small>
  </footer>
</template>

<script>
export default {
  name: 'NinaFooter',

  computed: {
    copyright () {
      const currentYear = new Date().getFullYear()
      return `${process.env.NAME} ${currentYear}`
    }
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99999;
  padding: 0 $main-padding $space-xl;
}

.copy {
  font-size: $small-font-size;
}
</style>
