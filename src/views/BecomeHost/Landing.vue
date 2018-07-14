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
            <span class="bh-2-subheader">
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
      <el-col :sm="24" :md="12" class="landing-container bh-4-1">
        <div class="bh-3-2">
          <div class="bh-3-2">
            <div class="bh-3-2-header">Earn the compensation</div>
            <div class="bh-3-2-text">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
            </div>
          </div>
        </div>
      </el-col>
      <el-col :sm="24" :md="12" class="landing-container bh-4-2">
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

    <el-row :gutter="20" class="bh-step-cards">
      <el-col :sm="24" :md="6">
        <el-card class="bh-step-card">
          <div class="bh-step-card-step">Step 1</div>
          <div class="bh-step-card-header">Host application wizard</div>
          <div class="bh-step-card-body">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="6">
        <el-card class="bh-step-card">
          <div class="bh-step-card-step">Step 2</div>
          <div class="bh-step-card-header">Wait for review</div>
          <div class="bh-step-card-body">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
        </el-card>
      </el-col>
      <el-col :sm="24" :md="6">
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

    <el-row class="bh-faq">
      <el-col>
        <h1>Frequenty asked questions</h1>
        <h3>What's the time commitment?</h3>
        <p>(Please change, this content from AirBNB) You can host as often as you like - feel free to adjust your dates and times until you find what works best for you.</p>

        <h3>Do I need a business license?</h3>
        <p>(Please change, this content from AirBNB) Depending on activities involved, certain experiences may require a business license.</p>
        <a href="#">Learn more</a>

        <h3>Can I host with someone else?</h3>
        <p>(Please change, this content from AirBNB) Some blah blah text</p>

        <h2>Want to join us?</h2>
        <p>You can share your skill, knowledge and experience to people around the world</p>
        <button-colorful @click.native="handleStart">
          Apply to Become a Host
        </button-colorful>
      </el-col>
    </el-row>

    <el-row class="bh-experiences">
      <el-col>
        <div class="title">Explore our experiences</div>
        <el-row :gutter="10" justify="space-around">
          <el-col v-for="n in 6" :key="n" :md="4" :sm="8" :xs="12">
            <img src="http://via.placeholder.com/200x150">
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="bh-footer">
      <el-col :md="3" :offset="3">
        GOAROUND
      </el-col>
      <el-col :md="3">
        <div class="title">GoAround</div>
        <div>About us</div>
        <div>Career</div>
        <div>Policies</div>
      </el-col>
      <el-col :md="3">
        <div class="title">Guests</div>
        <div>Travelers Support</div>
        <div>Trust &amp; Safety</div>
        <div>Cancellation</div>
      </el-col>
      <el-col :md="3">
        <div class="title">Hosts</div>
        <div>Hosts Support</div>
        <div>Why Host?</div>
        <div>Host Policies</div>
      </el-col>
      <el-col :md="3">
        <div class="title">Support</div>
        <div>Help Center</div>
        <div>Contact Us</div>
        <div>Sitemap</div>
      </el-col>
      <el-col :md="3">
        <div>Terms</div>
        <div>Privacy</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ButtonColorful from '@/ui-kit/buttons/ButtonColorful';

  export default {
    components: {
      ButtonColorful,
    },
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

