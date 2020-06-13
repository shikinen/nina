<template>
  <div class="page-grid">
    <nina-header />
    <nuxt />
    <nina-footer />
  </div>
</template>

<script>
import NinaHeader from '~/components/NinaHeader'
import NinaFooter from '~/components/NinaFooter'

export default {
  components: {
    NinaHeader,
    NinaFooter
  }
}
</script>

<style lang="scss" scoped>
.page-grid {
  display: flex;
  height: 100vh;
  padding: 0 $main-padding;
}
</style>
