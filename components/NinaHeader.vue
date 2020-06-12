<template>
  <header class="page-header">
    <h1 class="page-heading">
      {{ pageHeading }}
    </h1>

    <nav class="page-nav">
      <ul>
        <li
          v-for="link in navLinks"
          :key="link.title"
          class="nav-item"
        >
          <nuxt-link
            v-if="link.path"
            :to="link.path"
          >
            {{ link.title }}
          </nuxt-link>
          <a
            v-else
            :href="link.link"
          >
            {{ link.title }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NinaHeader',

  data: () => ({
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
  }),

  computed: {
    pageHeading () {
      return process.env.NAME
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  padding: 20px 0;
}

.page-nav {
  margin-left: auto;
}

.nav-item {
  display: inline-block;

  &:not(:first-child) {
    margin-left: 48px;
  }
}

.page-heading {
  font-size: $big-font-size;
}
</style>
