<template>
  <div class="comment clearfix">
    <img src="http://via.placeholder.com/65x65" class="image">
    <span class="body">
      <div class="clearfix">
        <span class="author">{{author}}</span>
        <span class="date">{{date}}</span>
      </div>
      <div class="text">{{text | truncate(50)}}</div>
    </span>
  </div>
</template>

<script>
  import {truncate} from '../../helpers/filters';

  export default {
    filters: {
      truncate,
    },
    props: {
      author: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .comment {
    margin: 25px 15px 0 20px;
  }

  .image {
    float: left;
    border-radius: 50%;
    margin-right: 20px;
  }

  .text {
    color: gray;
  }

  .author {
    float: left;
    color: black;
    font-size: 1.15em;
  }

  .date {
    float: right;
    color: gray;
    font-size: 0.9em;
  }
</style>
