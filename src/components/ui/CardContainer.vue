<template>
  <div class="cardContainer">
    <slot></slot>
  </div>
</template>

<style scoped>
  .cardContainer{
    max-width: 600px;
    margin:6em auto;
    background: #fff;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.12);
  }
</style>