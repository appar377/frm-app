<template>
  <div class="header">
    <div class="header__left">
      <div class="header__logo">
        <img src="@/assets/img/logo_transparent.png">
      </div>
    </div>

    <div class="header__middle">
      <input class="search" type="search" name="search" placeHolder="なにをお探しですか？" :value="value" @input="$emit('input',$event.target.value)">
    </div>

    <div class="header__right">
      <div class="header__right__img">
        <img src="@/assets/img/person.png">
      </div>

      <button class="logout__button" type="button" @click="logout">ログアウト</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["value"],
    data() {
      return {
        items: "",
      }
    },
    methods: {
      async logout() {
        try {
          await this.$auth.logout();
        } catch (error) {
          console.log(error);
        }
      },
      async getItems() {
        const resData = await this.$axios.get('http://127.0.0.1:8000/api/v1/item');
        this.items = resData.data.data;
      },
    },
  }
</script>

<style scoped>
  .header {
    height: 110px;
    background-color: #7b5544;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
  }

  .header__left {
    display: flex; 
    align-items: center;
  }

  .header__logo {

  }

  .header__logo img {
    width: 100%;
  }

  .header__middle {
    width: 40%;
    display: flex;
    align-items: center;
  }

  .search {
    width: 100%;
    height: 40px;
    background-color: white;
    border-radius: 5px;
  }

  .search::placeholder {
    padding-left: 20px;
  }

  .header__right {
    display: flex;
    align-items: center;
  }

  .header__right__img {
    width: 35px;
    margin-right: 30px;
  }

  .header__right__img img {
    width: 100%;
  }

  .logout__button {
    border: solid 2px white;
    border-radius: 5px;
    color: white;
    background-color: #7b5544;
    padding: 5px 10px;
  }
</style>