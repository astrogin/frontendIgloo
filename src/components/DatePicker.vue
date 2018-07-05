<template>
  <div>
    <el-row :gutter="60">
      <el-col :span="12">
        <el-row>
          <el-col :span="12" class="datepicker-col-left">
            <font-awesome-icon size="lg" icon="arrow-left" />
          </el-col>
          <el-col :span="12" class="datepicker-col-right">Month 2018</el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="12" class="datepicker-col-left">Month 2018</el-col>
          <el-col :span="12" class="datepicker-col-right">
            <font-awesome-icon size="lg" icon="arrow-right" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="60">
      <el-col :span="12">
        <date-picker-month
          :array="currentMonthArray"
          :week-titles="weekTitles"/>
      </el-col>
      <el-col :span="12">
        <date-picker-month :array="nextMonthArray" :week-titles="weekTitles"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {getDaysInMonth, getNextMonth} from '@/helpers/dates.js';
  import DatePickerMonth from './DatePickerMonth.vue';

  export default {
    components: {
      DatePickerMonth,
    },
    data() {
      return {
        weekTitles: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        currentDate: new Date(),
        nextMonthDate: getNextMonth(new Date()),
      };
    },
    computed: {
      currentMonthArray() {
        return this.handleMonthArray(this.currentDate);
      },
      nextMonthArray() {
        return this.handleMonthArray(this.nextMonthDate);
      },
    },
    created() {

    },
    methods: {
      handleMonthArray(date) {
        const d = new Date(date);
        const m = d.getMonth();
        const y = d.getFullYear();
        const month = getDaysInMonth(m, y);
        const day = new Date(month[0]).getDay();

        // Add empty elements if element pos don't equal week day
        if (day !== 0) {
          for (let i = 0; i < day; i++) {
            month.unshift('');
          }
        }

        return month;
      },
    },
  };
</script>
