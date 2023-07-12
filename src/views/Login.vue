

<template>
<div class="mt-3 container-fluid">
    <div class="form-container" id="login-form">
      <div class="d-flex">
         <Icon icon="icon-park-outline:left" color="white" width="25" style="margin-top: 10px; margin-right: 40px" />
        <h1>Log In</h1>
      </div>
     
      <span class="option">Login in with one of the following options.</span>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-6">
           <button class="mt-2 google" type="submit" @click.prevent="signUpWithGoogle"><Icon icon="ri:google-fill" color="white" width="25" /></button>
        </div>

        <div class="col-lg-6 col-md-6 col-6">
           <button class="mt-2 google" type="submit" @click.prevent="signUpWithGoogle"><Icon icon="ic:baseline-apple" width="25"/></button>
        </div>
      </div>
      <form class="mt-5">

         <label for="username">Email</label>
        <input type="text" id="username" v-model="email" name="username" required>

        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" name="password" required>
        <button class="sign-in" type="submit" @click.prevent="loginUser" v-if="!xhrRequest">Log In</button>
        <button class="2 sign-in" type="submit" v-if="xhrRequest">
            <span class="spinner-border spinner-border-sm"></span> wait...
        </button>
      </form>
      <p class="below">Don't have an account? <a href="#" id="login-link"><RouterLink to="/register">Sign Up</RouterLink></a></p>
  </div>
</div>
</template>



<script>
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Icon } from '@iconify/vue';


export default {
  components: {
    Icon
  },
data() {
  return {
      email: '',
      password: '',
      xhrRequest: false
  } 
}, 

methods: {
  loginUser() {
      let v = this;
      v.xhrRequest = true;
         signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
            console.log("successfully registered")
           this.$notify({
    // (optional)
    // Name of the notification holder
    group: 'foo',

    // (optional)
    // Title (will be wrapped in div.notification-title)
    title: 'Login Successful',

    // Content (will be wrapped in div.notification-content)
    text: 'Welcome Back',

    // (optional)
    // Class that will be assigned to the notification
    type: 'success',

    // (optional, override)
    // Time (in ms) to keep the notification on screen
    duration: 2000,

    // (optional, override)
    // Time (in ms) to show / hide notifications
    speed: 1000,

    // (optional)
    // Data object that can be used in your template
    data: {}
  })
            this.$router.push('/')
        })

        .catch((err) => {
            v.xhrRequest = false
          alert(`Error - ${err.message}`)
        })
  },

      signUpWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)

        .then((result) => {
            console.log(result.user);
            this.$router.push('/')
        })
        .catch((error) => {
            console.log(`message: ${error.message}`)
        })
    }
}

}
</script>

<style scoped>
  /* * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    } */

    body {
      font-family: 'Open Sans', sans-serif;
      background-color: #222;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    .option {
      color: #797575;
    }



    @media screen and (min-width: 810px){
      .form-container {
      width: 600px;
      margin: 0 auto;
      padding: 20px;
      border-radius: 0px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      color: #fff;
    }
    }

    h1 {
      text-align: left;
      margin-bottom: 30px;
      font-size: 30px;
      font-weight: 600;
      color: #fff;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      margin-bottom: 10px;
      font-size: 18px;
    }

    input {
      padding: 12px;
      border: 1px solid rgb(11, 100, 33);
      border-radius: 10px;
      margin-bottom: 20px;
      font-size: 16px;
      color: #fff;
      background-color: #201f1f;
    }
  /* .sign-in {
      padding: 10px;
      background-color: #f00;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 18px;
      transition: background-color 0.2s ease-in-out;
    } */

             
          .sign-in {
            background-image: linear-gradient(to right, #56b13d 0%, #061700  51%, #52c234  100%);
            margin: 0px;
            padding: 15px 45px;
            text-align: center;

            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            border-radius: 10px;
            display: block;
            border: none;
          }
          .sign-in:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         

      .google {
      padding: 10px;
      background-color:#1e1e1e;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 18px;
      transition: background-color 0.2s ease-in-out;
      width: 100%;
    }

    button:hover {
      background-color: #fff;
      color: #000;
      font-weight: 600;
    }

    a {
      text-decoration: none;
      color: #f7f7f7;
      font-size: 15px;
      transition: color 0.2s ease-in-out;
    }

    a:hover {
      color: #8c5fb2;
    }

    p {
      text-align: center;
      margin: 8px;
      color: #797575;
    }

    @media screen and (max-width: 480px) {
      
    }
</style>