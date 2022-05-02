<template>
  <div class="password__setting">
    <Header/>
    <form class="password__change__form">
      <h2 class="password__change__form__ttl">パスワードの変更</h2>

      <label class="password--now__label">現在のパスワード</label>
      <input class="password--now" type="password" name="now_password">

      <label class="password--new__label">新しいパスワード</label>
      <input class="password--new" type="password" name="new_password">

      <button class="password__change__button" type="button">変更</button>
    </form>
  </div>
</template>

<script>
</script>

<style>
  * {
    margin: 0;
  }

  .password__setting {
    height: 100vh;
  }

  .password__change__form {
    width: 65%;
    margin: 10% auto;
    padding: 20px 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: solid 2px #7b5544;
  }

  .password__change__form > * {
    width: 70%;
    margin: 0 auto;
  }

  .password__change__form__ttl {
    text-align: center;
    padding: 15px;
  }

  .password--now__label,
  .password--new__label {
    font-size: 17px;
  }

  .password--now,
  .password--new {
    height: 40px;
    margin-top: 10px;
    margin-bottom: 30px;
    background-color: white;
    border: solid 1px #7b5544;
  }

  .password__change__button {
    width: 160px;
    background-color: #7b5544;
    color: white;
    border-radius: 3px;
    margin-top: 20px;
    padding: 4px 0;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
</style>