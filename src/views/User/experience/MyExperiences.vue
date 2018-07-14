<template>
  <div>
    <h1>hello</h1>
    <my-experience :rate="1.7" />
    <pendingExperience />
  </div>
</template>
<script>
  import {pendingExperience, myExperience} from '@/modules/experience/cards/index';

  export default {
    components: {
      pendingExperience,
      myExperience,
    },
  };
</script>
<style lang="scss">

</style>
