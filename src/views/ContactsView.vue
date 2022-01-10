<template>
  <Card title="Контакты">
    <ButtonGroup>
      <Button href="mailto:kerihoros@gmail.com">
        <Icon v-model="gmailIcon" class="mr-3" />
        Email
      </Button>
      <Button href="https://github.com/Kerigard" target="_blank">
        <Icon v-model="githubIcon" class="mr-3" />
        Github
      </Button>
    </ButtonGroup>
  </Card>
</template>

<script setup>
import gmailIcon from '@iconify-icons/simple-icons/gmail'
import githubIcon from '@iconify-icons/simple-icons/github'

import Card from '@/components/Card.vue'
import ButtonGroup from '@/components/ButtonGroup.vue'
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
</script>
