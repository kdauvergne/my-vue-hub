<template>
  <div>
    <h1>Articles Manager (Firebase Realtime Database)</h1>
    <FirebaseAddArticle></FirebaseAddArticle>
    <FirebaseListArticles></FirebaseListArticles>
  </div>
</template>
<script setup lang="js">
import FirebaseAddArticle from "../components/FirebaseAddArticle.vue";
import FirebaseListArticles from "../components/FirebaseListArticles.vue";
</script>
<style scoped lang="css"></style>
