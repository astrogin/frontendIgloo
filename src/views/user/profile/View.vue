<template>
  <div>
    <el-row>
      <el-col class="clearfix">
        <img class="vp-header-image" src="http://placehold.it/100">
        <div class="vp-header-body clearfix">
          <div>
            <span class="vp-header-name">Christina</span>
            <span class="right">
              <router-link :to="{name: 'user.profile.edit'}">
                <button-purple>Edit profile</button-purple>
              </router-link>
            </span>
          </div>
          <div class="vp-header-place">Bangkok, Thailand</div>
          <div class="vp-header-joined">Joined in June 2014</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="vp-badges">
        <span class="check">
          <font-awesome-icon icon="check"/> &nbsp; Verified User
        </span>
        <span><font-awesome-icon icon="check"/> &nbsp; Government ID</span>
        <span><font-awesome-icon icon="check"/> &nbsp; Personal info</span>
        <span><font-awesome-icon icon="check"/> &nbsp; Email address</span>
        <span><font-awesome-icon icon="check"/> &nbsp; Phone number</span>
      </el-col>
    </el-row>
    <el-row class="vp-row">
      <el-col>
        <div class="vp-title">Language</div>
        <p class="vp-text-big">English, Thai</p>
      </el-col>
    </el-row>
    <el-row class="vp-row">
      <el-col>
        <div class="vp-title">About me</div>
        <p class="vp-text">
          Proin in mollis ipsum, nec sagittis purus. Pellentesque posuere porta commodo. Integer tincidunt lacus ante, non venenatis lacus ullamcorper in. Nulla facilisi. Nulla vulputate, lorem id laoreet efficitur, purus odio auctor tellus, sed posuere tortor orci id elit. Donec dignissim aliquam sapien, in rutrum erat accumsan quis. Duis elementum nisi vitae molestie finibus. Nam condimentum purus eget mi aliquam, vitae condimentum magna rutrum. Donec finibus lacus gravida, cursus quam vel, malesuada quam. Proin aliquet lorem orci, sit amet sollicitudin magna sollicitudin sed. Nam arcu ipsum, sollicitudin non enim eleifend, imperdiet hendrerit lectus. Donec in lacus enim. Morbi imperdiet purus sit amet mi consequat consectetur.
        </p>
        <p class="vp-text">
          Sed varius ante a sapien porta pretium. Curabitur eleifend eros in elementum imperdiet. Sed ac luctus nibh, eu vestibulum justo. Sed vitae enim iaculis velit finibus imperdiet quis sed metus. Aenean fermentum nisi vitae nisi molestie consectetur. Aliquam molestie quam a turpis mollis scelerisque. Etiam libero tortor, sodales non sagittis eget, interdum et sem. Vestibulum sit amet ligula quis elit euismod aliquam. Integer vulputate rhoncus malesuada. Ut ut nulla eu est condimentum dictum. Praesent finibus orci eget risus luctus, et aliquam lorem faucibus.
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ButtonPurple from '@/ui-kit/buttons/ButtonPurple';

  export default {
    components: {
      ButtonPurple,
    },
  };
</script>

