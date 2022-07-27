<template>
  <div class="page-404">
    <cy-button
      label="测试1"
      size="large"
      @click="toHome"
    />
    <cy-button
      label="测试2"
      size="mini"
      type="round"
      class="custom-class"
      @click="nomarl($event, 'mocan')"
    />
    <cy-button
      label="测试2"
      @click="nomarl($event, 'mocan')"
    />
  </div>
</template>

<script setup>

const nomarl = (btn, name) => {
  btn.loading = true
  console.log(name, '====')
}

const toHome = () => new Promise((resolve) => {
  console.log(1, '====')
  setTimeout(() => {
    console.log(2, '====')
    resolve()
  }, 2000)
})

</script>

<style lang="scss" scoped>
.page-404 {
  text-align: center;
}
</style>
