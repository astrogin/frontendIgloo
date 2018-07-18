<template>
  <div class="exp-cards-module">
    <div class="exp-card-container exp-small-card-container">
      <img :src="owner" class="exp-owner-image" alt="Owner Image">
      <router-link :to="{name: 'experience'}">
        <img :src="screen" class="exp-image" alt="Experience image">
      </router-link>
      <div class="exp-content">
        <div class="exp-category-container">
          <h5>{{type}}</h5>
        </div>
        <div class="exp-title">
          <h4>{{title}}</h4>
        </div>
        <div class="exp-price-rate-container">
          <div class="exp-price-container">
            <h5>{{amount}}</h5>
            <div class="exp-circle" />
            <h5>{{duration}}</h5>
          </div>
          <div class="exp-rate-container">
            <el-rate
              :colors="['#7929A6','#7929A6','#7929A6']"
              :score-template="votes"
              v-model="rate"
              class="rewrite-rate"
              disabled
              disabled-void-color="#e1e0e1"
              show-score
              text-color="#808080" />
          </div>
        </div>
        <div class="exp-date-container">
          <experience-date />
        </div>
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
      owner: {
        type: String,
        required: true,
      },
      screen: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      amount: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
      votes: {
        type: String,
        required: true,
      },
    },
  };
</script>
