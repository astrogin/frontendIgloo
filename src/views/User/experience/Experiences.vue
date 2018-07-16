<template>
  <div class="experience-view-container">
    <div class="category-container">
      <main-categories />
    </div>
    <div class="my-experiences-container">
      <div class="experience-title-req-button-container">
        <h1 class="experience-title">
          My experiences
          <p>({{experiences.length}})</p>
        </h1>
        <request-button class="experience-request-button">
          <p>All requests (31)</p>
        </request-button>
      </div>
      <div v-for="(exp, index) in experiences" :key="index"
           class="experience-container">
        <my-experience
          :owner="exp.owner"
          :screen="exp.screen"
          :category="exp.category"
          :type="exp.type"
          :title="exp.title"
          :amount="exp.amount"
          :duration="exp.duration"
          :rate="exp.rate"
          :votes="exp.votes"
          :booked="exp.booked"
          :requests="exp.requests"
        />
      </div>
    </div>
    <div class="pending-experience-container">
      <div class="pending-experience-inside-container">
        <h1 class="experience-title">
          Pending experiences
          <p>({{experiences.length}})</p>
        </h1>
        <div v-for="(exp, index) in experiences" :key="index"
             class="experience-container">
          <pendingExperience
            :owner="exp.owner"
            :screen="exp.screen"
            :category="exp.category"
            :type="exp.type"
            :title="exp.title"
            :amount="exp.amount"
            :duration="exp.duration"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    myExperience, pendingExperience, experience,
  } from
    '@/modules/experience/cards/index';

  import {mainCategories} from '@/modules/category/index';

  import requestButton from '@/ui-kit/buttons/ButtonOrangeGrad';

  export default {
    components: {
      pendingExperience,
      myExperience,
      experience,
      mainCategories,
      requestButton,
    },
    data() {
      return {
        experiences: [
          {
            owner: require('@/../public/assets/img/become-host/7.jpg'),
            screen: require('@/../public/assets/img/become-host/5.jpg'),
            category: 'Go Touristy',
            type: 'Tour',
            title: 'Roof49 night bar dinner with Chef.Polinski',
            amount: 'THB 5,000',
            duration: '5 Hours',
            rate: 1.7,
            votes: '12',
            booked: '1,204',
            requests: '564',
          },
          {
            owner: require('@/../public/assets/img/become-host/7.jpg'),
            screen: require('@/../public/assets/img/become-host/5.jpg'),
            category: 'Go Touristy',
            type: 'Tour',
            title: 'Roof49 night bar dinner with Chef.Polinski',
            amount: 'THB 5,000',
            duration: '5 Hours',
            rate: 1.7,
            votes: '12',
            booked: '1,204',
            requests: '564',
          },
          {
            owner: require('@/../public/assets/img/become-host/7.jpg'),
            screen: require('@/../public/assets/img/become-host/5.jpg'),
            category: 'Go Touristy',
            type: 'Tour',
            title: 'Roof49 night bar dinner with Chef.Polinski',
            amount: 'THB 5,000',
            duration: '5 Hours',
            rate: 1.7,
            votes: '12',
            booked: '1,204',
            requests: '564',
          },
          {
            owner: require('@/../public/assets/img/become-host/7.jpg'),
            screen: require('@/../public/assets/img/become-host/5.jpg'),
            category: 'Go Touristy',
            type: 'Tour',
            title: 'Roof49 night bar dinner with Chef.Polinski',
            amount: 'THB 5,000',
            duration: '5 Hours',
            rate: 1.7,
            votes: '12',
            booked: '1,204',
            requests: '564',
          },
        ],
      };
    },
  };
</script>
