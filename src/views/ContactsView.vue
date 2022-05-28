<script lang="ts" setup>
import gmailIcon from '@iconify-icons/simple-icons/gmail'
import githubIcon from '@iconify-icons/simple-icons/github'

import VSection from '@/components/base/VSection.vue'
import VButtonGroup from '@/components/base/VButtonGroup.vue'
import VButton from '@/components/base/VButton.vue'
import VIcon from '@/components/base/VIcon.vue'
</script>

<template>
  <VSection id="contacts" title="Контакты">
    <VButtonGroup>
      <VButton href="mailto:kerihoros@gmail.com" icon>
        <VIcon :icon="gmailIcon" color="#EA4335" class="mr-3" />
        Email
      </VButton>

      <VButton href="https://github.com/Kerigard" target="_blank" icon>
        <VIcon :icon="githubIcon" color="#181717" class="mr-3" />
        Github
      </VButton>
    </VButtonGroup>
  </VSection>
</template>
