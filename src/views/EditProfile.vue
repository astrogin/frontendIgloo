<template>
  <el-row :gutter="30" class="ep">
    <el-col :span="6">
      <div style="background-color: red;">
        PROFILE_PHOTO
      </div>
    </el-col>
    <el-col :span="18">
      <el-row>
        <el-col>
          <span>Edit profile</span>
          <span>( All info is required )</span>
          <span class="right"><el-button>View profile</el-button></span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">First name</el-col>
        <el-col :span="18">FIELD</el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          firstname: '',
          lastname: '',
          gender: '',
          birthday: '',
          email: '',
          phones: [],
          identification: '',
          languages: [],
          live: '',
          about: '',
          social: [],
        },
      };
    },
  };
</script>

