<template>
  <div class="register">
    <LoginHeader/>
    <form class="register__form">
      <h2 class="register__form__ttl">新規登録</h2>

      <label class="name__label">ユーザーネーム</label>
      <input class="name" type="text" name="name" v-model="name">

      <label class="email__label">メールアドレス</label>
      <input class="email" type="email" name="email" v-model="email">

      <label class="password__label">パスワード</label>
      <input class="password" type="password" name="password" v-model="password">

      <button class="register__button" type="button" @click='register'>ログイン</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        password: "",
      }
    },
    methods: {
      async register() {
        const sendData = {
          name: this.name,
          email: this.email,
          password: this.password,
        }
        await this.$axios.post('http://127.0.0.1:8000/api/register', sendData)
        .then(response => {
          this.$auth.loginWith('laravelSanctum', {
            data: {
              email: this.email,
              password: this.password,
            }
          })
        }) 
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
  }

  .register {
    height: 100vh;
    background-color: #7b5544;
  }

  .register__form {
    width: 65%;
    margin: 0 auto;
    padding: 20px 0;
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  .register__form > * {
    width: 70%;
    margin: 0 auto;
  }

  .register__form__ttl {
    text-align: center;
    padding: 15px;
  }

  .name__label,
  .email__label,
  .password__label {
    font-size: 15px;
  }

  .name,
  .email,
  .password {
    height: 40px;
    margin-top: 10px;
    margin-bottom: 15px;
    background-color: white;
    border: solid 1px #7b5544;
  }

  .register__button {
    width: 160px;
    background-color: #7b5544;
    color: white;
    border-radius: 5px;
    margin-top: 20px;
    padding: 4px 0;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
</style>