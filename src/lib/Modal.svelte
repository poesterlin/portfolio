<script lang="ts">
  import { replaceState } from "$app/navigation";
  import { page } from "$app/stores";
  import { tick } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  $: image = $page.state.zoomImageUri;

  function zoom(_node: HTMLElement) {
    return {
      delay: 0,
      duration: 350,
      easing: cubicInOut,
      css: (t: number) => `opacity: ${t}; transform: scale(${t})`,
    };
  }

  function close() {
    history.back();
  }
</script>

{#if image}
  <dialog open>
    <button on:pointerup={close}>
      <img
        class="big"
        src={image}
        alt={"zoomed image modal"}
        in:zoom
        out:fade
      />
    </button>
  </dialog>
{/if}

<style>
  dialog {
    position: fixed;
    inset: 0;
    display: flex;
    border: 0;
    padding: 0;
    background: transparent;
    z-index: 1;
  }
  
  dialog::backdrop {
    background: #48484866;
  }

  button {
    all: unset;
    display: flex;
  }

  img {
    max-width: calc(96vw - 25px);
    max-height: calc(94vh - 25px);
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: auto;
    border-radius: 4px;
  }
</style>
