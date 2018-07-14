<template>
  <div class="large-card-experience-container">
    <img class="exp-image" src="@/../public/assets/img/become-host/5.jpg" alt="Experience image">
    <div class="exp-content">
      <div class="exp-category-container">
        <h4>Go Touristy</h4>
        <div class="exp-circle" />
        <h4>Tour</h4>
      </div>
      <div class="exp-title">
        <h2>Roof49 night bar dinner with Chef.Polinski</h2>
      </div>
      <div class="exp-price-rate-container">
        <div class="exp-price-container">
          <h5>THB 4,000</h5>
          <div class="exp-circle" />
          <h5>5 Hours</h5>
        </div>
        <div class="exp-rate-container">
          <el-rate
            :colors="['#7929A6','#7929A6','#7929A6']"
            v-model="rate"
            class="rewrite-rate"
            disabled
            disabled-void-color="#e1e0e1"
            show-score
            text-color="#808080"
            score-template="19" />
        </div>
      </div>
      <div class="exp-date-container">
        <experience-date />
      </div>
    </div>
  </div>
</template>
<script>
  import ExperienceDate from '../components/Date.vue';

  export default {
    components: {
      ExperienceDate,
    },
    props: {
      rate: {
        type: Number,
        required: true
      }
    },
  };
</script>
