<template>
  <div class="card w-full bg-base-100 shadow-sm">
    <div class="card-body">
      <div class="flex justify-between">
        <h2 class="text-3xl font-bold">Composant OneFriend.vue</h2>
        <span
          class="badge badge-s"
          :class="{
            'badge-warning': propsToDataPremium === true,
            'badge-ghost': propsToDataPremium === false,
          }"
          >{{ propsToDataPremium ? "Premium" : "Standard" }}</span
        >
      </div>
      <ul class="mt-6 flex flex-col gap-2 text-xs">
        <li>
          <span class="badge badge-primary mr-2"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </span>
          <span class="font-bold">{{ name }}</span>
        </li>
        <li>
          <span class="badge badge-accent mr-2">ID</span>
          <span>{{ id }}</span>
        </li>
        <li>
          <span class="badge badge-neutral mr-2"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </span>
          <span>{{ phone }}</span>
        </li>
        <li>
          <span class="badge badge-info mr-2"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </span>
          <span>{{ email }}</span>
        </li>
      </ul>
      <button class="btn btn-active mt-2" @click="togglePremium">
        Modif Props Premium
      </button>
    </div>
  </div>
</template>

<script lang="js" setup>
import { ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
    default: "default id",
  },
  name: {
    type: String,
    required: true,
    default: "name",
  },
  phone: {
    type: String,
    required: true,
    default: "123456789",
  },
  email: {
    type: String,
    required: true,
    default: "mail@contact.com",
  },
  premium: {
    type: Boolean,
    required: true,
  },
});

const propsToDataPremium = ref(props.premium);

const togglePremium = () => {
  if (propsToDataPremium.value === false) {
    propsToDataPremium.value = true;
  } else {
    propsToDataPremium.value = false;
  }
};
</script>
