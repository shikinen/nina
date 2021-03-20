<template>
  <header class="page-header">
    <h1 class="page-heading">
      <nuxt-link to="/">
        {{ pageHeading }}
      </nuxt-link>
    </h1>

    <nina-navigation class="page-nav" />
    <nina-burger class="page-burger" />
    <nina-mobile-menu class="page-mobile-menu" />
  </header>
</template>

<script>
import { pageName } from '~/config'

import NinaNavigation from '~/components/NinaNavigation'
import NinaBurger from '~/components/NinaBurger'
import NinaMobileMenu from '~/components/NinaMobileMenu'

export default {
  name: 'NinaHeader',

  components: {
    NinaNavigation,
    NinaBurger,
    NinaMobileMenu
  },

  data: () => ({
    pageHeading: pageName,
    navLinks: [
      {
        title: 'o mnie',
        path: 'o-mnie'
      },
      {
        title: 'kontakt',
        path: 'kontakt'
      },
      {
        title: 'instagram',
        link: 'https://instagram.com'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
$header-index: 9999;
$burger-index: 9998;
$heading-index: 9997;
$mobile-menu-index: 9996;
$navigation-index: 9995;

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: $header-index;
  display: flex;
  align-items: center;
  width: 100%;
  padding: $space-sm $main-padding;
  transition: all .2s ease-in-out;
}

.page-nav {
  position: relative;
  z-index: $navigation-index;
  margin-left: auto;
  @include hide-down(md);
}

.page-heading {
  position: relative;
  z-index: $heading-index;
  font-size: $big-font-size;
}

.page-burger {
  @include hide-up(md);
  margin-left: auto;
  position: relative;
  z-index: $burger-index;
}

.page-mobile-menu {
  z-index: $mobile-menu-index;
  @include hide-up(md);
}
</style>
