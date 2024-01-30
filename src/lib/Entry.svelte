<script>
  import Image from "$lib/Image.svelte";
  import Scroller from "./Scroller.svelte";
  export let config;

  let item = config;
  let images = item.images ?? (item.image ? [item.image] : undefined);

  function replaceLinks(str, links = []) {
    return str
      .replace(/\|/g, "<br>")
      .replace(/\{\d+\}/g, (match) => {
        const li = links[Number(match.slice(1, -1))];
        if (!li) {
          return "";
        }
        return `<a href="${li.href}" target="_blank">${li.desc}</a>`;
      })
      .replace(/\|/g, "<br>")
      .replace(/_.*_/g, (match) => {
        return `<b>${match.slice(1, -1)}</b>`;
      });
  }
</script>

<div class="content">
  <h3>{item.header}</h3>
  {#if images}
    {#if images.length === 1}
      <Image
        src="/images/{images[0]}"
        alt="{item.header} image"
        background={item.background}
      />
    {:else}
      <Scroller {images} background={item.background} />
    {/if}
  {/if}
  <span>
    {@html replaceLinks(item.body, item.links)}
  </span>
  <ul>
    {#each item.list as li}
      <li>
        {@html replaceLinks(li, item.links)}
      </li>
    {/each}
  </ul>
</div>

<style>
  .content {
    border-top: 1px solid var(--borders);
    margin-bottom: 70px;
    padding: 0 2%;
  }

  span {
    display: inline-block;
    margin-bottom: 15px;
    margin-left: 2%;
  }

  :global(a) {
    color: var(--links) !important;
    font-weight: 600;
  }

  li {
    margin-left: 3%;
  }
</style>
