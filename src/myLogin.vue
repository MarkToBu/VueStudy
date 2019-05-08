<template>
  <div>
    <p>
      <span>UserName:</span><input type="text" class="form-control" v-model="name" placeholder="Please Enter UserName">
    </p>
    <p>
      <span> PassWord:</span> <input type="password" class="form-control" v-model="password"
                                     placeholder="Please Enter Password">
    </p>
    <!--<div>-->
    <!--Company:-->
    <!--<div class="input-group">-->
    <!--<input type="text" class="form-control" disabled="disabled"-->
    <!--v-model="company" placeholder="Please choose a company">-->
    <!--<span class="input-group-append">-->
    <!--<button class="btn btn-outline-secondary" type="button"-->
    <!--@click="chooseCompany">Choose</button>-->
    <!--</span>-->
    <!--</div>-->
    <!--</div>-->
    <p style="margin-top: 10px;">
      <button type="button"
              class="btn btn-primary mx-3" style="float: right;"
              @click="ok">OK
      </button>
    </p>
  </div>
</template>

<script>
  // import Login from './MyLogin';
  import '../static/css/chunk-vendors.6acb9ff2.css'

  export default {
    props: {
      // name: String
    },
    data() {
      return {
        company: '',
        age: 20
      }
    },
    methods: {
      ok() {
        //close current modal dialog and return data
        this.$emit('close', {item: this.item});
      },
      // chooseCompany(){
      //   this.$dlg.modal(cp, {
      //     width: 400,
      //     height: 300,
      //     title: 'Company list',
      //     callback: data=>{
      //       this.company = data && data.name;
      //     }
      //   });
      // }
    },
    name: "MyLogin"
  }
</script>

<style scoped>

</style>
