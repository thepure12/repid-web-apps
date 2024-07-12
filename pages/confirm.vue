<script setup lang="ts">
const user = useSupabaseUser()

watch(user, () => {
    if (user.value) {
        return navigateTo('/')
    }
}, { immediate: true })
</script>

<template>
    <div>
        <p class="u-text-black text-xl">
            Getting user info...
            <UProgress animation="carousel" />
        </p>
    </div>
</template>