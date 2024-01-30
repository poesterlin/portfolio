<script lang="ts">
  import { browser } from "$app/environment";
  import Carousel from "svelte-carousel";
  import Image from "./Image.svelte";

  export let images;
  export let background;
</script>

<section>
  {#if browser}
    <Carousel arrows infinite autoplay pauseOnFocus autoplayDuration={7000}>
      {#each images as image}
        <div>
          <Image src="/images/{image}" alt="image" {background} />
        </div>
      {/each}
    </Carousel>
  {/if}
</section>

<style>
  section {
    background: transparent;
    color: #fff;
    position: relative;
    margin: 35px auto;
    display: block;
    border: 0;
    padding: 0;
  }

  div {
    display: flex;

    /* carousel library sets inline style that causes faulty styling */
    min-width: 100% !important;
  }
</style>
