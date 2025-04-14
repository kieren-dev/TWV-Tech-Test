<template>
  <div class="p-2 max-w-screen-lg mx-auto py-16">
    <div class="flex flex-col space-y-2">
      <h1 class="text-xl md:text-2xl font-bold text-white">StreamVibe</h1>
      <h3 class="text-md md:text-xl font-regular text-white">Upload, Watch, Engage – Your Videos, Your Way!</h3>
      <div class="flex flex-row justify-center py-8">
        <button 
          @click="openModal()"
          class="!bg-[#00FFAE] text-black px-4 py-2 rounded mb-4 ring-2 ring-[#00ffae]"
        >
          Add New Video
        </button>
    </div>
    </div>
  </div>
    
    <VideoForm 
      v-if="showModal && !selectedVideo"
      @add="addVideo"
      @close="closeModal"
    />

    <EditVideoForm
      v-if="showModal && selectedVideo"
      :video-to-edit="selectedVideo"
      @update="updateVideo"
      @close="closeModal"
    />

    <div class="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center md:max-w-[1100px] mx-auto">
      <VideoCard 
        v-for="video in videos" 
        :key="video.id" 
        :video="video"
        
        @edit="openModal"
        @delete="deleteVideo" 
      />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import VideoCard from './components/VideoCard.vue'
import VideoForm from './components/VideoForm.vue'
import EditVideoForm from './components/EditVideoForm.vue'

// State for managing modal and videos
const showModal = ref(false)
const videos = ref<Video[]>([])
const selectedVideo = ref<Video | null>(null)

// Video interface
interface Video {
  id?: string
  name: string
  slug: string
  description: string
  video_length: string
  created_at: string
}

// Modal controls
const openModal = (video: Video | null = null) => {
  selectedVideo.value = video
  showModal.value = true
}

const closeModal = () => {
  selectedVideo.value = null
  showModal.value = false
}

// Video CRUD operations
const addVideo = (video: Video) => {
  videos.value.push(video)
  closeModal()
}

const updateVideo = (updatedVideo: Video) => {
  const index = videos.value.findIndex(v => v.id === updatedVideo.id)
  if (index !== -1) {
    videos.value[index] = updatedVideo
  }
  closeModal()
}

const deleteVideo = (id: string) => {
  const index = videos.value.findIndex(v => v.id === id)
  if (index !== -1) {
    videos.value.splice(index, 1)
  }
}

// Define item type
interface JsonItem {
  name: string
  value: string
}

// Refs with types
const data = ref<JsonItem[]>([])
const newItem = ref<JsonItem>({ name: '', value: '' })

// Fetch from backend
const fetchData = async () => {
  try {
    const res = await axios.get<JsonItem[]>('http://localhost:3000/data')
    data.value = res.data
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }
}

// Add item and reset form
const addItem = () => {
  if (newItem.value.name && newItem.value.value) {
    data.value.push({ ...newItem.value })
    newItem.value = { name: '', value: '' }
    saveData()
  }
}

// Save to backend
const saveData = async () => {
  try {
    await axios.post('http://localhost:3000/data', data.value)
  } catch (error) {
    console.error('Failed to save data:', error)
  }
}

// Load data on mount
onMounted(fetchData)
</script>
