<template>
  <div class="experience-detail-container">
    <div class="category-container">
      <experience-categories />
    </div>
  </div>
</template>
<script>
  import {experienceCategories} from '@/modules/category/index';
  export default {
    components: {
      experienceCategories,
    },
  };
</script>
<style lang="scss">
  .experience-detail-container {
    text-align: center;
    .category-container {
      width: 95%;
      display: inline-block;
      text-align: left;
    }
  }
</style>
