<script lang="ts">
    import config from '$lib/config.json';
</script>

<header>
  <div class="header">
    <div class="header-left">
      <a href="#" class="logo"><img src="https://geekyhumans.com/wp-content/uploads/2022/09/owl.png?ezimgfmt=ng%3Awebp%2Fngcb5%2Frs%3Adevice%2Frscb5-1" alt="CSS Header"></a>
      <h2>{config.title}</h2>
    </div>
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
    padding: 0.625rem 1.25rem;
  }

  .header img {
    width: 3.125rem;
  }

  .header a {
    float: left;
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 0.75rem;
    text-decoration: none;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    border-radius: 0.25rem;
  }

  .header-left h2 {
    font-size: 1.5625rem;
    font-weight: bold;
    padding: 0 !important;
    margin: 0;
    margin-left: 0.625rem;
  }

  input[type="text"]{
    padding: 0.5em 1.25em;
    border-radius: 3.125em;
    background-color: #123;
    border-color: white;
    margin-right: 1.875rem;
    border: 0;
  }

  .book-button{
    padding: 0.625em 1.875em;
    border-radius: 3.125em;
  }

  .header a.logo {
    font-size: 1.5625rem;
    font-weight: bold;
    padding: 0 !important;
  }

  .header-right {
    float: right;
    display: flex;
    align-items: center;
  }

  .header-left {
    float: left;
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
  