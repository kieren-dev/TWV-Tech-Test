<template>
  <div class="fixed inset-0 bg-black bg-opacity-80 flex items-center text-left justify-center">
    <form
      class="space-y-6 p-8 bg-white rounded-lg shadow-xl max-w-md w-full mx-4"
      @submit.prevent="handleSubmit"
    >
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
         Edit Your Video Details
      </h2>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Video Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter video name"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input
            v-model="form.slug"
            type="text"
            placeholder="video-slug"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Video Length</label>
          <input
            v-model="form.video_length"
            type="text"
            placeholder="2m 30s"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Created Date</label>
          <input
            v-model="form.created_at"
            type="date"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Video Thumbnail</label>
          <input
            v-model="form.thumbnail"
            type="text"
            placeholder="https://company.com/thumbnail.jpg"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            v-model="form.description"
            placeholder="Enter video description"
            rows="4"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          ></textarea>
        </div>
      </div>

      <div class="flex justify-end space-x-3 mt-8">
        <button 
          type="button" 
          @click="handleCancel"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          class="px-4 py-2 !bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ring-2 ring-blue-500 hover:ring-blue-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'

const props = defineProps<{
  videoToEdit: {
    id?: string
    name: string
    slug: string
    description: string
    thumbnail: string
    video_length: string
    created_at: string
  }
}>()

const emit = defineEmits<{
  (e: 'update', video: any): void
  (e: 'close'): void
}>()

const form = reactive({
  id: null as string | null,
  name: '',
  slug: '',
  description: '',
  video_length: '',
  thumbnail: '',
  created_at: ''
})

watch(
  () => props.videoToEdit,
  (newVideo) => {
    if (newVideo) {
      Object.assign(form, newVideo)
    }
  },
  { immediate: true }
)

function handleCancel() {
  emit('close')
}

function handleSubmit() {
  emit('update', { ...form })
  emit('close')
}
</script> 