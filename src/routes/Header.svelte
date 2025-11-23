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
    <a href="/"><img class="nav-item" src={logo} alt="Logo"></a>
    <a href="/"><h1 class="nav-item">{config.title.text}</h1></a>
  </div>
  <nav 
    class="header-right"
    on:mouseleave={() => (openIndex = null)}
  >
    <ul>
      {#each config.header.links as link, i}
      <li>
        <div 
          class="nav-item"
          class:active={page.url.pathname === link.href}
          role="button" 
          tabindex="0"
          on:mouseenter={() => (openIndex = i)}
        >
          <a href={link.href}>{link.text}</a>
          {#if link.sublinks}
            <button
              class="submenu-toggle"
              on:click={() => (openIndex = openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              aria-label="arrow"
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
              <div class="nav-item">
                <li>
                  <a href={sublink.href}>{sublink.text}</a>
                </li>
              </div>
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
    display: inline-block;
    transition:
      color 0.3s ease,
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1);
  }
  .nav-item:hover {
    border-color: var(--color-pallete-5);
    color: var(--color-pallete-5);
    transform: scale(1.07);
  }
  .nav-item.active {
    border-color: var(--color-pallete-5);
    color: var(--color-pallete-5);
  }
  .nav-item:hover .arrow {
    border-color: var(--color-pallete-5);
  }
  .nav-item:hover .down {
    border-color: var(--color-pallete-5);
  }
  .arrow {
    border: solid var(--color-pallete-7);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    transition: transform 0.2s ease, color 0.3s ease;
  }
  .right {
    transform: rotate(-45deg);
  }
  .down {
    transition:
      color 0.3s ease,
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(45deg) translateY(-4px);
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
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
    flex-direction: column;
  }
  .submenu li {
    padding: 0.3rem 1rem;
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
    justify-content: flex-end;
  }
  .header-right ul {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
  }
  .header-right li {
    list-style: none;
    font-family: var(--font-header);
    font-size: 1.2rem;
  }
  .header-right a {
    text-decoration: none;
    background: none;
    color: inherit;
  }
</style>
  