<template>
  <nina-page>
    <template #heading>
      {{ $t('aboutMe.title') }}
    </template>

    <p>
      {{ $t('aboutMe.description') }}
    </p>
  </nina-page>
</template>

<script>
import NinaPage from '~/components/NinaPage'

export default {
  components: { NinaPage }
}
</script>
