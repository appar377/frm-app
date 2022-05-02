<template>
  <div class="buy__item__list">
    <Header/>
    <UserData/>
    <h2 class="page__ttl">購入した商品一覧</h2>

    <ul class="item__list">
      <li class="item">
        <div class="item__img">
          <img src="@/assets/img/person.png">
        </div>

        <div class="contents">
          <p class="item__name">aaaaaa aaaaaaaa</p>

          <a class="item__hash">#grgrg</a>

          <p class="item__price">3000</p>
        </div>
      </li>

            <li class="item">
        <div class="item__img">
          <img src="@/assets/img/person.png">
        </div>

        <div class="contents">
          <p class="item__name">aaaaaa aaaaaaaa</p>

          <a class="item__hash">#grgrg</a>

          <p class="item__price">3000</p>
        </div>
      </li>
            <li class="item">
        <div class="item__img">
          <img src="@/assets/img/person.png">
        </div>

        <div class="contents">
          <p class="item__name">aaaaaa aaaaaaaa</p>

          <a class="item__hash">#grgrg</a>

          <p class="item__price">3000</p>
        </div>
      </li>

            <li class="item">
        <div class="item__img">
          <img src="@/assets/img/person.png">
        </div>

        <div class="contents">
          <p class="item__name">aaaaaa aaaaaaaa</p>

          <a class="item__hash">#grgrg</a>

          <p class="item__price">3000</p>
        </div>
      </li>

            <li class="item">
        <div class="item__img">
          <img src="@/assets/img/person.png">
        </div>

        <div class="contents">
          <p class="item__name">aaaaaa aaaaaaaa</p>

          <a class="item__hash">#grgrg</a>

          <p class="item__price">3000</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style>
  .page__ttl {
    width: 70%;
    margin: 0 auto;
    padding: 40px 0;
  }

  .item__list {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .item {
    width: 24%;
    list-style: none;
    border: solid 1px #7b5544;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  .item__img {
    width: 100%;
  }

  .item__img img {
    width: 100%;
  }

  .contents {
    padding: 15px;
  }

  .item__name {
    font-size: 19px;
  }

  .item__hash {
    font-size: 14px;
  }

  .item__price {
    margin-top: 30px;
    text-align: right;
    padding-right: 10px;
    font-weight: bold;
  }
</style>
