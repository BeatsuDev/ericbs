<template>
    <NuxtRouteAnnouncer />
    <div class="w-full min-h-dvh text-normal bg-gray-200">
        <NuxtLayout class="w-full">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
const descriptionString = `
    I'm Eric Bieszczad-Stie, an enthusiastic software engineer in his early 20s who really
    enjoys programming! I especially enjoy working with optimizing performance and readability
    and learning about larger system architectures. I strive to share genuinely helpful
    explanations and insights. Feel free to contact me about anything IT-related, social or 
    anything in between! 🎉 Wish you all well.    
`;

useSeoMeta({
    title: "Eric's Personal Website",
    description: descriptionString,
    charset: "utf-8",
    ogLocale: "en_GB",
    ogImage: "/assets/imgs/me-on-banana.webp",
    ogUrl: "https://ericbs.com",
    ogType: "website",
})
</script>