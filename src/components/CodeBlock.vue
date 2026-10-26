<script setup>
import { ref, watchEffect } from "vue";
import { highlighterPromise } from "../libs/highlighter";
const props = defineProps({
  code: { type: String, required: true },
  lang: { type: String, default: "vue" },
});

const html = ref("");

watchEffect(async () => {
  const { code, lang } = props;
  const highlighter = await highlighterPromise;
  html.value = highlighter.codeToHtml(code, { lang, theme: "github-dark" });
});
</script>

<template>
  <div v-html="html" />
</template>
