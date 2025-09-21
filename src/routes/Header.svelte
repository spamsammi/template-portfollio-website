<script lang="ts">
  import config from '$lib/config.json';
  import { getImageByNameOrFirst } from '$lib/getImages';

  const images = import.meta.glob('../images/logo/*.{jpg,png,svg}', { eager: true }) as Record<string, { default: string }>;
  const logo = getImageByNameOrFirst(images, 'logo');
</script>

<header>
  <div class="header">
    <div class="header-left">
      <a href="/" class="logo"><img src={logo} alt="Logo"></a>
      <h2>{config.title.text}</h2>
    </div>
    <div class="header-right">
      {#each config.header.links as link}
        <a href={link.href}>{link.text}</a>
      {/each}
    </div>
  </div>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .header-left img {
    width: 3rem;
    height: auto;
  }

  .header-left h2 {
    margin: 0;
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .header-right a {
    text-decoration: none;
  }
</style>
  