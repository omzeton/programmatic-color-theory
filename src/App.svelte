<script lang="ts">
  import FirstChapter from './chapter_1/index.svelte'
  import HorizontalLine from "./HorizontalLine.svelte";
</script>

<main>
  <h1>Programmatic color theory</h1>
  <HorizontalLine />
  <FirstChapter />
</main>

<style>
  main {
    width: 60vw;
    margin: 0 auto;
  }
  h1 {
    margin-top: 200px;
    color: #000;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
