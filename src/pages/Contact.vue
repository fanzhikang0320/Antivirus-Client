<template>
  <div class="contact-wrapper">
    <div class="contact_left">
      <h1 class="title">Contact Us</h1>
      <p class="subhead">We’re Here to Help</p>
      <p class="content">Feel free to contact us if you have any questions, comments or would like to discuss partnership with us. We will get back to you as soon as possible.</p>
    </div>
    <div class="contact_right">
      <form class="rulesForm" @submit.prevent="submitForm">
        <label for="">
          <p>Name</p>
          <input v-model="info.name" autocomplete="off" type="text" class="inp">
        </label>
        <label for="">
          <p>Email</p>
          <input v-model="info.email" autocomplete="off" type="text" class="inp">
        </label>
        <label for="">
          <p>Message</p>
          <textarea v-model="info.content" autocomplete="off" cols="30" rows="8" class="content"></textarea>
        </label>
        <button class="btn" type="submit">SUBMIT</button>
        
      </form>
    </div>
  </div>
</template>

<script>
import {sendMail} from '@/api'
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
    /**
     * 验证表单
     */
    validate() {
      const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");

      if (!this.info.name || this.info.name.trim().length == 0) {
        window.alert('Please fill in your name!');
        return false;
      } else if (!this.info.email || this.info.email.trim().length == 0) {
        window.alert('Please fill in your mailbox!')
        return false;
      } else if (!reg.test(this.info.email)) {
        window.alert('Please enter the correct email address!');
        return false;
      } else if (!this.info.content || this.info.content.trim().length == 0) {
        window.alert('Please fill in the information to be sent!')
        return false;
      }

      return true;
    },
    /**
     * 提交表单
     */
    submitForm() {
      const flag = this.validate();
      if (flag) {
        sendMail(this.info)
          .then(res => {
            if (res.data.code == 0) {
              window.alert('Submit successfully!');

              this.clearForm();
            } else {
              window.alert('Submit failure!');
            }
          })
          .catch(err => {
            window.alert('Submit failure!');
          })
      }

    },
    // 清空表单
    clearForm() {
      this.info.name = '';
      this.info.content = '';
      this.info.email = '';
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/Contact.less');
</style>