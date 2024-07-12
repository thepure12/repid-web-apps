<script setup>
const links = [
    [
        {
            label: "Vue",
            icon: 'i-heroicons-link',
            to: "https://vuejs.org/",
        },
    ],
    [
        {
            label: "Nuxt3",
            icon: 'i-heroicons-link',
            to: "https://nuxt.com/",
        },
        {
            label: "Nuxt Routing",
            icon: 'i-heroicons-link',
            to: "https://nuxt.com/docs/getting-started/routing",
        },
        {
            label: "Nuxt Layout",
            icon: 'i-heroicons-link',
            to: "https://nuxt.com/docs/guide/directory-structure/layouts",
        },
        {
            label: "Nuxt Components",
            icon: 'i-heroicons-link',
            to: "https://nuxt.com/docs/guide/directory-structure/components",
        },
        {
            label: "Nuxt Content",
            icon: 'i-heroicons-link',
            to: "https://nuxt.com/docs/guide/directory-structure/content",
        },
    ],
    [
        {
            label: "NuxtUI",
            icon: 'i-heroicons-link',
            to: "https://ui.nuxt.com",
        },
        {
            label: "Tawlwind CSS",
            icon: 'i-heroicons-link',
            to: "https://tailwindcss.com/docs",
        },
    ],
    [
        {
            label: "Supabase",
            icon: 'i-heroicons-link',
            to: "https://supabase.com/",
        },
        {
            label: "Nuxt Supabase",
            icon: 'i-heroicons-link',
            to: "https://supabase.nuxtjs.org/get-started",
        },
        {
            label: "Supabase JS",
            icon: 'i-heroicons-link',
            to: "https://supabase.com/docs/reference/javascript",
        },
    ],
    [
        {
            label: "Vercel",
            icon: 'i-heroicons-link',
            to: "https://vercel.com",
        },
    ],
    [
    {
            label: "Repo",
            icon: 'i-heroicons-link',
            to: "https://github.com/thepure12/repid-web-apps",
        },
    ]
]
</script>
<template>
    <div>
        <UVerticalNavigation :links="links" />
    </div>
</template>