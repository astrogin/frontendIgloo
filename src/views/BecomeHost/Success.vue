<template>
  <div class="bh-steps">
    <el-row>
      <el-col>
        <h2 class="text-purple">Your application has been sent</h2>
        <p>Let us review your request.</p>
        <p>If we agree that your request is interested, we would like to test and learn more about you.</p>
        <p>You can check out status by email or check on user profile</p>
      </el-col>
    </el-row>
    <el-row class="bh-steps-controls">
      <el-col>
        <button-cyan class="right">Finish</button-cyan>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ButtonCyan from '@/ui-kit/buttons/ButtonCyan';
  export default {components: {ButtonCyan}};
</script>
