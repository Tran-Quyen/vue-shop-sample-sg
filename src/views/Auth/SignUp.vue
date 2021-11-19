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
        <div>
          <input
            v-model.trim="$v.form.username.$model"
            :class="{
              'is-invalid': $v.form.username.$error,
              'is-valid': !$v.form.username.$invalid,
            }"
            type="text"
            id="username"
            class="fadeIn second"
            placeholder="Username"
          />
          <div class="valid-feedback">Your username is valid</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.username.required">Username is required</span>
          </div>
        </div>

        <div>
          <input
            v-model="form.email"
            v-model.trim="$v.form.email.$model"
            :class="{
              'is-invalid': $v.form.email.$error,
              'is-valid': !$v.form.email.$invalid,
            }"
            type="email"
            id="email"
            class="fadeIn third"
            placeholder="Email"
          />
          <div class="valid-feedback">Your email is valid</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.email.required">email is required</span>
          </div>
        </div>

       <div>
          <input
            v-model.trim="$v.form.password.$model"
              :class="{
                'is-invalid': $v.form.password.$error,
                'is-valid': !$v.form.password.$invalid,
              }"
            type="password"
            id="password"
            class="fadeIn third"
            placeholder="Password"
          />
          <div class="valid-feedback">Your password is valid</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.password.required">Password is required</span>
            <span v-if="!$v.form.password.minLength"
              >Password must have at least
              {{ $v.form.password.$params.minLength.min }} letters.</span
            >
            <span v-if="!$v.form.password.maxLength"
              >Password must have at most
              {{ $v.form.password.$params.maxLength.max }} letters.</span
            >
          </div>
       </div>

        <div>
          <input
            
            
            v-model.trim="$v.form.confirmPassword.$model"
                :class="{
                  'is-invalid': $v.form.confirmPassword.$error,
                  'is-valid': !$v.form.confirmPassword.$invalid,
                }"
            type="password"
            id="confirm-password"
            class="fadeIn third"
            placeholder="Confirm password"
          />
          <div class="valid-feedback">Your password is identical</div>
          <div class="invalid-feedback">
            <span v-if="!$v.form.confirmPassword.sameAsPassword">Password must be identical</span>
          </div>
        </div>
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
import { required, minLength,sameAs, maxLength } from "vuelidate/lib/validators";
// import { BASE_URL_API } from "@/constants/constants.js";

export default {
  methods: {
    signUp() {
      console.log(this.form);
    },
    
  },
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
      },
      email: {
        required,
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20),
      },
      confirmPassword: {
        required,
          sameAsPassword: sameAs('password')
      },
    },
  },
};
</script>

<style lang="scss">
@include signin_signup_ui;
</style>
