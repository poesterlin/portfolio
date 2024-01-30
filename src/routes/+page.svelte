<script lang="ts">
  import Entry from "$lib/Entry.svelte";
  import Modal from "$lib/Modal.svelte";

  export let data;
</script>

<h1>A History of Philip</h1>

<Modal />

{#each data.items as block}
  <div class="item">
    <div class="label">{block.label}</div>
    <div class="spacer">
      {#each block.content as item}
        <Entry {item} />
      {/each}
    </div>
  </div>
{/each}

<style>
  :global(body) {
    --accent: #62929e;
    --background: #393d3f;
    --borders: #546a7b;
    --links: #92cfdf;
    width: 1000px;
    max-width: 98vw;
    margin: auto;
    height: auto;
    color: #faf5f4;
    padding: 0;
    padding-bottom: 50px;
    background: linear-gradient(to left, black 5%, var(--background));
    background-size: 100%;
    background-repeat: no-repeat;
  }

  @media (prefers-color-scheme: light) {
    :global(body) {
      --accent: #61c89d;
      --links: #61c89d;
      --background: #f9f9f9;
      --borders: #00000052;
      color: #292929;
    }
    :global(a) {
      font-weight: 500;
    }
  }

  :global(body:before) {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    background: var(--background);
  }

  h1 {
    text-align: center;
    margin-bottom: 50px;
    padding-top: 150px;
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
      max-width: 10px;
    }
  }
</style>
