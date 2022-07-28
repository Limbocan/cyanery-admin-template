<template>
  <div class="page-box component-button">
    <div class="box-card">
      <h3>主题</h3>
      <div class="card-show">
        <cy-button theme="default" />
        <cy-button theme="primary" />
        <cy-button theme="success" />
        <cy-button theme="warning" />
        <cy-button theme="error" />
      </div>
    </div>
  </div>
</template>

<script setup name="Personal">

</script>

<style lang="scss" scoped>
.component-button {
  padding: 12px;

  .card-show {
    margin: 10px 0;
  }
}
</style>
