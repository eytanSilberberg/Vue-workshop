
<template>
<section>

  <h1 v-if="user.name">Hello {{user.name}}</h1>
    <h1 v-else>Hello guest</h1>
    <form v-if="!user.name" @submit.prevent="loginUser">
    <label>Enter user name</label>
    <input type="text" v-model="userFromForm.name">
    <button @click="login">Log in</button>
    </form>
    <div class="user-info">
      <h2>coins :{{user.coins}}</h2>
      <h2>BTC:{{user.btc}}</h2>
    </div>
      </section>
</template>

<script>
// import contactService from '../services/contactService'
import { bitCoinService } from '../services/bitcoinService';
import {userService} from '../services/userService'
export default {
data(){
  return {
    user:{
      name:'',
      coins:null
     
    },
     userFromForm:{
       name:''
     }
    
  }
},
methods:{
  async login(){
    const userDetails={...this.userFromForm}
    console.log('userDetails',userDetails);
    const newUser=await userService.getUser(this.userFromForm)
    const test=await bitCoinService.getMarketPrice()
    console.log('test',test);
    console.log('newUser',newUser);
    this.user={...newUser}
  }
}

}
</script>

<style>
  section{
    grid-column:2/3 ;
  }
</style>