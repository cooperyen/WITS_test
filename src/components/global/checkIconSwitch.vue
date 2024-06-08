<template>
  <div>
    <img
      v-if="!props.status"
      src="/image/unCheck.svg" />
    <img
      v-else
      src="/image/checked.svg" />
  </div>
</template>

<script setup>
  const props = defineProps(['status']);
</script>
