<template>
  <div class="container">
    <div class="login">
      <!-- back -->
      <div class="login__nav">
        <div class="box">
          <div>
            <img src="/image/arrow.svg" />
          </div>
          <div>
            <a href="#">Back</a>
          </div>
        </div>
      </div>

      <!-- sign in/up -->
      <div class="login__content title__box">
        <!-- main title -->
        <div class="title">
          <p class="title__subtitle">Start from free</p>
          <p class="title__main">Create an account</p>
        </div>
        <!-- each login BTN -->
        <div class="btn">
          <template
            v-for="val in signUp"
            :key="val">
            <buttonStyle
              class="icon__box"
              :class="val.id.toLowerCase()">
              <div class="icon"></div>
              <span>Sign up with {{ val.id }}</span>
            </buttonStyle>
          </template>
        </div>
        <div class="space">
          <p>Or use your email for registration</p>
        </div>
      </div>

      <!-- registration -->
      <div class="login__content regist__box">
        <!-- item column -->
        <registHandler :agreePrivacy="agreePrivacy"></registHandler>
      </div>

      <!-- privacy policy -->
      <div class="login__content privacy__box">
        <!-- check box -->
        <div @click="agreePrivacy = !agreePrivacy">
          <img
            v-if="!agreePrivacy"
            src="/image/checkBoxUnCheck.svg" />
          <img
            v-else
            src="/image/checkBoxChecked.svg" />
        </div>
        <!-- description -->
        <div>
          <p>
            By creating account, you agree to accept our Privacy Policy, Terms
            of Service and Notification settings.
          </p>
        </div>
      </div>

      <!-- create -->
      <div class="login__content create__box">
        <button>Create an Free Account!</button>
      </div>

      <!-- remind login -->
      <div class="login__content login__box">
        <p>Already have an account?</p>
        <a href="#">Log in</a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import registHandler from './components/login/registHandler.vue';

  const signUp = [
    { id: 'Google', img: '/src/assets/image/google.svg' },
    { id: 'Facebook', img: '/src/assets/image/facebook.svg' },
  ];

  /**
   * privacy policy checkbox.
   */
  const agreePrivacy = ref(false);
</script>

<style lang="scss" scoped>
  @import './assets/css/login.scss';
</style>
