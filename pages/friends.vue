<script setup>
const supabase = useSupabaseClient()
const filter = ref("")
const { data: friends } = await useAsyncData('friends', async () => {
    const { data } = await supabase.from('friends').select('*')
    return data
})

const filteredRows = computed(() => {
  if (!filter.value) {
    return friends.value
  }
  return friends.value.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(filter.value.toLowerCase())
    })
  })
})
</script>
<template>
    <div>
        <UInput v-model="filter" icon="i-heroicons-magnifying-glass-20-solid" class="mx-3 py-2" size="md" color="emerald" trailing
            placeholder="Search..." />
        <UTable :rows="filteredRows"/>
    </div>
</template>