<template>
  <h4 class="card-title">
    技术栈
  </h4>
  <div class="card-content technology-list">
    <div
      v-for="item in techList"
      :key="item.label"
      class="tech-box"
    >
      <div class="tech-name">
        <svg class="tech-svg">
          <use :xlink:href="item.icon" />
        </svg>
        <span>{{ item.label }}</span>
      </div>
      <div class="tech-text">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script setup>

const techList = [
  { label: 'Vue3', icon: '#cyanery-Vue', text: '山前山后各有哀愁，有风无风都不自由。' },
  { label: 'TypeScript', icon: '#cyanery-typescript', text: '一身转战三千里，一剑曾当百万师。' },
  { label: 'Eslint', icon: '#cyanery-eslint', text: '生者为过客，死者为归人。天地一逆旅，同悲万古尘。' },
  { label: 'Sass', icon: '#cyanery-sass', text: '繁花似锦觅安宁，淡云流水渡此生。' },
  { label: 'Github', icon: '#cyanery-github', text: '高山仰止，景行行止。虽不能至，心向往之。' },
  { label: 'JacaScript', icon: '#cyanery-javascript', text: '心之所向，素履以往。生如逆旅，一苇以航。' }
]

</script>

<style lang="scss" scoped>
.technology-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50% 50%;
  height: calc(100% - 42px);
  margin: 0 -1px -1px -1px;
  overflow: hidden;

  .tech-box {
    padding: 10px;
    outline: 1px solid #f0f0f0a3;
    transition: box-shadow .2s ease-in-out;

    &:hover {
      box-shadow: 0 0 12px 4px #f0f0f0a3;
    }

    .tech-name {
      height: 50px;
      line-height: 50px;

      .tech-svg {
        width: 42px;
        height: 42px;
        vertical-align: middle;
        margin-left: 12px;
        margin-right: 12px;
      }
    }

    .tech-text {
      padding: 10px 0 10px 12px;
      font-size: 14px;
      color: #72777c;
    }
  }
}
</style>
