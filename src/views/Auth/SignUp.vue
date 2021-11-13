<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Icon -->
      <div class="fadeIn first">
        <h2>Sign Up</h2>
      </div>

      <!-- Login Form -->
      <form>
        <input
        v-model="form.username"
          type="text"
          id="username"
          class="fadeIn second"
          placeholder="Username"
        />
        <input
        v-model="form.email"
          type="email"
          id="email"
          class="fadeIn third"
          placeholder="Email"
        />
        <input
        v-model="form.password"
          type="password"
          id="password"
          class="fadeIn third"
          placeholder="Password"
        />
        <input
        v-model="form.confirmPassword"
          type="password"
          id="confirm-password"
          class="fadeIn third"
          placeholder="Confirm password"
        />
        <input
          type="button"
          class="fadeIn fourth"
          value="Sign Up"
          @click="signUp"
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
  methods: { signUp() {console.log(this.form)} },
 data() {
     return {
         form:{
             username:"",
            email:"",
            password:"",
            confirmPassword:"",
         }
         
     }
 },
};
</script>

<style lang="scss">
@include signin_signup_ui;
</style>
