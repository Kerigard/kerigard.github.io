<script lang="ts" setup>
import javascriptIcon from '@iconify-icons/simple-icons/javascript'
import typescriptIcon from '@iconify-icons/simple-icons/typescript'
import phpIcon from '@iconify-icons/simple-icons/php'
import amazondynamodbIcon from '@iconify-icons/simple-icons/amazondynamodb'
import csharpIcon from '@iconify-icons/simple-icons/csharp'
import xamlIcon from '@iconify-icons/simple-icons/xaml'
import vuedotjsIcon from '@iconify-icons/simple-icons/vuedotjs'
import laravelIcon from '@iconify-icons/simple-icons/laravel'
import dotnetIcon from '@iconify-icons/simple-icons/dotnet'
import mysqlIcon from '@iconify-icons/simple-icons/mysql'
import postgresqlIcon from '@iconify-icons/simple-icons/postgresql'
import microsoftsqlserverIcon from '@iconify-icons/simple-icons/microsoftsqlserver'
import redisIcon from '@iconify-icons/simple-icons/redis'
import clickhouseIcon from '@iconify-icons/simple-icons/clickhouse'
import elasticsearchIcon from '@iconify-icons/simple-icons/elasticsearch'
import visualstudiocodeIcon from '@iconify-icons/simple-icons/visualstudiocode'
import visualstudioIcon from '@iconify-icons/simple-icons/visualstudio'
import gitIcon from '@iconify-icons/simple-icons/git'
import postmanIcon from '@iconify-icons/simple-icons/postman'
import dockerIcon from '@iconify-icons/simple-icons/docker'

import VIcon from '@/components/base/VIcon.vue'
import VIconGroup from '@/components/base/VIconGroup.vue'
import VTooltip from '@/components/base/VTooltip.vue'
</script>

<template>
  <h4 class="mb-2">Языки программирования:</h4>
  <VIconGroup>
    <VIcon :icon="phpIcon" color="#777BB4">
      <VTooltip text="PHP" />
    </VIcon>
    <VIcon :icon="amazondynamodbIcon" color="#4479A1">
      <VTooltip text="SQL" />
    </VIcon>
    <VIcon :icon="javascriptIcon" color="#F7DF1E">
      <VTooltip text="JavaScript" />
    </VIcon>
    <VIcon :icon="typescriptIcon" color="#3178C6">
      <VTooltip text="TypeScript" />
    </VIcon>
    <VIcon :icon="csharpIcon" color="#239120">
      <VTooltip text="C#" />
    </VIcon>
    <VIcon :icon="xamlIcon" color="#0C54C2">
      <VTooltip text="XAML" />
    </VIcon>
  </VIconGroup>

  <h4 class="mt-4 mb-2">Фреймворки:</h4>
  <VIconGroup>
    <VIcon :icon="laravelIcon" color="#FF2D20">
      <VTooltip text="Laravel" />
    </VIcon>
    <VIcon :icon="vuedotjsIcon" color="#4FC08D">
      <VTooltip text="Vue.js" />
    </VIcon>
    <VIcon :icon="dotnetIcon" color="#512BD4">
      <VTooltip text="WPF / WinUI" />
    </VIcon>
  </VIconGroup>

  <h4 class="mt-4 mb-2">Базы данных:</h4>
  <VIconGroup>
    <VIcon :icon="mysqlIcon" color="#4479A1">
      <VTooltip text="MySQL" />
    </VIcon>
    <VIcon :icon="postgresqlIcon" color="#4169E1">
      <VTooltip text="PostgreSQL" />
    </VIcon>
    <VIcon :icon="microsoftsqlserverIcon" color="#CC2927">
      <VTooltip text="Microsoft SQL" />
    </VIcon>
    <VIcon :icon="redisIcon" color="#DC382D">
      <VTooltip text="Redis" />
    </VIcon>
    <VIcon :icon="clickhouseIcon" color="#FFCC01">
      <VTooltip text="ClickHouse" />
    </VIcon>
    <VIcon :icon="elasticsearchIcon" color="#005571">
      <VTooltip text="Elasticsearch" />
    </VIcon>
  </VIconGroup>

  <h4 class="mt-4 mb-2">Программы и инструменты:</h4>
  <VIconGroup>
    <VIcon :icon="visualstudiocodeIcon" color="#007ACC">
      <VTooltip text="Visual Studio Code" />
    </VIcon>
    <VIcon :icon="visualstudioIcon" color="#5C2D91">
      <VTooltip text="Visual Studio" />
    </VIcon>
    <VIcon :icon="gitIcon" color="#F05032">
      <VTooltip text="Git" />
    </VIcon>
    <VIcon :icon="postmanIcon" color="#FF6C37">
      <VTooltip text="Postman" />
    </VIcon>
    <VIcon :icon="dockerIcon" color="#2496ED">
      <VTooltip text="Docker" />
    </VIcon>
  </VIconGroup>
</template>
