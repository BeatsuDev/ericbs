<template>
    <header
        class="relative flex h-48 md:items-center flex-col md:flex-row border-b-4 border-solid border-gray-950 pb-8 mt-4">
        <div id="title-container" class="w-2/3 lg:w-full">
            <h1 id="title" class="text-4xl">Eric Bieszczad-Stie</h1>
            <p id="subtitle" class="italic">Try spelling that first try!</p>
        </div>
        <div ref="imageElement" class="h-32 self-end aspect-square absolute right-0 cursor-pointer"
            @mousedown="movedImage = true; moving = true" @mouseup="moving = false" @mouseleave="moving = false"
            @mousemove="moveImage" :style="{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
            }">
            <img id="header-image"
                class="object-cover rounded-full border-solid border-gray-950 border-8 select-none animate-[spin_linear_60s_infinite]"
                src="/images/hello-there.webp" alt="Me on a banana" draggable="false" />
            <Transition name="fade" leave-from-class="opacity-0.75" leave-to-class="opacity-0"
                leave-active-class="ease-out duration-[800ms]">
                <p v-if="!movedImage" class="mt-2 animate-bounce">Move me around!</p>
            </Transition>
        </div>
    </header>
    <main class="py-8">
        Here's the server currently serving you this website. Bon appétit!
        <img class="w-4/5 lg:w-2/3 mx-auto my-4" src="/images/server.webp"
            alt="Programmers Duck protecting the Raspberry Pi currently hosting this website.">
        I take security very seriously, so I've hired an on-site security guard to protect the server, as you can see.
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "reader",
});

// Moving me around
const imageElement = ref<HTMLElement | null>(null);
const movedImage = ref(false);
const moving = ref(false);

const offset = ref({ x: 0, y: 0 });

function moveImage(event: MouseEvent) {
    if (!moving.value) return;
    offset.value.x += event.movementX;
    offset.value.y += event.movementY;
}
</script>
