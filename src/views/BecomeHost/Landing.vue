<template>
  <div>
    <el-row class="landing-container">
      <el-col class="bh-1-bg-img">
        <div class="bh-1">
          <div class="bh-1-header">Share your experiences</div>
          <div class="bh-1-subheader">
            <span class="text-bold">GO</span>AROUND
          </div>
          <div>
            <el-button
              class="bh-1-button"
              @click.native="handleStart">
              Get started
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="landing-container">
      <el-col class="bh-2-bg-img">
        <div class="bh-2">
          <div class="bh-2-header">
            What is
            <span class="bh-1-subheader">
              <span class="text-bold">GO</span>AROUND
            </span>
            host?
          </div>
          <div class="bh-2-text">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur.
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :sm="24" :md="12" class="landing-container bh-3-1-bg-img">
        <div class="bh-3-1">
          <div class="bh-3-1-header">Sharing your best</div>
          <div class="bh-3-1-text">
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
          </div>
        </div>
      </el-col>
      <el-col :sm="24" :md="12" class="landing-container bh-3-2-bg-img">
        <div class="bh-3-2">
          <div class="bh-3-2">
            <div class="bh-3-2-header">Make the connection</div>
            <div class="bh-3-2-text">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12" class="landing-container bh-4-1">
        <div class="bh-3-2">
          <div class="bh-3-2">
            <div class="bh-3-2-header">Earn the compensation</div>
            <div class="bh-3-2-text">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="landing-container bh-4-2">
        <div class="bh-3-1">
          <div class="bh-3-1-header">Represent your country</div>
          <div class="bh-3-1-text">
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="landing-container">
      <el-col class="bh-5-bg-img">
        <div class="bh-5">
          <div class="bh-5-header">To be a host, it's so easy</div>
          <div class="bh-5-text">
            Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" type="flex" justify="center" class="bh-step-cards">
      <el-col :span="6">
        <el-card class="bh-step-card">
          <div class="bh-step-card-step">Step 1</div>
          <div class="bh-step-card-header">Host application wizard</div>
          <div class="bh-step-card-body">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="bh-step-card">
          <div class="bh-step-card-step">Step 2</div>
          <div class="bh-step-card-header">Wait for review</div>
          <div class="bh-step-card-body">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="bh-step-card">
          <div class="bh-step-card-step">Step 3</div>
          <div class="bh-step-card-header">Basic training</div>
          <div class="bh-step-card-body">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="landing-container">
      <el-col class="bh-6-bg-img">
        <div class="bh-6">
          <div class="bh-6-header">
            Know <span class="text-bold">GO</span>AROUND host
          </div>
          <div class="bh-6-text">
            Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      handleStart() {
        this.$router.push({name: 'become-host.step', params: {step: 1}});
      },
    },
  };
</script>

<style>
  .landing-container {
    position: relative;
    text-align: center;
    color: white;
  }
</style>

