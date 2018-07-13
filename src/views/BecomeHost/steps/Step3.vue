<template>
  <div>
    <el-row>
      <el-col>
        <h1>Your city</h1>
        <el-input type="text" placeholder="Your city"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <h1>Have you hosted an experience before?</h1>
        <div>
          <el-radio v-model="hosted" label="true">
            Yes, I've done this before
          </el-radio>
        </div>
        <div>
          <el-radio v-model="hosted" label="false">
            No, not yet!
          </el-radio>
        </div>
      </el-col>
    </el-row>
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
        hosted: 'false',
        select: '0',
      };
    },
  };
</script>

