<template>
  <div class="regist__column">
    <!-- first name -->
    <inputHandler
      class="half"
      placeholder="Fist Name"></inputHandler>
    <!-- last name -->
    <inputHandler
      class="half"
      placeholder="Last Name"></inputHandler>
    <!-- email -->
    <inputHandler placeholder="E-mail"></inputHandler>
    <!-- password -->
    <form style="width: 100%">
      <inputHandler
        placeholder="Password"
        :type="passwordSwitchRes"
        @text="checkPassword">
        <div
          class="icon"
          @click="passwordStatus = !passwordStatus">
          <img
            v-if="!passwordStatus"
            src="/image/eyeClose.svg" />
          <img
            v-else
            src="/image/eyeOpen.svg" />
        </div>
      </inputHandler>
    </form>
  </div>
  <!-- remind check -->
  <div
    class="regist__remind"
    v-show="!props.agreePrivacy">
    <checkIconHandler
      :passwordLengthPass="passwordLengthPass"
      :passwordOneNumberPass="passwordOneNumberPass"></checkIconHandler>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import checkIconHandler from './../login/checkIconHandler.vue';

  const props = defineProps(['agreePrivacy']);

  /**
   * The value will be true if the password length checks pass.
   */
  const passwordLengthPass = ref(false);
  /**
   * The value will be true if the password is with a number.
   */
  const passwordOneNumberPass = ref(false);
  /**
   * If the value is false then hide characters and icon. vice versa.
   */
  const passwordStatus = ref(false);
  const passwordSwitchRes = computed(() => {
    let res;
    switch (passwordStatus.value) {
      case false:
        res = 'password';
        break;
      case true:
        res = 'text';
        break;
    }
    return res;
  });

  /**
   * Check if the password matches a number and length.
   */
  function checkPassword(e) {
    const oneNumberPass = new RegExp(/^(?=.*\d)[a-zA-Z\d]{1,}$/i);
    const lengthPass = new RegExp(/[a-zA-Z\d]{8,}$/i);
    passwordLengthPass.value = lengthPass.test(e);
    passwordOneNumberPass.value = oneNumberPass.test(e);
  }
</script>

<style lang="scss" scoped>
  @import './../../assets/css/registHandler.scss';
</style>
