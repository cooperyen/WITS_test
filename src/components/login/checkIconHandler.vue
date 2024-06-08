<template>
  <div class="check__content">
    <!-- check Characters -->
    <div
      class="item"
      :class="{ 'item--active': passwordLengthPass }">
      <checkIconSwitch :status="passwordLengthPass"></checkIconSwitch>
      <div><p>8 Characters min.</p></div>
    </div>
    <!-- check a number -->
    <div
      class="item"
      :class="{ 'item--active': passwordOneNumberPass }">
      <checkIconSwitch :status="passwordOneNumberPass"></checkIconSwitch>
      <div><p>One number</p></div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['passwordLengthPass', 'passwordOneNumberPass']);
</script>

<style lang="scss" scoped>
  @import './../../assets/css/checkIconHandler.scss';
</style>
