<template>
  <div class="post__item">
    <Header/>

    <form class="post__form">
      <h2 class="post__form__ttl">出品の商品</h2>

      <label class="post__img">
        商品画像
        <br>
        <input type="file" src="" accept=".png, .jpg, .jpeg" v-on:change="select_file" name="img" multiple="multiple">
      </label>

      <label class="post__text">
        商品の説明
        <br>
        <textarea v-model="content" placeholder="色、素材、重さ、定価、注意点など
        
         (例) 使用していませんが、長い間、サイドボードの中に保管していました。ほとんど汚れはありませんが、ごく小さい点の染みが2~3ヶ所あります。写真参照。シンプルで飽きのこない、タチキチオリジナルデザインです。送料が安くないので、お値下げはできません。
        " name="content"></textarea>
      </label>

      <div class="post__detail">
        <p class="post__detail__ttl">商品の詳細</p>

        <label class="post__name">
          商品名
          <br>
          <input v-model="name" name="name">
        </label>

        <label class="post__cat">
          カテゴリー
          <br>
          <select v-model="category" name="category">
            <option value="雑貨">雑貨</option>
            <option value="スポーツ">スポーツ</option>
            <option value="アニメグッズ">アニメグッズ</option>
          </select>
        </label>

        <label class="post__bland">
          ブランド
          <br>
          <input v-model="bland" type="text" name="bland">
        </label>

        <label class="post__condition">
          商品の状態
          <br>
          <select v-model="condition" name="condition">
            <option value="新品">新品</option>
            <option value="やや傷や汚れあり">やや傷や汚れあり</option>
            <option value="傷や汚れあり">傷や汚れあり</option>
          </select>
        </label>

        <label class="post__send">
          配送方法
          <br>
          <select v-model="howto" name="howto">
            <option value="ポスト">ポスト</option>
            <option value="専用BOX">専用BOX</option>
            <option value=""></option>
          </select>
        </label>

        <label class="post__region">
          発送元の地域
          <br>
          <select v-model="region" name="region">
            <option value="広島">広島</option>
            <option value="岡山">岡山</option>
            <option value="山口">山口</option>
          </select>
        </label>

        <label class="post__day">
          発送までの日数
          <br>
          <select v-model="day" name="day">
            <option value="3日">3日</option>
            <option value="5日">5日</option>
            <option value="7日">7日</option>
          </select>
        </label>

        <label class="post__price">
          販売価格
          <br>
          <input v-model="price" placeholder=" ¥ 0" name="price">
        </label>

      </div>

      <button class="post__button" type="button" @click="postItem">出品する</button>
      
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        img: [],
        content: "",
        category: "",
        bland: "",
        condition: "",
        howto: "",
        region: "",
        day: "",
        price: "",
        email: this.$auth.user.email,
      }
    },
    methods: {
      select_file(e){
        const files = e.target.files;
        for(let i=0; i<files.length; i++) {
          this.img.push(files[i].name);
        };
      },
      async postItem() {
        const sendData = {
          name: this.name,
          img: this.img,
          content: this.content,
          category: this.category,
          bland: this.bland,
          condition: this.condition,
          howto: this.howto,
          region: this.region,
          day: this.day,
          price: this.price,
          email: this.email,
        };
        console.log(sendData);
        await this.$axios.post('http://127.0.0.1:8000/api/v1/item', sendData)
        .then(this.$router.push('/'));
      }
    }
  }
</script>

<style>
  .post__form {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .post__form > * {
    padding-top: 45px;
  }

  .post__form__ttl {
    text-align: center;
    font-size: 30px;
  }

  .post__img,
  .post__text {
    font-size: 25px;
    font-weight: bold;
  }

  .post__img input,
  .post__text textarea {
    height: 150px;
  }

  .post__img input {
    border: solid 2px #7b5544;
  }

  .post__detail {
    display: flex;
    flex-direction: column;
  }

  .post__detail > * {
    padding-bottom : 10px;
    font-size: 18px;
  }

  .post__detail__ttl {
    color: #444444;
    font-weight: bold;
    font-size: 25px;
  }

  .post__img,
  .post__text,
  .post__name,
  .post__cat,
  .post__bland,
  .post__condition,
  .post__send,
  .post__region,
  .post__day,
  .post__price {
    color: #444444;
  }

  .post__img input,
  .post__text textarea,
  .post__name input,
  .post__cat select,
  .post__bland input,
  .post__condition select,
  .post__send select,
  .post__region select,
  .post__day select,
  .post__price input {
    width: 100%;
    border: solid 1px #7b5544;
    border-radius: 5px;
  }

  .post__img input {
    color: #7b5544;
    text-align: center;
    line-height: 140px;
  }

  .post__name input,
  .post__cat select,
  .post__bland input,
  .post__condition select,
  .post__send select,
  .post__region select,
  .post__day select {
    height: 30px;
  }

  .post__text textarea::placeholder {
    font-size: 15px;
  }

  .post__price {
    padding-top: 30px;
    font-size: 25px;
    font-weight: bold;
  }

  .post__button {
    width: 200px;
    border-radius: 5px;
    color: white;
    background-color: #7b5544;
    padding: 5px;
    margin: 45px auto;
    font-weight: bold;
    font-size: 20px;
  }
</style>