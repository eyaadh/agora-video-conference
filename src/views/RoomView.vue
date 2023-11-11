<template>
  <nav class="border-b border-gray-200 pb-5 mb-4 sm:flex sm:items-center sm:justify-between">
    <h3 class="text-base font-semibold leading-6 text-gray-900">Room - {{ userStore.channelToJoin }}</h3>
    <div class="mt-3 flex sm:ml-4 sm:mt-0">
      <button type="button"
              @click="toggleCamera"
              class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <VideoCameraIcon v-if="!isVideoOn" class="h-6 w-6"/>
        <VideoCameraSlashIcon v-if="isVideoOn" class="h-6 w-6"/>
      </button>

      <button type="button"
              @click="toggleMicrophone"
              class="ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <MicrophoneIcon v-if="!isAudioOn" class="h-6 w-6"/>
        <SpeakerXMarkIcon v-if="isAudioOn" class="h-6 w-6"/>
      </button>

      <button type="button"
              @click="joinChannel"
              v-if="!isJoined"
              class="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <PhoneIcon class="h-6 w-6"/>
      </button>

      <button type="button"
              @click="leaveChannel"
              v-if="isJoined"
              class="ml-3 inline-flex items-center rounded-md bg-pink-100 px-3 py-2 text-sm font-semibold text-pink-700 shadow-sm hover:bg-pink-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700">
        <PhoneXMarkIcon class="h-6 w-6"/>
      </button>

      <button type="button"
              @click="attendeesSlideOverOpen = true"
              class="ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <UserGroupIcon class="h-6 w-6"/>
      </button>

      <button type="button"
              @click="logoutUser"
              class="ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <LockClosedIcon class="h-6 w-6"/>
      </button>
    </div>
  </nav>

  <div>
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <div class="flex flex-1 flex-col overflow-hidden">
          <video class="rounded-t-lg h-48 w-auto"
                 poster="https://i.pinimg.com/originals/83/c3/d9/83c3d9975e518cfce3b3da169f333707.gif"
                 id="camera-video"/>
          <span
            class="m-2 inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Me
            </span>
        </div>
      </li>

      <li v-if="!people.length"
          class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <div class="relative overflow-hidden">
          <div class="absolute bottom-0 h-full w-full flex items-end justify-center">
                  <span v-if="!isJoined" class="mb-10 text-sm font-light italic">
                    you are not in the channel yet...
                  </span>
            <span v-else class="mb-10 text-sm font-light italic">
                    waiting for others to share media...
                  </span>
          </div>
          <img class="h-fit w-auto" src="https://cdn.dribbble.com/users/2100764/screenshots/5554685/computer.gif"/>
        </div>
      </li>
      <li v-for="person in people" :key="person.uid"
          class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <div class="flex flex-1 flex-col overflow-hidden">
          <video class="rounded-t-lg h-48 w-auto"
                 poster="https://i.pinimg.com/originals/83/c3/d9/83c3d9975e518cfce3b3da169f333707.gif"
                 :id="person.uid"/>
          <span
            class="m-2 inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {{ person.uid }}
            </span>
        </div>
      </li>
    </ul>
  </div>


  <TransitionRoot as="template" :show="attendeesSlideOverOpen">
    <Dialog as="div" class="relative z-10" @close="attendeesSlideOverOpen = false">
      <div class="fixed inset-0"/>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
                             enter-from="translate-x-full" enter-to="translate-x-0"
                             leave="transform transition ease-in-out duration-500 sm:duration-700"
                             leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-base font-semibold leading-6 text-gray-900">Attendees</DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button"
                                class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                @click="attendeesSlideOverOpen = false">
                          <span class="absolute -inset-2.5"/>
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <ul role="list" class="divide-y divide-gray-100">
                      <li v-for="person in attendees" :key="person.uid" class="flex gap-x-4 py-5">
                        <img class="h-12 w-12 flex-none rounded-full bg-gray-50"
                             src="https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt="avatar"/>
                        <div class="min-w-0">
                          <p class="text-sm font-semibold leading-6 text-gray-900">{{ person._uintid  }}</p>
                          <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ person.uid }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  LockClosedIcon,
  MicrophoneIcon,
  PhoneIcon,
  PhoneXMarkIcon,
  SpeakerXMarkIcon,
  VideoCameraIcon,
  VideoCameraSlashIcon,
  XMarkIcon,
  UserGroupIcon
} from "@heroicons/vue/24/outline";
import {onMounted, ref} from "vue";
import AgoraRTC from "agora-rtc-sdk-ng"
import {useUserStore} from "@/stores/userStore";
import {useRouter} from "vue-router";
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'

