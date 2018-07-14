<template>
  <div>
    <el-row>
      <el-col>
        <h1>
          What experiences did you host? And how long?
          <span class="right">
            <button-purple>+ Add more</button-purple>
          </span>
        </h1>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-input type="text" placeholder="Your experience"/>
          </el-col>
          <el-col :span="12">
            <el-select v-model="select">
              <el-option value="0" label="Less than 1 year"/>
            </el-select>
          </el-col>
        </el-row>
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
    data() {
      return {
        select: '0',
      };
    },
  };
</script>
