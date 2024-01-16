<template>
  <div class="theme-example">
    <ul class="example-list">
      <li :style="{ 'background-color': 'var(--primary-100)' }">--primary-100</li>
      <li :style="{ 'background-color': 'var(--primary-200)' }">--primary-200</li>
      <li :style="{ 'background-color': 'var(--primary-300)' }">--primary-300</li>
      <li :style="{ 'background-color': 'var(--accent-100)' }">--accent-100</li>
      <li :style="{ 'background-color': 'var(--accent-200)' }">--accent-200</li>
      <li :style="{ 'background-color': 'var(--text-100)' }">--text-100</li>
      <li :style="{ 'background-color': 'var(--text-200)' }">--text-200</li>
      <li :style="{ 'background-color': 'var(--bg-100)' }">--bg-100</li>
      <li :style="{ 'background-color': 'var(--bg-200)' }">--bg-200</li>
      <li :style="{ 'background-color': 'var(--bg-300)' }">--bg-300</li>
    </ul>
    <div class="example">文字</div>
    <div class="example">文字</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.theme-example {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;

  .example-list {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;

    & > li {
      flex: 1;
      padding: 1rem;
    }
  }

  .example {
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .example + .example {
    margin-left: 1rem;
  }
}
</style>
