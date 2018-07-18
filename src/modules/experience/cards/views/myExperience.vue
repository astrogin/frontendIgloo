<template>
  <div class="exp-cards-module">
    <div class="exp-card-container exp-large-card-container">
      <img :src="owner" class="exp-owner-image" alt="Owner Image">
      <img :src="screen" class="exp-image" alt="Experience image">
      <div class="exp-content">
        <div class="exp-category-container">
          <h4>{{category}}</h4>
          <div class="exp-circle" />
          <h4>{{type}}</h4>
        </div>
        <div class="exp-title">
          <h2>{{title}}</h2>
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
              v-model="rate"
              class="rewrite-rate"
              disabled
              disabled-void-color="#e1e0e1"
              show-score
              text-color="#808080"
              :score-template="votes" />
          </div>
        </div>
        <div class="exp-date-container">
          <experience-date />
        </div>
      </div>
      <div class="exp-footer">
        <div class="exp-booked-container">
          <p class="exp-stat">{{booked}}</p>
          <p class="exp-pointer">Booked</p>
        </div>
        <div class="exp-request-container">
          <p class="exp-stat exp-purple">{{requests}}</p>
          <i class="exp-icono-arrow-right exp-purple" />
          <p class="exp-pointer exp-purple">Request</p>
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
      category: {
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
      booked: {
        type: String,
        required: true,
      },
      requests: {
        type: String,
        required: true,
      },
    },
  };
</script>
