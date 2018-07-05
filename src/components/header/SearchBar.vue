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

  export default {
    components: {
      BaseFilter,
      DatePicker,
    },
    data() {
      return {
        nowDate: new Date().setHours(-24, 0, 0, 0),
        searchInput: '',
        date: [],
      };
    },
  };
</script>
