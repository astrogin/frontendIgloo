<template>
  <div>
    <el-row :gutter="60">
      <el-col :span="12">
        <el-row>
          <el-col :span="6" class="datepicker-col-left datepicker-text-left">
            <font-awesome-icon
              class="pointer"
              size="lg"
              icon="arrow-left"
              @click="handleLeftArrow"/>
          </el-col>
          <el-col
            :span="18"
            class="datepicker-col-right datepicker-text-right text-bold">
            {{getMonthName(currentDate.getMonth())}}
            &nbsp;
            {{currentDate.getFullYear()}}
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col
            :span="18"
            class="datepicker-col-left datepicker-text-left text-bold">
            {{getMonthName(nextMonthDate.getMonth())}}
            &nbsp;
            {{nextMonthDate.getFullYear()}}
          </el-col>
          <el-col :span="6" class="datepicker-col-right datepicker-text-right">
            <font-awesome-icon
              class="pointer"
              size="lg"
              icon="arrow-right"
              @click="handleRightArrow"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="60">
      <el-col :span="12">
        <date-picker-month
          :array="currentMonthArray"
          :selected-days="selectedDates"
          :week-titles="weekTitles"
          :uniq-key="currentDate.getMonth() + '' + currentDate.getFullYear()"/>
      </el-col>
      <el-col :span="12">
        <date-picker-month
          :array="nextMonthArray"
          :selected-days="selectedDates"
          :week-titles="weekTitles"
          :uniq-key="nextMonthDate.getMonth()+''+ nextMonthDate.getFullYear()"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {
    getDaysInMonth,
    getNextMonth,
    getPrevMonth,
    getMonthName,
  } from '@/helpers/dates.js';
  import DatePickerMonth from './DatePickerMonth.vue';

  export default {
    components: {
      DatePickerMonth,
    },
    data() {
      return {
        weekTitles: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        monthTitles: [
          'January', 'February', 'March', 'April', 'May', 'June', 'July',
          'August', 'September', 'October', 'November', 'December',
        ],
        currentDate: new Date(),
        nextMonthDate: getNextMonth(new Date()),
        selectedDates: [],
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
    methods: {
      getMonthName(month) {
        return getMonthName(month, this.monthTitles);
      },
      handleMonthArray(date) {
        const d = new Date(date);
        const month = getDaysInMonth(d.getMonth(), d.getFullYear());
        const day = new Date(month[0]).getDay();

        // Add empty elements if element pos don't equal week day
        if (day !== 0) {
          for (let i = 0; i < day; i++) {
            month.unshift('');
          }
        }

        return month;
      },
      handleLeftArrow() {
        this.currentDate = getPrevMonth(this.currentDate);
        this.nextMonthDate = getPrevMonth(this.nextMonthDate);
      },
      handleRightArrow() {
        this.currentDate = getNextMonth(this.currentDate);
        this.nextMonthDate = getNextMonth(this.nextMonthDate);
      },
    },
  };
</script>
