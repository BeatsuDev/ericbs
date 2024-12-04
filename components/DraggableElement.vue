<template>
    <div ref="draggedElement" class="border-gray-950 border-8 select-none" @mousedown="moving = true" :style="{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
    }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const draggedElement = ref<HTMLElement | null>(null);
const offset = ref({ x: 0, y: 0 });
const moving = ref(false);

function moveImage(event: MouseEvent) {
    if (!moving.value) return;
    offset.value.x += event.movementX;
    offset.value.y += event.movementY;
    emit("move", event.movementX, event.movementY);
}
document.addEventListener("mousemove", moveImage);
document.addEventListener("mouseup", () => {
    emit("change", offset.value.x, offset.value.y);
    moving.value = false;
});

const emit = defineEmits<{
    move: [x: number, y: number]
    change: [transformX: number, transformY: number]
}>();
</script>