<template>
    <header
        class="relative flex h-48 md:items-center flex-col md:flex-row border-b-4 border-solid border-gray-950 pb-8 mt-4">
        <div id="title-container" class="w-full">
            <h1 id="title" class="text-4xl relative">
                <Transition enter-active-class="duration-200" enter-from-class="opacity-0" enter-to-class="opacity-1"
                    leave-from-class="opacity-1" leave-active-class="duration-200" leave-to-class="opacity-0">
                    <input ref="sirnameInput" @keydown="checkName" v-if="showInput" type="text"
                        class="absolute w-[7.65rem] left-[5.6rem] outline-none" maxlength="7">
                </Transition>
                Eric Bieszczad-Stie
            </h1>
            <p id="subtitle" class="italic">Try spelling that first try!</p>
        </div>
        <div>
            <DraggableElement @move="() => hasMoved = true"
                class="h-32 self-end rounded-full overflow-hidden aspect-square cursor-pointer">
                <img id="header-image" class="object-cover animate-[spin_linear_60s_infinite]"
                    src="/images/hello-there.webp" alt="Me looking into camera" draggable="false" />
            </DraggableElement>
            <Transition name="fade" leave-from-class="opacity-0.75" leave-to-class="opacity-0"
                leave-active-class="ease-out duration-[800ms]">
                <p v-if="!hasMoved" class="mt-2 animate-bounce">Move me around!</p>
            </Transition>
        </div>
    </header>
    <main class="py-8">
        Here's the server currently serving you this website. Bon appétit!
        <DraggableElement class="mx-auto my-4 w-4/5 lg:w-2/3 ">
            <img draggable="false" class="select-none" src="/images/server.webp"
                alt="Programmers Duck protecting the Raspberry Pi currently hosting this website.">
        </DraggableElement>
        I take security very seriously, so I've hired an on-site security guard to protect the server, as you can see.
    </main>
</template>

<script setup lang="ts">
import JSConfetti from "js-confetti";

definePageMeta({
    layout: "reader",
});

// Moving around images
const hasMoved = ref(false);

// Typing my name
const jsConfetti = new JSConfetti()
const showInput = ref(false);
const sirnameInput = ref<HTMLInputElement | null>(null);

setTimeout(() => showInput.value = true, 4000);

function checkName(event: KeyboardEvent) {
    if (sirnameInput.value?.value + event.key === "ieszcza") {
        jsConfetti.addConfetti({
            emojis: ["🎉", "🎊", "✅"],
            emojiSize: 40,
            confettiNumber: 100,
        });

        setTimeout(() => showInput.value = false, 1000);
    }
}
</script>
