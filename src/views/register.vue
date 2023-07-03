<template>
<div class="container">
    <div class="form-container" id="login-form">
      <h1>Sign Up</h1>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>

         <label for="username">Email</label>
        <input type="text" id="username" v-model="email" name="username" required>

        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" name="password" required>
        <button type="submit" @click.prevent="signUpRequest" v-if="! xhrRequest" @click="loginUser">Sign up</button>
          <button class="2" type="submit" v-if="xhrRequest">
        <span class="spinner-border spinner-border-sm"></span> wait..
    </button>
      </form>
      <p>Already have an account? <a href="#" id="login-link"><RouterLink to="/login">Sign In</RouterLink></a></p>
  </div>
</div>
</template>

<script>

// import firebase from 'firebase'
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


export default {
  data() {
    return {
      email: '',
      password: '',
      xhrRequest: false

    }
  },

  computed: {
    signUpRequest() {
        let v = this;
        v.xhrRequest = true;
        createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
            console.log("successfully registered")
            this.$router.push('/login')
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
* {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Open Sans', sans-serif;
      background-color: #222;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .form-container {
      width: 600px;
      margin: 0 auto;
      padding: 50px;
      background-color: #333;
      border-radius: 0px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      color: #fff;
    }

    h1 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 36px;
      color: #b38bff;
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
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
      font-size: 16px;
      color: #fff;
      background-color: #555;
    }

    button {
      padding: 10px;
      background-color: #b38bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 18px;
      transition: background-color 0.2s ease-in-out;
    }

    button:hover {
      background-color: #8c5fb2;
    }

    a {
      text-decoration: none;
      color: #b38bff;
      font-size: 18px;
      transition: color 0.2s ease-in-out;
    }

    a:hover {
      color: #8c5fb2;
    }

    p {
      text-align: center;
      margin: 8px;
    }
</style>