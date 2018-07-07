<template>
  <el-row class="searchbar" type="flex" align="middle">
    <el-col :span="6" class="searchbar-input">
      <el-input
        v-model="searchInput"
        placeholder="Search experiences">
        <font-awesome-icon
          slot="prefix"
          icon="search"
          class="el-input__icon text-purple"/>
      </el-input>
    </el-col>

    <el-col :span="18">
      <base-filter width="620" text="Date &amp; Time">
        <date-picker/>
        <el-row>
          <el-col><div class="searchbar-date-title">Time</div></el-col>
        </el-row>
        <el-row class="searchbar-timeline">
          <el-col :span="16">
            <el-slider
              v-model="timeRange"
              :show-tooltip="false"
              :step="1"
              :min="-12"
              :max="12"
              range/>
          </el-col>
          <el-col :span="8" class="searchbar-time">
            {{firstTime}} - {{secondTime}}
            <div class="searchbar-time-hours">{{hours}} hours</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="searchbar-date-right">
            <purple-text-button>Clear</purple-text-button>
            <colorful-button>Apply</colorful-button>
          </el-col>
        </el-row>
      </base-filter>
      <base-filter width="100" text="Guests">
        <div>hello</div>
      </base-filter>
      <base-filter width="100" text="Price">
        <div>hello</div>
      </base-filter>
      <base-filter width="100" text="Category">
        <div>hello</div>
      </base-filter>
      <base-filter width="100" text="Instant Booking">
        <div>hello</div>
      </base-filter>
      <base-filter :arrow="false" width="100" text="More Filters">
        <div>hello</div>
      </base-filter>
    </el-col>
  </el-row>
</template>

<script>
  import BaseFilter from './BaseFilter';
  import DatePicker from '@/components/DatePicker.vue';
  import ColorfulButton from '@/components/ColorfulButton.vue';
  import PurpleTextButton from '@/components/PurpleTextButton.vue';

  export default {
    components: {
      BaseFilter,
      DatePicker,
      ColorfulButton,
      PurpleTextButton,
    },
    data() {
      return {
        nowDate: new Date().setHours(-24, 0, 0, 0),
        searchInput: '',
        date: [],
        timeRange: [0, 6],
      };
    },
    computed: {
      firstTime() {
        let time = this.timeRange[0];
        let postfix = 'AM';

        if (time === -12) {
          time = 12;
          postfix = 'AM';
        } else if (time < 0) {
          time += 12;
          postfix = 'PM';
        } else if (time === 0) {
          time = 12;
          postfix = 'PM';
        }

        return time + ' ' + postfix;
      },

      secondTime() {
        if (this.timeRange[1] > 12) {
          return (this.timeRange[1] - 12) + ' PM';
        } else {
          return this.timeRange[1] + ' AM';
        }
      },

      hours() {
        return this.timeRange[1] - this.timeRange[0];
      },
    },
  };
</script>
