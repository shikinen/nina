<template>
  <nav class="nav">
    <ul>
      <li
        v-for="link in navLinks"
        :key="link.title"
        class="nav-item"
      >
        <nuxt-link
          v-if="link.path"
          :to="link.path"
          class="nav-link"
        >
          {{ link.title }}
        </nuxt-link>
        <a
          v-else
          :href="link.link"
          class="nav-link"
          target="_blank"
        >
          {{ link.title }}
        </a>
      </li>
      <li class="nav-item">
        <nuxt-link
          :to="switchLocalePath(otherLocale)"
          class="nav-link"
        >
          {{ otherLocale }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { instagramUrl } from '~/config'

export default {
  name: 'NinaNavigation',

  computed: {
    navLinks () {
      return [
        {
          title: this.$t('navigation.aboutMe'),
          path: 'o-mnie'
        },
        {
          title: this.$t('navigation.contact'),
          path: 'kontakt'
        },
        {
          title: 'instagram',
          link: instagramUrl
        }
      ]
    },

    otherLocale () {
      const currentLocale = this.$i18n.locale
      return this.$i18n.locales.find(locale => locale !== currentLocale)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
  display: inline-block;

  &:not(:first-child) {
    margin-left: $space-md;
  }
}

.nav-link {
  position: relative;

  &,
  &::after {
    transition: all .2s ease-in-out;
  }

  &::after {
    position: absolute;
    top: calc(100% + 10px);
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0;
    content: '';
    color: transparent;
    background: $primary-color;
    height: 1px;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
}
</style>
