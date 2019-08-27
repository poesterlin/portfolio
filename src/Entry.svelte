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
  .item {
    display: flex;
    position: relative;
  }

  .label::after {
    content: "";
    position: absolute;
    right: -31px;
    top: 6px;
    background: var(--accent);
    height: 10px;
    width: 10px;
  }

  .label {
    flex: 1 1 17%;
    margin-left: 4%;
    margin-bottom: 25px;
    margin-top: 23px;
    top: 22px;
    max-width: 17%;
    text-align: center;
    display: inline-table;
    position: sticky;
    word-break: break-word;
  }

  @media (max-width: 600px) {
    .label {
      flex: 1 1 10px;
      width: 10px;
      min-width: 10px;
    }
  }

  .spacer {
    padding-left: 25px;
    border-left: 2px solid var(--accent);
    margin-left: 25px;
    width: 100%;
    background: linear-gradient(
      to right,
      transparent 5%,
      rgba(255, 255, 255, 0.05) 95%
    );
    min-height: calc(360px - 35vw);
  }

  .content {
    border-top: 1px solid #add8e636;
    margin-bottom: 70px;
    padding: 0 2%;
  }

  span {
    display: inline-block;
    margin-bottom: 15px;
    margin-left: 2%;
  }

  :global(a) {
    color: var(--accent) !important;
  }

  li {
    margin-left: 3%;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="item">
  <div class="label">{item.label}</div>
  <div class="spacer">
    <div class="content">
      <h3>{item.header}</h3>
      {#if item.image}
        <Image
          src="/images/{item.image}"
          alt="{item.header} image"
          background="{item.background}" />
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
  </div>
</div>
