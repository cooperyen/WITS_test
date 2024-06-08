<template>
  <div class="regist__item">
    <div
      class="regist__text"
      :class="{ 'regist__text--active': text }">
      <!-- placeholder -->
      <p v-show="text">{{ placeholder }}</p>
      <input
        v-model="text"
        autocomplete="off"
        :type="types"
        :placeholder="props.placeholder"
        @input="emit('text', text)" />
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';

  const props = defineProps(['placeholder', 'type']);
  const emit = defineEmits(['text']);
  const types = computed(() => {
    let res = 'text';
    if (props.type) res = props.type;
    return res;
  });
  const text = ref('');
</script>

<style lang="scss" scoped>
  @import './../src/assets/css/inputHandler.scss';
</style>
