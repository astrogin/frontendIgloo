<template>
  <div class="notification clearfix">
    <img :src="img" class="notification-image">
    <span class="notification-body">
      <div class="clearfix">
        <span class="notification-title">{{title}}</span>
        <span class="notification-date">{{date}}</span>
      </div>
      <slot/>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
    },
  };
</script>
