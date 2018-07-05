<template>
  <header-popover width="450">
    <div>
      <span class="popover-item text-purple">Recent</span>
      <span class="popover-item">Accepted experience</span>
    </div>

    <comment
      v-for="(comment, index) in comments"
      :key="index"
      :author="comment.author"
      :text="comment.text"
      :date="comment.date"/>

    <div class="comments-button">
      <purple-button>See more</purple-button>
    </div>

    <span slot="color" class="header-item item-text">
      <el-badge is-dot class="dot-badge">
        <font-awesome-icon icon="comments" size="lg"/>
      </el-badge>
    </span>
  </header-popover>
</template>

<script>
  import Popover from './Popover';
  import Comment from './Comment';
  import PurpleButton from '@/components/PurpleButton.vue';

  import {mapGetters} from 'vuex';

  export default {
    components: {
      'header-popover': Popover,
      Comment,
      PurpleButton,
    },
    computed: {
      ...mapGetters([
        'comments',
      ]),
    },
  };
</script>
