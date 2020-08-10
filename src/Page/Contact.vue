<template>
  <div class="contact-wrapper">
    <div class="contact_left">
      <h1 class="title">Contact Us</h1>
      <p class="subhead">We’re Here to Help</p>
      <p class="content">Feel free to contact us if you have any questions, comments or would like to discuss partnership with us. We will get back to you as soon as possible.</p>
    </div>
    <div class="contact_right">
      <form action="" class="rulesForm">
        <label for="">
          <p>Name</p>
          <input v-model="info.name" type="text" class="inp">
        </label>
        <label for="">
          <p>Email</p>
          <input v-model="info.email" type="text" class="inp">
        </label>
        <label for="">
          <p>Message</p>
          <textarea v-model="info.content" name="" id="" cols="30" rows="8" class="content"></textarea>
        </label>
        <button class="btn" @click="submitForm">SUBMIT</button>
        
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        name: '',
        email: '',
        content: ''
      }
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");

      if (!this.info.name || this.info.name.trim().length == 0) {
        window.alert('Please fill in your name!');
      } else if (!this.info.email || this.info.email.trim().length == 0) {
        window.alert('Please fill in your mailbox!')
      } else if (!reg.test(this.info.email)) {
        window.alert('Please enter the correct email address!');
      } else if (!this.info.content || this.info.content.trim().length == 0) {
        window.alert('Please fill in the information to be sent!')
      } else {
        this.axios.post('/concatApi/sendMail',{name: this.info.name,email: this.info.email,content: this.info.content})
          .then(result => {
            if (result.data.code == 0) {
              window.alert('Submit successfully!')
            } else {
              window.alert('Submit failure!')
            }
            this.clearForm();
          })
          .catch(err => {
            window.console.log(err);
          })
      }
    },
    clearForm() {
      this.info.name = '';
      this.info.content = '';
      this.info.email = '';
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/Css/Contact.less');
</style>