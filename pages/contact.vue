<template>
  <nina-page>
    <template #heading>
      {{ $t('contact.title') }}
    </template>

    <p>
      {{ $t('contact.contactMe') }}
    </p>
  </nina-page>
</template>

<script>
import NinaPage from '~/components/NinaPage'

export default {
  components: { NinaPage }
}
</script>
