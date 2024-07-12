<script setup lang="ts">
const route = useRoute()

const links = [{
  label: 'Home',
  to: `/`
}, {
  label: 'Hello World',
  to: '/hello'
}, {
  label: 'Content',
  to: '/content'
}, {
  label: 'Friends',
  to: '/friends'
}, {
  label: 'Links',
  to: '/links'
}]
</script>

<template>
  <UHorizontalNavigation :links="links" class="bg-slate-900">
    <template #default="{ link }">
      <span class="group-hover:text-primary relative">{{ link.label }}</span>
    </template>
  </UHorizontalNavigation>
  <div>
    <NuxtPage />
  </div>
  <UNotifications />
</template>