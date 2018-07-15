<template>
  <div>
    <my-experience
      :owner="require('@/../public/assets/img/become-host/7.jpg')"
      :screen="require('@/../public/assets/img/become-host/5.jpg')"
      category="Go Touristy"
      type="Tour"
      title="Roof49 night bar dinner with Chef.Polinski"
      amount="THB 5,000"
      duration="5 Hours"
      :rate="1.7"
      votes="12"
      booked="1,204"
      requests="564"
    />

    <pendingExperience
      :owner="require('@/../public/assets/img/become-host/7.jpg')"
      :screen="require('@/../public/assets/img/become-host/5.jpg')"
      category="Go Touristy"
      type="Tour"
      title="Roof49 night bar dinner with Chef.Polinski"
      amount="THB 5,000"
      duration="5 Hours"
    />

    <experience
      :owner="require('@/../public/assets/img/become-host/7.jpg')"
      :screen="require('@/../public/assets/img/become-host/5.jpg')"
      type="Tour"
      title="Roof49 night bar dinner with Chef.Polinski"
      amount="THB 4,000"
      duration="5 Hours"
      :rate="4.7"
      votes="15"
    />

  </div>
</template>
<script>
  import {myExperience, pendingExperience, experience} from
    '@/modules/experience/cards/index';

  export default {
    components: {
      pendingExperience,
      myExperience,
      experience,
    },
  };
</script>
<style lang="scss">

</style>
