<template>
  <div class="bh-steps">
    <el-row>
      <el-col>
        <component :is="step"/>
      </el-col>
    </el-row>
    <el-row class="bh-steps-controls">
      <el-col :span="3">
        <router-link :to="{name: 'become-host'}">Cancel</router-link>
      </el-col>
      <el-col :span="18" class="bh-steps-dots">
        <font-awesome-icon
          v-for="n in 5"
          :key="n"
          :size="stepNumber == n ? 'lg' : 'xs'"
          :class="{'active' : stepNumber == n}"
          icon="circle" />
      </el-col>
      <el-col :span="3">
        <button-cyan class="right" @click.native="nextStep">Next Step</button-cyan>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ButtonCyan from '@/ui-kit/buttons/ButtonCyan';

  import Step1 from './steps/Step1';
  import Step2 from './steps/Step2';
  import Step3 from './steps/Step3';
  import Step4 from './steps/Step4';
  import Step5 from './steps/Step5';

  const handleStep = (step) => {
    switch (parseInt(step)) {
    case 1: return Step1;
    case 2: return Step2;
    case 3: return Step3;
    case 4: return Step4;
    case 5: return Step5;
    }
  };

  export default {
    components: {Step1, Step2, Step3, Step4, Step5, ButtonCyan},
    data() {
      return {
        stepNumber: 0,
        step: null,
      };
    },
    watch: {
      '$route'(to, from) {
        this.step = handleStep(this.$route.params.step);
        this.stepNumber = parseInt(this.$route.params.step);
      },
    },
    created() {
      this.step = handleStep(this.$route.params.step);
      this.stepNumber = parseInt(this.$route.params.step);
    },
    methods: {
      nextStep() {
        this.$router.push({
          name: 'become-host.step',
          params: {step: this.stepNumber + 1},
        });
      },
    },
  };
</script>

