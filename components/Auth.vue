<script setup lang="ts">
const { auth } = useSupabaseClient()
const toast = useToast()

const state = ref({
    email: undefined
})

async function signInWithEmail() {
    const { error } = await auth.signInWithOtp({
        email: state.value.email,
        options: {
            emailRedirectTo: `${route.value}/confirm`
        }
    })
    if (error) {
        toast.add({ title: "Error", description: "Failed to send login email", color: "red" })
    } else {
        toast.add({ title: "Success", description: "Login email sent" })

    }
}

const route = computed(() => {
    return window.origin
})

const loginWithDiscord = async () => {
    const { data, error } = await auth.signInWithOAuth({
        provider: 'discord',
        options: { redirectTo: `${route.value}/confirm` }
    })
    console.log(data);
}
</script>
<template>
    <div class="flex justify-center items-center h-screen">
        <UCard class="w-1/3 min-w-96 max-w-full">
            <template #header>
                <div class="text-4xl">
                    Hello there!
                </div>
            </template>
            <div class="space-y-5">
                <p class="text-2xl">Welcome. Please login to continue.</p>
                <UForm :state="state" class="space-y-4" @submit="signInWithEmail">
                    <UFormGroup label="Email" name="email">
                        <UInput v-model="state.email" required />
                    </UFormGroup>
                    <UButton type="submit" block>
                        Submit
                    </UButton>
                </UForm>
                <UDivider label="OR" />
                <div class="flex justify-center mt-3">
                    <UButton label="Login with Discord" @click="loginWithDiscord" block />
                    <!-- <UButton @click="loginWithDiscord" block>Login with Discord</UButton> -->
                </div>
            </div>
        </UCard>
    </div>
</template>