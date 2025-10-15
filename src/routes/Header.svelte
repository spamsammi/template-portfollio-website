<script lang="ts">
  import config from '$lib/config.json';
  import { getImageByNameOrFirst } from '$lib/getImages';
  import { page } from '$app/state';

  const images = import.meta.glob('../images/logo/*.{jpg,png,svg}', { eager: true }) as Record<string, { default: string }>;
  const logo = getImageByNameOrFirst(images, 'logo');
</script>

<header class="header">
  <div class="header-left">
    <a href="/"><img src={logo} alt="Logo"></a>
    <a href="/"><h1>{config.title.text}</h1></a>
  </div>
  <nav>
    <ul class="header-right">
      {#each config.header.links as link}
        <li class:active={page.url.pathname === link.href}>
          <a href={link.href}>{link.text}</a>
        </li>
      {/each}
    </ul>
  </nav>
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
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .header-left a {
    text-decoration: none;
  }
  .header-left img {
    width: 3rem;
    height: auto;
  }
  .header-left h1 {
    color: var(--color-pallete-7);
    font-family: var(--font-title);
    margin: 0;
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .header-right li {
    font-family: var(--font-header);
    font-size: 1.2rem;
    list-style: none;
  }
  .header-right li a {
    color: var(--color-pallete-7);
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1);
    display: inline-block;
  }
  .header-right li.active a {
     color: var(--color-pallete-5);
     font-weight: bold;
   }
  .header-right li:hover a {
    color: var(--color-pallete-5);
    transform: scale(1.15);
  }

</style>
  