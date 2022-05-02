<template>
  <div class="index">
    <Header v-model="keyword" />

    <h2 class="page__ttl">全ての商品一覧</h2>

    <ul class="item__list">
      <li class="item" @click="getSingleItem(item.id)" v-for="item in filteredUsers" :key="item.id">
        <div class="item__img">
          <img src="@/assets/img/person.png">
        </div>

        <div class="contents">
          <p class="item__name">{{item.name}}</p>

          <a class="item__hash">{{item.category}}</a>

          <p class="item__price">{{item.price}}円</p>
        </div>
      </li>
    </ul>

    <button class="post__buton" @click="toPostItemVue">出品</button>
  </div>
</template>

<script>
import Header from '/components/Header.vue'

  export default {
    components: {
      Header,
    },
    data() {
      return {
        items: "",
        keyword: "",
      }
    },
    methods: {
      toPostItemVue() {
        this.$router.push("/postItem");
      },
      async getItems() {
        const resData = await this.$axios.get('http://127.0.0.1:8000/api/v1/item');
        this.items = resData.data.data;
      },
      async getSingleItem(id) {
        const singleItemData = await this.$axios.get('http://127.0.0.1:8000/api/v1/item/' + id);
        this.$router.push({ path: '/singleItem' , query : singleItemData.data.data[0]});
      }
    },
    computed: {
      filteredUsers () {
        let items = [];
        for(let i = 0; i < this.items.length; i++) {
          let item = this.items[i];
          if(item.name.indexOf(this.keyword) !== -1) {
            items.push(item);
          }
        }
        return items;
      },
    },
    mounted() {
      this.getItems();
    },
  }
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
    justify-content: flex-start;
  }

  .item {
    width: 24%;
    list-style: none;
    border: solid 1px #7b5544;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  .item:not(last-of-type) {
    margin-right: 20px;
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

  .post__buton {
    color: white;
    font-weight: bold;
    font-size: 25px;
    background-color: #7b5544;
    border-radius: 50%;
    padding: 30px;
    position: fixed;
    right: 40px;
    bottom: 70px;
  }
</style>
