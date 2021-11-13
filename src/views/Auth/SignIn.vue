<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Icon -->
      <div class="fadeIn first">
        <img
          src="http://danielzawadzki.com/codepen/01/icon.svg"
          id="icon"
          alt="User Icon"
        />
      </div>

      <!-- username Form -->
      <form>
        <input
          v-model="form.username"
          type="text"
          class="fadeIn second"
          placeholder="Username"
        />
        <input
          v-model="form.password"
          type="password"
          class="fadeIn third"
          placeholder="Password"
        />
        <input
          @click="signIn"
          type="button"
          class="fadeIn fourth"
          value="Log In"
        />
      </form>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <a class="underlineHover" href="#">Forgot Password?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signIn() {
      console.log(this.form);
    },
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
};
</script>
<style lang="scss">
@include signin_signup_ui;
</style>
