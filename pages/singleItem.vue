<template>
  <div class="single__item">
    <Header/>
    <p class="top__link" @click="toIndexVue"><トップへ戻る</p>

    <div class="single__item__container">
      <div class="single__item__main">
        <div class="img__wrapper">
          <ul class="item__img__list">
            <li class="item__img">
              <img src="@/assets/img/吹き出しのアイコン11 1.png">
            </li>

            <li class="item__img">
              <img src="@/assets/img/吹き出しのアイコン11 1.png">
            </li>

            <li class="item__img">
              <img src="@/assets/img/吹き出しのアイコン11 1.png">
            </li>

            <li class="item__img">
              <img src="@/assets/img/吹き出しのアイコン11 1.png">
            </li>
          </ul>

          <div class="select__img">
            <img src="@/assets/img/吹き出しのアイコン11 1.png">
          </div>
        </div>

        <div class="comments">
            <h2 class="comment__ttl">コメント</h2>

            <ul class="comment__list">
              <li class="comment__item">
                <div class="user__img">
                  <img src="@/assets/img/吹き出しのアイコン11 1.png">
                </div>
                
                <div class="comment__contents">
                  <p class="user__name">user_a</p>

                  <p class="comment">
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </p>
                </div>
              </li>

              <li class="comment__item">
                <div class="user__img">
                  <img src="@/assets/img/吹き出しのアイコン11 1.png">
                </div>
                
                <div class="comment__contents">
                  <p class="user__name">user_a</p>

                  <p class="comment">
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </p>
                </div>
              </li>
            </ul>

            <button class="show__comment_button">続きのコメントを見る</button>
          </div>
      </div>

      <aside class="aside">
        <h2 class="item__name">{{item.name}}</h2>
        <p class="item__hash">{{item.category}}</p>

        <p class="item__price">¥{{item.price}}</p>
        <p class="include__price">送料込み</p>

        <div class="icon__list">
          <div class="icon--heart">
            <img src="@/assets/img/ハートのアイコン素材 1 1.png">
          </div>

          <div class="icon--comment">
            <img src="@/assets/img/吹き出しのアイコン11 1.png">
          </div>
        </div>

        <button class="buy__button">購入手続きへ進む</button>

        <div class="item__plane">
          <h2 class="item__plane__ttl">商品の説明</h2>
          <p class="item__plane__content">{{item.content}}</p>
        </div>

        <div class="item__condition">
          <h2 class="item__condition__ttl">商品の状態</h2>
          
          <dl class="item__datail">
            <dt>カテゴリー</dt>
            <dd>{{item.category}}</dd>

            <dt>ブランド</dt>
            <dd>{{item.bland}}</dd>

            <dt>商品の状態</dt>
            <dd>{{item.condition}}</dd>

            <dt>配送方法</dt>
            <dd>{{item.howto}}</dd>

            <dt>発送元の地域</dt>
            <dd>{{item.region}}</dd>

            <dt>発送までの日数</dt>
            <dd>{{item.day}}</dd>
          </dl>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item: this.$route.query
      }
    },
    methods: {
      toIndexVue() {
        this.$router.push("/");
      }
    }
  }
</script>

<style>
.top__link {
  width: 70%;
  margin: 40px auto;
  color: #999999;
}

.single__item__container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.single__item__main {
  width: 55%;
  margin-right: 30px;
}

.img__wrapper {
  display: flex;
}

.item__img__list {
  list-style: none;
}

.item__img {
  width: 50px;
  margin-bottom: 30px;
}

.item__img img {
  width: 100%;
}

.select__img {
  width: 270px;
  margin-left: 40px;
}

.select__img img {
  width: 100%;
}

.comment__list {
  width: 100%;
}

.comment__ttl {
  padding: 30px 0;
}

.comment__item {
  list-style: none;
  display: flex;
  margin-bottom: 30px;
}

.user__img {
  width: 40px;
  border-radius: 50%;
}

.user__img img {
  width: 100%;
}

.comment__contents {
  padding-left: 20px;
}

.comment {
  width: 400px;
  word-break: break-all;
  background-color: #eeeeee;
}

.show__comment_button {
  width: 200px;
  background-color: #7b5544;
  color: white;
  padding: 5px 10px;
  margin-left: 50%;
  transform: translateX(-50%);
}


.aside {
  width: 45%;
}

.item__name {

}

.item__hash {
  padding-bottom: 20px;
}

.item__price,
.include__price {
  display: inline-block;
}

.item__price {
  font-size: 25px;
  font-weight: bold;
}

.include__price {
  padding-left: 25px;
}

.icon__list {
  display: flex;
  padding: 20px 0;
}

.icon--comment {
  margin-left: 20px;
}

.buy__button {
  width: 100%;
  background-color: #7b5544;
  color: white;
  padding: 5px 0;
}

.item__plane {
  margin: 40px 0;
}

.item__plane__ttl,
.item__condition__ttl {
  border-left: solid 10px #7b5544;
  padding-left: 5px;
}

.item__plane__content {
  padding-top: 10px;
}

.item__condition {

}

.item__datail {
  display: flex;
  flex-wrap: wrap;
}

.item__datail dt,
.item__datail dd {
  width: 40%;
  padding: 10px 0;
}

.item__datail dt {
  font-weight: bold;
}
</style>