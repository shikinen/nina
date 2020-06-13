<template>
  <main class="main">
    <div class="pane content-pane">
      <nuxt-link
        v-if="returnable"
        to="/"
        class="back-link"
      >
        <svg width="33" height="8" viewBox="0 0 33 8" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM33 3.5L1 3.5V4.5L33 4.5V3.5Z" fill="black" />
        </svg>
      </nuxt-link>

      <slot name="heading" />

      <div class="center-content">
        <slot />
      </div>

      <div
        v-if="hasBottomContent"
        class="bottom-content"
      >
        <slot
          name="bottom-content"
        />
      </div>
    </div>

    <div class="pane images-pane">
      <slot name="images" />
    </div>
  </main>
</template>

<script>
export default {
  name: 'NinaPage',

  props: {
    returnable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    hasBottomContent () {
      return this.$slots['bottom-content'] !== undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  margin: auto 0;
  align-items: center;
  justify-content: space-between;
}

.pane {
  display: flex;
  height: 100%;
}

.content-pane {
  flex-direction: column;
}

.back-link {
  margin-bottom: $space-lg;
}

.center-content {
  margin: auto 0;
}

.bottom-content {
  margin-top: auto;
  margin-bottom: $space-sm;
}

.images-pane {
  flex: 1;
  align-items: center;
  max-width: 50vw;
  margin-right: 100px;
}
</style>
