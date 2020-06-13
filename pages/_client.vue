<template>
  <nina-page>
    <template #heading>
      <h2 class="h2">
        {{ client.name }}
      </h2>
    </template>

    <template #bottom-content>
      <p class="client-description paragraph">
        {{ client.description[$i18n.locale] }}
      </p>
    </template>

    <template #images>
      <nina-slider :photos="client.photos" />
    </template>
  </nina-page>
</template>

<script>
import NinaPage from '~/components/NinaPage'
import NinaSlider from '~/components/NinaSlider'
import { clients } from '~/config'

export default {
  components: {
    NinaPage,
    NinaSlider
  },

  validate ({ params }) {
    const links = clients.fashion.list.map(client => client.code)

    return links.includes(params.client)
  },

  computed: {
    client () {
      return clients.fashion.list.find(({ code }) => code === this.$route.params.client)
    }
  }
}
</script>

<style lang="scss" scoped>
.client-description {
  max-width: 300px;
}
</style>
