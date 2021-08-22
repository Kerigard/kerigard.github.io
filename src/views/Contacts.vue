<template>
  <Card>
    <h3 class="text-2xl lg:text-4xl mb-2 md:mb-8">Контакты</h3>

    <div class="flex flex-wrap">
      <Button href="mailto:kerihoros@gmail.com" class="mr-4">
        <Icon v-model="gmailIcon" class="mr-3" />
        Email
      </Button>
      <Button href="https://www.facebook.com/Hkerigard" target="_blank" class="mr-4">
        <Icon v-model="facebookIcon" class="mr-3" />
        Facebook
      </Button>
      <Button href="https://github.com/Kerigard" target="_blank">
        <Icon v-model="githubIcon" class="mr-3" />
        Github
      </Button>
    </div>
  </Card>
</template>

<script setup>
import gmailIcon from '@iconify-icons/simple-icons/gmail'
import facebookIcon from '@iconify-icons/simple-icons/facebook'
import githubIcon from '@iconify-icons/simple-icons/github'

import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
</script>
