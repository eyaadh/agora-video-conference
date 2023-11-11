<template>
  <section>
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div
            class="relative mx-auto max-w-[525px] overflow-hidden rounded-xl shadow-md py-16 px-10 text-center sm:px-12 md:px-[60px]"
          >
            <div class="mb-10 text-center md:mb-16">
              <img
                class="mx-auto inline-block w-44 h-auto "
                src="https://i.pinimg.com/originals/83/c3/d9/83c3d9975e518cfce3b3da169f333707.gif"
                alt="logo"
              />
            </div>
            <p class="text-base">
              <span class="pr-0.5">Join Room?</span>
            </p>
            <form>
              <div class="mb-6">
                <div class="relative flex flex-grow items-stretch focus-within:z-10">
                  <input
                    type="text"
                    placeholder="Room Name"
                    v-model="joinRoomName"
                    class="w-full px-5 py-3 text-base bg-transparent border rounded-l-md  outline-none border-stroke focus-visible:shadow-none"
                  />
                  <button @click.prevent="triggerGenToken('join')"
                          type="button"
                          class="relative -ml-px inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-900 hover:bg-gray-50">
                    <ArrowRightCircleIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    Join
                  </button>
                  <button @click.prevent="triggerGenToken('create')"
                          type="button"
                          class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-900 hover:bg-gray-50">
                    <SquaresPlusIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    Create
                  </button>
                </div>
              </div>
              <div class="mb-10">
                <button
                  @click.prevent="logoutUser"
                  class="w-full px-5 py-3 text-base text-gray-900 transition border rounded-md cursor-pointer border-gray-900 bg-gray-100 hover:bg-gray-50"
                >
                  Sign Out
                </button>
              </div>
            </form>

            <div>
              <span class="absolute top-0 right-0 bg-gradient-to-bl p-2 from-gray-200 to-gray-50">
                     <svg
                       width="29"
                       height="40"
                       viewBox="0 0 29 40"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                        <circle
                          cx="2.288"
                          cy="25.9912"
                          r="1.39737"
                          transform="rotate(-90 2.288 25.9912)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="25.9911"
                          r="1.39737"
                          transform="rotate(-90 14.5849 25.9911)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="25.9911"
                          r="1.39737"
                          transform="rotate(-90 26.7216 25.9911)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="2.288"
                          cy="13.6944"
                          r="1.39737"
                          transform="rotate(-90 2.288 13.6944)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="13.6943"
                          r="1.39737"
                          transform="rotate(-90 14.5849 13.6943)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="13.6943"
                          r="1.39737"
                          transform="rotate(-90 26.7216 13.6943)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="2.288"
                          cy="38.0087"
                          r="1.39737"
                          transform="rotate(-90 2.288 38.0087)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="2.288"
                          cy="1.39739"
                          r="1.39737"
                          transform="rotate(-90 2.288 1.39739)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="38.0089"
                          r="1.39737"
                          transform="rotate(-90 14.5849 38.0089)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="38.0089"
                          r="1.39737"
                          transform="rotate(-90 26.7216 38.0089)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="1.39761"
                          r="1.39737"
                          transform="rotate(-90 14.5849 1.39761)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="1.39761"
                          r="1.39737"
                          transform="rotate(-90 26.7216 1.39761)"
                          fill="#3056D3"
                        />
                     </svg>
                  </span>
              <span class="absolute left-0 bottom-0 bg-gradient-to-tr p-2 from-gray-200 to-gray-50">
                     <svg
                       width="29"
                       height="40"
                       viewBox="0 0 29 40"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                        <circle
                          cx="2.288"
                          cy="25.9912"
                          r="1.39737"
                          transform="rotate(-90 2.288 25.9912)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="25.9911"
                          r="1.39737"
                          transform="rotate(-90 14.5849 25.9911)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="25.9911"
                          r="1.39737"
                          transform="rotate(-90 26.7216 25.9911)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="2.288"
                          cy="13.6944"
                          r="1.39737"
                          transform="rotate(-90 2.288 13.6944)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="13.6943"
                          r="1.39737"
                          transform="rotate(-90 14.5849 13.6943)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="13.6943"
                          r="1.39737"
                          transform="rotate(-90 26.7216 13.6943)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="2.288"
                          cy="38.0087"
                          r="1.39737"
                          transform="rotate(-90 2.288 38.0087)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="2.288"
                          cy="1.39739"
                          r="1.39737"
                          transform="rotate(-90 2.288 1.39739)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="38.0089"
                          r="1.39737"
                          transform="rotate(-90 14.5849 38.0089)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="38.0089"
                          r="1.39737"
                          transform="rotate(-90 26.7216 38.0089)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="14.5849"
                          cy="1.39761"
                          r="1.39737"
                          transform="rotate(-90 14.5849 1.39761)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.7216"
                          cy="1.39761"
                          r="1.39737"
                          transform="rotate(-90 26.7216 1.39761)"
                          fill="#3056D3"
                        />
                     </svg>
                  </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ArrowRightCircleIcon, SquaresPlusIcon} from "@heroicons/vue/24/outline";
import {ref} from "vue";
import {useUserStore} from "@/stores/userStore";
import {genToken} from "@/utils/agoraToken";
import {useRouter} from "vue-router";

const joinRoomName = ref('')
const userStore = useUserStore()
const router = useRouter()

const triggerGenToken = (joinType) => {
  genToken(joinType, joinRoomName.value)
    .then(_ => router.push({name: 'room'}))
}

const logoutUser = () => {
  userStore.logoutUser()
    .then(_ => router.push({name: 'login'}))
}

</script>