let track = null
let audioTrack = null
let client = null

const attendeesSlideOverOpen = ref(true)

const isJoined = ref(false)
const isAudioPubed = ref(false)
const isVideoPubed = ref(false)
const isAudioSubed = ref(false)
const isVideoSubed = ref(false)

const isVideoOn = ref(false)
const isAudioOn = ref(false)

const people = ref([])
const attendees = ref([])

const userStore = useUserStore()
const router = useRouter()

const logoutUser = () => {
  userStore.logoutUser()
    .then(_ => router.push({name: 'login'}))
}

async function toggleCamera() {
  isVideoOn.value = !isVideoOn.value
  isVideoPubed.value = !isVideoPubed.value

  if (track) {
    return track.setEnabled(!track.enabled)
  }
  track = await AgoraRTC.createCameraVideoTrack()
  track.play("camera-video")

  if (isJoined.value) {
    await client.publish(track)
    isVideoPubed.value = true
  }
}

async function toggleMicrophone() {
  isAudioOn.value = !isAudioOn.value
  isAudioPubed.value = !isAudioPubed.value

  if (audioTrack) {
    return audioTrack.setEnabled(!audioTrack.enabled)
  }

  audioTrack = await AgoraRTC.createMicrophoneAudioTrack()
  // audioTrack.play()

  if (isJoined.value) {
    await client.publish(audioTrack)
    isAudioPubed.value = true
  }
}

const APP_ID = import.meta.env.VITE_AGORA_APP_ID

async function joinChannel() {
  if (!userStore.channelToJoin) {
    userStore.channelToJoin = "vue-room"
  }

  if (isJoined.value) {
    await leaveChannel()
  }

  if (!client) {
    client = AgoraRTC.createClient({
      mode: "rtc",
      codec: "vp8",
    })

    client.on("user-published", onUserPublish)

    client.on("user-unpublished", onUserUnPublish)

    client.on("user-joined", async (user) => {
      attendees.value.push(user)
    })

    client.on("user-left", async (user) => {
      const aIdx = attendees.value.findIndex(u => u.uid === user.uid)
      attendees.value.splice(aIdx, 1)
    })
  }

  await client.join(APP_ID, userStore.channelToJoin, userStore.rtcToken, userStore.userData.uid)

  isJoined.value = true

  if (!isAudioPubed.value) {
    await client.publish(audioTrack)
    isAudioPubed.value = true
  }

  if (!isVideoPubed.value) {
    await client.publish(track)
    isVideoPubed.value = true
  }
}

async function leaveChannel() {
  isJoined.value = false
  isAudioPubed.value = false
  isVideoPubed.value = false
  isVideoSubed.value = false
  attendees.value = []
  people.value = []

  client && (await client.leave())
  router.push({name: 'home'})
}

async function onUserPublish(user, mediaType) {
  if (mediaType === "video") {
    people.value.push(user)
    let remoteTrack = await client.subscribe(user, mediaType)
    remoteTrack.play(`${user.uid}`)

    isVideoSubed.value = true
  }
  if (mediaType === "audio") {
    const remoteTrack = await client.subscribe(user, mediaType)
    remoteTrack.play()
    isAudioSubed.value = true
  }
}

async function onUserUnPublish(user, mediaType) {
  if (mediaType === "video") {
    const recIdx = people.value.findIndex(u => u.uid === user.uid)
    people.value.splice(recIdx, 1)
  }

}

onMounted(() => {
  joinChannel()
})
</script>