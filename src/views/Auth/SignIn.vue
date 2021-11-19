<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Icon -->
      <div class="fadeIn first">
        <h2>Login</h2>
      </div>

      <!-- username Form -->
      <form>
        <div>
          <input
            v-model.trim="$v.form.username.$model"
            :class="{
              'is-invalid': $v.form.username.$error,
              'is-valid': !$v.form.username.$invalid,
            }"
            type="text"
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
            v-model.trim="$v.form.password.$model"
            :class="{
              'is-invalid': $v.form.password.$error,
              'is-valid': !$v.form.password.$invalid,
            }"
            type="password"
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
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import axios from "axios"; //Dung tam
import { BASE_URL_API } from "@/constants/constants.js";
import {mapState} from 'vuex'

export default {
  data() {
    return {
      listUser: [],
      listRole: [],
      form: {
        username: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20),
      },
    },
  },

  async created() {
    this.listUser = await axios
      .get(`${BASE_URL_API}/user`)
      .then((res) => res.data);
    this.listRole = await axios
      .get(`${BASE_URL_API}/role`)
      .then((res) => res.data);
  },
  computed: mapState([
  'auth'
  ]),
  methods: {
    signIn() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        let user = this.listUser.find(
          (user) =>
            user.username === this.form.username &&
            user.password === this.form.password
        );
        console.log(user);
        if (user) {
          this.auth.user = {...user,isSignin:!user.isSignin};
          let role = this.listRole.find((role) => role.id === user.roleId);

          switch (role.name) {
            case "admin":
                this.$router.replace('/admin');
              break;
              case "manager": 
               this.$router.replace('/admin');
              break;
              case "customer":
               
               this.$router.replace('/');
              break;
            default:
              alert(`Not have ${role.name}`);
              break;
          }
         
        }

        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>
<style lang="scss">
@include signin_signup_ui;
</style>
