<script>
  import Image from "./Image.svelte";
  export let config;

  $: item = config;

  function replaceLinks(str, links = []) {
    return str.replace(/\|/g, "<br>").replace(/\{\d+\}/g, match => {
      const li = links[Number(match.slice(1, -1))];
      if (!li) {
        return "";
      }
      return `<a href="${li.href}">${li.desc}</a>`;
    });
  }
</script>

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

<div class="content">
  <h3>{item.header}</h3>
  {#if item.image}
    <Image
      src="/images/{item.image}"
      alt="{item.header} image"
      background={item.background} />
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
