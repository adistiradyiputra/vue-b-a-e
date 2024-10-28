<script setup>
const name = 'Test Compostion Component'

const showName = () => console.log(name)
</script>

<template>
  <button @click="showName">Button</button>
</template>

<style scoped></style>
