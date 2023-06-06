<template>
  <div class="admin-auth-page">
    <div class="login-container" v-if="!isAuth">
      <h1>{{ content.title }}</h1>
      <form @submit.prevent="loginHandler">
        <AppControlInput type="email" v-model="enteredEmail">{{ content.email }}</AppControlInput>
        <AppControlInput type="password" v-model="enteredPassword">{{ content.password }}</AppControlInput>
        <AppButton type="submit">{{ isSignedUp ? 'login' : 'sign up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isSignedUp = !isSignedUp">Switch to {{ isSignedUp ? 'sign up' : 'login' }}</AppButton>
      </form>
    </div>
      <div class="alert-container">
        <InfoAlert v-if="showAlertMessage">
        {{alertMessage}}
        <div v-if="error">
          <AppButton @click="onCloseInfoAlert">Close</AppButton>
        </div>
            </InfoAlert>
      </div>
    <div class="login-container" v-if="isAuth">
      <h1>Logout</h1>
      <div class="logout-btn">
        <AppButton @click="logoutHandler" :class="'confirm'">Confirm</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
import { signUserInOrUp } from '@/util/helpers.js'

export default {
  name: 'AdminAuthPage',
  layout: "default",
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      isSignedUp: !this.isAuth,
      enteredEmail: '',
      enteredPassword: '',
      showAlertMessage: false,
      alertMessage: 'Error - something went wrong',
      error: false,
    }
  },
  computed:{
    isAuth(){
      return !!this.$store.getters.getWebToken;
    },
    content(){
      const isEnglish = this.$store.getters.getLanguage === "English";
      if(isEnglish)
        return { title: "Admin Login", email: "E-mail", password: "Password"};

      if(!isEnglish)
        return { title: "管理者ログイン", email: "メールアドレス", password: "パスワード"};
    }
  },
  methods:{
    async loginHandler(){
      const mode = this.isSignedUp ? 'login' : 'sign up';
      const emailData = {email: this.enteredEmail, password: this.enteredPassword};
      try{
      const webToken = await signUserInOrUp(mode, emailData);
       if(!!webToken){
          this.$store.dispatch('setWebToken', webToken);
          return this.$router.push('/admin/messages');
       }
       this.$router.push('/error');
      } catch({error}){
        console.log('Ooops an error occured.', error.message);
        this.showAlertMessage = true;
        this.error = true;
        this.alertMessage = 'Error: ' + error.message;
      }
    },
    
    logoutHandler(){
      this.$store.dispatch('setWebToken', '');
    },

    onCloseInfoAlert(){
      this.error = false;
      this.showAlertMessage = false;
      this.alertMessage = '';
    }
  }
}
</script>

<style scoped>

h1{
  margin: 0;
  margin-bottom: 0.2rem;
  font-size: 1.4rem;
  text-align: center;
  color: rgb(46, 46, 46);
}
.admin-auth-page {
  padding: 20px;
}

.login-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

.logout-btn{
  text-align: center;
}
</style>