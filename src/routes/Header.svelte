<script lang="ts">
  import config from '$lib/config.json';
  import { getImageByNameOrFirst } from '$lib/getImages';
  import { page } from '$app/state';

  const images = import.meta.glob('../images/logo/*.{jpg,png,svg}', { eager: true }) as Record<string, { default: string }>;
  const logo = getImageByNameOrFirst(images, 'logo');

  let openIndex: number | null = null;
</script>

<header class="header">
  <div class="header-left">
    <a href="/"><img src={logo} alt="Logo"></a>
    <a href="/"><h1>{config.title.text}</h1></a>
  </div>
  <nav>
    <ul class="header-right">
      {#each config.header.links as link, i}
      <li
        class:active={page.url.pathname === link.href}
        on:mouseenter={() => (openIndex = i)}
        on:mouseleave={() => (openIndex = null)}
      >
        <div class="nav-link">
          <a class="nav-item" href={link.href}>{link.text}</a>

          {#if link.sublinks}
            <button
              class="nav-item submenu-toggle"
              on:click={() => (openIndex = openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span
                class="arrow"
                class:right={openIndex !== i}
                class:down={openIndex === i}
                aria-hidden="true"
              ></span>
            </button>
          {/if}
        </div>

        {#if link.sublinks && openIndex === i}
          <ul class="submenu">
            {#each link.sublinks as sublink}
              <li>
                <a href={sublink.href} class="submenu-item">{sublink.text}</a>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
    </ul>
  </nav>
</header>

<style>
  .nav-item {
    color: var(--color-pallete-7);
    text-decoration: none;
    background: none;
    display: inline-block;
    transition:
      color 0.3s ease,
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1);
  }
  .submenu-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .submenu {
    position: absolute;
    background: var(--color-pallete-1);
    list-style: none;
    margin: 0.5rem 0 0;
    padding: 0.5rem 0;
    border-radius: 0.25rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  .submenu li {
    padding: 0.3rem 1rem;
  }
  .submenu-item {
    color: var(--color-pallete-7);
    text-decoration: none;
    display: block;
    transition: color 0.2s ease;
  }
  .submenu-item:hover {
    color: var(--color-pallete-5);
  }
  .arrow {
    border: solid var(--color-pallete-7);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    transition: transform 0.2s ease;
  }
  .right {
    transform: rotate(-45deg);
  }
  .down {
    border-color: var(--color-pallete-5);
    transition:
      color 0.3s ease,
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(45deg) translateY(-4px);
  }
  .header {
    background-color: var(--color-pallete-1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
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
    width: 5rem;
    height: auto;
    margin: 0;
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
    list-style: none;
    font-family: var(--font-header);
    font-size: 1.2rem;
  }
  .header-right li:hover .nav-item {
    color: var(--color-pallete-5);
    transform: scale(1.07);
  }
  .header-right li.active .nav-item {
    color: var(--color-pallete-5);
    font-weight: bold;
  }
</style>
  