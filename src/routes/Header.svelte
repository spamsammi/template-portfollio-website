<script lang="ts">
    import config from '$lib/config.json';
</script>

<header>
  <div class="header">
    <a href="#" class="logo"><img src="https://geekyhumans.com/wp-content/uploads/2022/09/owl.png?ezimgfmt=ng%3Awebp%2Fngcb5%2Frs%3Adevice%2Frscb5-1" alt="CSS Header"></a>
    <div class="header-right">
      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search">
        </form>
      </div>
      <a class="active" href="#home">Home</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <button class="book-button">BOOK</button>
    </div>
  </div>
</header>

<style>
  header {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #123;
    color: white;
  }

  .header {
    overflow: hidden;
    background-color: #0b1622;
    padding: 10px 20px;
  }

  .header img {
    width: 50px;
  }

  .header a {
    float: left;
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }

  input[type="text"]{
    padding: 8px 20px;
    border-radius: 50px;
    background-color: #123;
    border-color: white;
    margin-right: 30px;
    border: 0;
  }

  .book-button{
    padding: 10px 30px;
    border-radius: 50px;
  }

  .header a.logo {
    font-size: 25px;
    font-weight: bold;
    padding: 0 !important;
  }

  .header-right {
    float: right;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }
</style>
  