<template>
  <table class="datepicker">
    <tr>
      <th
        v-for="(day, index) in weekTitles"
        :key="day + index"
        class="datepicker-title">
        {{day}}
      </th>
    </tr>
    <tr v-for="i in 5" :key="'week' + i">
      <th v-for="j in 7" :key="'day' + j + 'ofweek' + i">
        <span
          :ref="array[7*(i-1)+j-1]"
          class="pointer"
          @click="handleMonthClick(array, 7*(i-1)+j-1)">
          {{getDayOfMonth(array, 7*(i-1)+j-1)}}
        </span>
      </th>
    </tr>
  </table>
</template>

<script>
  export default {
    props: {
      array: {type: Array, required: true},
      weekTitles: {type: Array, required: true},
      selectedDays: {type: Array, required: true},
    },
    data() {
      return {
        selectedDates: [],
      };
    },
    methods: {
      getDayOfMonth(array, index) {
        return array[index] === undefined ||
        array[index] === '' ? '' : array[index].getDate();
      },
      handleMonthClick(array, index) {
        this.$emit('day-click', array[index]);

        const el = array[index].toString();

        const isSelected = this.selectedDates.indexOf(el) !== -1;

        console.log(this.$refs[el][0].classList.add(''));

        if (isSelected) {
          
        }
      },
    },
  };
</script>

