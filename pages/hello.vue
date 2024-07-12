<script setup lang="ts">
const hello: any = ref("")

async function fetchHello() {
  const { data, error } = await useFetch('/api/hello')
  hello.value = data.value;
}
</script>

<template>
  <div class="flex justify-center py-3">
    <UCard class="w-96">
      <template #header>
        <h3 class="text-3xl">Hello World</h3>
      </template>
      <pre>{{ hello }}</pre>
      <template #footer>
        <UButton @click="fetchHello">Fetch Hello</UButton>
      </template>
    </UCard>
  </div>
</template>
