<template>
  <div class="rounded-xl p-6 bg-white shadow-md min-w-full md:min-w-[300px] md:max-w-[300px] border-2 border-gray-300">
    <img :src="video.thumbnail" alt="Video Thumbnail" class="w-full h-40 object-cover rounded-md mb-4">
    <h2 class="font-bold text-[24px] text-left">{{ video.name.length > 35 ? video.name.slice(0,35) + '...' : video.name}}</h2>
    <p class="text-md text-left py-2 break-words">{{ video.description.length > 60 ? video.description.slice(0, 60) + '...' : video.description }}</p>
    <div class="pt-2">
    <p class="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-md max-w-fit">{{ video.video_length }}</p>
    </div>
    <div class="mt-4 space-x-2 flex">
      <button 
        @click="$emit('edit', video)"
        class="!bg-white text-black !border !border-gray-400 px-3 py-1 rounded text-sm w-full flex items-center justify-center gap-2 hover:!bg-gray-200 transition hover:border-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
        Edit
      </button>
      <button
        @click="$emit('delete', video.id)"
        class="!bg-red-500 text-white px-3 py-1 rounded-md text-sm w-full flex items-center justify-center gap-2 ring-2 ring-red-500 hover:ring-red-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
        Delete
      </button>
    </div>
    <p class="text-sm text-gray-500 pt-4">Created: {{ new Date(video.created_at).toLocaleDateString() }}</p>
  </div>
</template>

<script setup lang="ts">
interface Video {
  id: string;
  name: string;
  slug: string;
  description: string;
  video_length: string;
  created_at: string;
}

defineProps<{
  video: Video
}>();

defineEmits<{
  (e: 'edit', video: Video): void
  (e: 'delete', id: string): void
}>();
</script>
