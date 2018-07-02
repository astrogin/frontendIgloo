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
      <font-awesome-icon icon="comments" size="lg"/>
    </span>
  </header-popover>
</template>

<script>
  import Popover from './Popover';
  import Comment from './Comment';
  import PurpleButton from '@/components/PurpleButton.vue';

  export default {
    components: {
      'header-popover': Popover,
      Comment,
      PurpleButton,
    },
    data() {
      return {
        comments: [
          {
            author: 'Jessica Liu',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscisou satwa gwa',
            date: '2 hr ago',
          },
          {
            author: 'Tommy Hilley',
            text: 'Aliquip ex ea commodo consequat',
            date: '1 day ago',
          },
          {
            author: 'Kel Duchadin',
            text: 'Duis aute irure dolor',
            date: 'March 31',
          },
          {
            author: 'Delen McEledery',
            text: 'Lotam rem aperiam',
            date: 'March 12',
          },
        ],
      };
    },
  };
</script>
