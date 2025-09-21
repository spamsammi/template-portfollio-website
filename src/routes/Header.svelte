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
      <h1>{config.title.text}</h1>
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
    background-color: var(--color-pallete-1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
  .header-left {
    color: var(--color-pallete-7);
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .header-left img {
    width: 3rem;
    height: auto;
  }
  .header-left h1 {
    font-family: var(--font-title);
    margin: 0;
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .header-right a {
    color: var(--color-pallete-7);
    font-family: var(--font-header);
    font-size: 1.2rem;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth, gradual */
  }
  .header-right a:hover {
    color: var(--color-pallete-5);
    transform: scale(1.15);
  }
</style>
  