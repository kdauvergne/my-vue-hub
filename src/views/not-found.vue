<template>
  <div
    class="py-24 flex flex-col items-center justify-center p-4 text-center bg-base-100 text-base-content"
  >
    <div class="not-found">
      <div id="main">
        <div class="fof">
          <h1>Error 404</h1>
        </div>
      </div>
      <router-link to="/home" class="btn btn-error"
        >Retour à l'accueil</router-link
      >
    </div>
  </div>
</template>

<script setup lang="js"></script>

<style scoped lang="css">
* {
  transition: all 0.6s;
}

html {
  height: 100%;
}

body {
  font-family: "Lato", sans-serif;
  color: #888;
  margin: 0;
}

#main {
  display: table;
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: center;
}

.fof {
  display: table-cell;
  vertical-align: middle;
}

.fof h1 {
  font-size: 50px;
  display: inline-block;
  padding-right: 12px;
  animation: type 0.5s alternate infinite;
}

@keyframes type {
  from {
    box-shadow: inset -3px 0px 0px #888;
  }
  to {
    box-shadow: inset -3px 0px 0px transparent;
  }
}
</style>
