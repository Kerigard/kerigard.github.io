<script lang="ts" setup>
import gmailIcon from '@iconify-icons/simple-icons/gmail'
import githubIcon from '@iconify-icons/simple-icons/github'

import VCard from '@/components/VCard.vue'
import VButtonGroup from '@/components/VButtonGroup.vue'
import VButton from '@/components/VButton.vue'
import VIcon from '@/components/VIcon.vue'
</script>

<template>
  <VCard title="Контакты">
    <VButtonGroup>
      <VButton href="mailto:kerihoros@gmail.com">
        <VIcon v-model="gmailIcon" class="mr-3" />
        Email
      </VButton>
      <VButton href="https://github.com/Kerigard" target="_blank">
        <VIcon v-model="githubIcon" class="mr-3" />
        Github
      </VButton>
    </VButtonGroup>
  </VCard>
</template>
