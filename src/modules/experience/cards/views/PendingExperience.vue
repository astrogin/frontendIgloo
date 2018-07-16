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
        </div>
      </div>
      <div class="exp-footer">
        <p class="exp-pointer">Remove this experience</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
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
    },
  };
</script>
