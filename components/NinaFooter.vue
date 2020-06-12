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
  padding-bottom: $space-xl;
}

.copy {
  font-size: $small-font-size;
}
</style>
