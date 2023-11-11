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
            <form>
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Email"
                  v-model="userForm.email"
                  class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  v-model="userForm.password"
                  class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  v-model="userForm.confPassword"
                  class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke focus-visible:shadow-none"
                />
              </div>
              <div class="mb-10">
                <button
                  @click.prevent="registerUser"
                  class="w-full px-5 py-3 text-base text-white transition border rounded-md cursor-pointer border-indigo-600 bg-indigo-600 hover:bg-indigo-500"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <span class="inline-block mb-2 text-base hover:underline">
              Forget Password?
            </span>
            <p class="text-base">
              <span class="pr-0.5">Already have an account.</span>

              <router-link to="/login" class="hover:underline">
                Sign In.
              </router-link>
            </p>
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
import {computed, reactive} from "vue";
import {required, sameAs, email} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {useUserStore} from "@/stores/userStore";
import {useRouter} from "vue-router";


const userStore = useUserStore()
const router = useRouter()
const userForm = reactive({
  email: null,
  password: null,
  confPassword: null
})

const userFormValidationRules = computed(() => {
  return {
    email: {required, email},
    password: {required},
    confPassword: {required, sameAs: sameAs(userForm.password)}
  }
})

const v$ = useVuelidate(userFormValidationRules, userForm)

const registerUser = () => {
  v$.value.$validate()
  if (!v$.value.$error) {
    userStore.registerUser(userForm.email, userForm.password)
      .then(user => {
        console.log(user)
        router.push("/")
      })
  }
}
</script>