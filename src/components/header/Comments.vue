<template>
  <header-popover :state.sync="isOpened" :active="isActive" width="450">
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

    <router-link :to="{name: 'user.messages'}" tag="div" class="comments-button">
      <purple-button @click.native="isOpened = false">See more</purple-button>
    </router-link>

    <span slot="color" class="header-item item-text">
      <el-badge is-dot class="dot-badge">
        <font-awesome-icon icon="comments" size="lg"/>
      </el-badge>
    </span>
  </header-popover>
</template>

<script>
  import {mapGetters} from 'vuex';

  import HeaderPopover from '@/ui-kit/Popover';
  import PurpleButton from '@/ui-kit/buttons/ButtonPurple';

  import Comment from './Comment';

  export default {
    components: {
      HeaderPopover,
      Comment,
      PurpleButton,
    },
    data() {
      return {
        isOpened: false,
      };
    },
    computed: {
      ...mapGetters([
        'comments',
      ]),
      isActive() {
        return this.isOpened || this.$route.path === '/messages';
      },
    },
  };
</script>
