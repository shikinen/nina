<template>
  <nina-page :returnable="false">
    <template>
      <h2 class="category-heading">
        Fashion
      </h2>
      <ul class="client-list">
        <li
          v-for="client in clients.fashion.list"
          :key="client.code"
          class="client-item"

          @mouseenter="setCurrentClient(client.code)"
          @mouseleave="resetCurrentClient"
        >
          <nuxt-link :to="client.code">
            {{ client.name }}
          </nuxt-link>
        </li>
      </ul>
    </template>
    <template #images>
      <img
        class="main-image"
        :alt="mainImageAlt"
        :src="currentImg"
      >
    </template>
  </nina-page>
</template>

<script>
import NinaPage from '~/components/NinaPage'
import { clients } from '~/config'

export default {
  components: {
    NinaPage
  },

  data: () => ({
    currentClient: '',
    clients,
    pageName: process.env.NAME
  }),

  computed: {
    currentImg () {
      return `img/clients/${this.currentClient}/main.png`

    },
    firstClient () {
      return this.clients.fashion.list[0]?.code
    },
    mainImageAlt () {
      return `${this.pageName} – ${this.currentClient}`
    }
  },

  created () {
    this.resetCurrentClient()
  },

  methods: {
    setCurrentClient (client) {
      this.currentClient = client
    },

    resetCurrentClient () {
      this.currentClient = this.firstClient
    }
  }
}
</script>

<style lang="scss" scoped>
.category-heading {
  font-size: $small-font-size;
  margin-bottom: $space-sm;
}

.client-list {
  margin-left: $space-sm;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.client-item {
  position: relative;
  display: inline;
  padding-bottom: $space-xs;

  &::after {
    content: '';
    position: absolute;
    top: calc(100% - 8px);
    left: -80px;
    width: 0;
    height: 1px;
    background-color: $primary-color;
    transition: all .2s ease-in-out;
  }

  &:hover {
    &::after {
      width: calc(100% + 60px + 20px);
    }
  }
}

.main-image {
  opacity: 0;
  max-height: 70vh;
  margin: auto;
  animation: 1s ease-out 0s 1 fadeIn;
  animation-delay: .5s;
  animation-fill-mode: forwards;
}
</style>
