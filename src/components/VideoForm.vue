<template>
  <div class="fixed inset-0 bg-[#232333] bg-opacity-80 flex items-center text-left justify-center">
    <form
      class="space-y-6 p-8 bg-white rounded-lg shadow-xl max-w-md w-full mx-4"
      @submit.prevent="handleSubmit"
    >
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        {{ isEditing ? 'Edit Video' : 'Add New Video' }}
      </h2>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Video Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter video name"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00FFAE] focus:border-[#00FFAE] transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input
            v-model="form.slug"
            type="text"
            placeholder="video-slug"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00FFAE] focus:border-[#00FFAE] transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Video Length</label>
          <input
            v-model="form.video_length"
            type="text"
            placeholder="2m 30s"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00FFAE] focus:border-[#00FFAE] transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Created Date</label>
          <input
            v-model="form.created_at"
            type="date"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00FFAE] focus:border-[#00FFAE] transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Video Thumbnail</label>
          <input
            v-model="form.thumbnail"
            type="text"
            placeholder="https://company.com/thumbnail.jpg"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00FFAE] focus:border-[#00FFAE] transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            v-model="form.description"
            placeholder="Enter video description"
            rows="4"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00FFAE] focus:border-[#00FFAE] transition"
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
          class="px-4 py-2 !bg-blue-500 text-white rounded-md hover:bg-blue-700 hover:ring-2 hover:ring-blue-700 focus:ring-2 focus:ring-blue-500 transition"
        >
          {{ isEditing ? 'Update Video' : 'Upload Video' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps<{
  videoToEdit: {
    id?: string
    name: string
    slug: string
    description: string
    video_length: string
    thumbnail: string
    created_at: string
  } | null
}>()

const emit = defineEmits<{
  (e: 'add', video: any): void
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

const isEditing = computed(() => !!props.videoToEdit?.id)

const resetForm = () => {
  form.id = null
  form.name = ''
  form.slug = ''
  form.description = ''
  form.video_length = ''
  form.thumbnail = ''
  form.created_at = ''
}

watch(
  () => props.videoToEdit,
  (newVideo) => {
    if (newVideo) {
      Object.assign(form, newVideo)
    } else {
      resetForm()
    }
  },
  { immediate: true }
)

function handleCancel() {
  emit('close')
}

function handleSubmit() {
  if (isEditing.value) {
    emit('update', { ...form })
  } else {
    emit('add', {
      id: uuidv4(),
      ...form
    })
  }
  resetForm()
  emit('close')
}
</script>
