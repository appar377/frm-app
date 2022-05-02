<template>
  <div class="user__data">
    <div class="user__data__left">
      <div class="user__img">
        <img src="@/assets/img/ハートのアイコン素材 1 1.png">
      </div>
    </div>

    <div class="user__data__middle">
      <p class="user__name">user__name</p>

      <div class="user__shopping__info">
        <div class="post__item" @click="toMyPageVue">
          <p>出品数</p>
          <p class="count">10</p>
        </div>

        <div class="like__item" @click="toLikeListVue">
          <p>いいね数</p>
          <p class="count">10</p>
        </div>

        <div class="buy__item" @click="toBuyItemListVue">
          <p>購入数</p>
          <p class="count">10</p>
        </div>
      </div>
    </div>

    <div class="user__data__right">
      <button @click="toPasswordSettingVue" class="password__change__button">パスワード変更</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      toPasswordSettingVue() {
        this.$router.push("/passwordSetting");
      },
      toMyPageVue() {
        this.$router.push("/myPage");
      },
      toLikeListVue() {
        this.$router.push("/likeList");
      },
      toBuyItemListVue() {
        this.$router.push("/buyItemList");
      },
    },
  }
</script>

<style scoped>
  .user__data {
    width: 70%;
    height: 170px;
    margin: 40px auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user__data__left {

  }

  .user__img {
    width: 130px;
    padding: 7px;
    border: solid 1px black;
    border-radius: 50%;
  }

  .user__img img {
    width: 100%;
  }

  .user__data__middle {
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .user__name {
    font-size: 20px;
  }

  .user__shopping__info {
    display: flex;
  }

  .user__shopping__info > div:not(last-of-type) {
    padding-right: 20px;
  }

  .post__item p,
  .like__item p,
  .buy__item p {
    display: inline-block;
    font-size: 20px;
  }

  .post__item:hover,
  .like__item:hover,
  .buy__item:hover {
    cursor: pointer;
  }

  .count {
    font-size: 23px;
    font-weight: bold;
  }

  .user__data__right {
    height: 100%; 
  }

  .password__change__button {
    color: white;
    background-color: #7b5544;
    border-radius: 5px;
    padding: 10px 15px;
    margin-top: 70px;
  }

</style>