<template>
  <aside
    :class="{ visible }"
    class="mobile-menu"
    @click="closeMenu"
  >
    <nina-navigation class="navigation" />
  </aside>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import NinaNavigation from '~/components/NinaNavigation'

export default {
  name: 'NinaMobileMenu',

  components: {
    NinaNavigation
  },

  computed: mapState({ visible: state => state.isMobileMenuVisible }),

  watch: {
    visible (is) {
      document.querySelector('body').style.position = is ? 'fixed' : 'static'
    }
  },

  methods: {
    ...mapMutations(['closeMobileMenu']),

    closeMenu () {
      this.closeMobileMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: $bg-color;
  transition: all .6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transform: translateY(-100vh);
}

.navigation {
  margin: auto;
}

.visible {
  transform: translateY(0);
}
</style>
