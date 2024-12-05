<template>
    <NuxtRouteAnnouncer />
    <div class="w-full min-h-dvh text-normal bg-gray-200">
        <NuxtLayout class="w-full">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
const title = "Eric's Personal Website";
const descriptionString = "I'm Eric Bieszczad-Stie, an enthusiastic software engineer! I especially enjoy working with optimizing performance and readability. I strive to share genuinely helpful explanations and insights. Feel free to contact me about anything IT-related, social or anything in between! 🎉 Wish you all well.";

useSeoMeta({
    title: title,
    ogTitle: title,
    description: descriptionString,
    ogDescription: descriptionString,
    charset: "utf-8",
    ogLocale: "en_GB",
    ogImage: "https://ericbs.com/images/me-on-banana.webp",
    ogUrl: "https://ericbs.com",
    ogType: "website",
})
</script>