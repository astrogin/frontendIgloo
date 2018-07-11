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
      <th
        v-for="j in 7" :key="'day' + j + 'ofweek' + i + uniqKey"
        :ref="7*(i-1)+j-1"
        :class="{'datepicker-selected': isSelected(7*(i-1)+j-1)}"
        class="pointer"
        @click="handleMonthClick(array, 7*(i-1)+j-1)">
        <span>
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
      uniqKey: {type: String, required: true},
    },
    methods: {
      getDayOfMonth(array, index) {
        return array[index] === undefined ||
        array[index] === '' ? '' : array[index].getDate();
      },
      handleMonthClick(array, index) {
        const el = array[index].toString();

        if (el === '') {
          return;
        }

        const isSelected = this.selectedDays.indexOf(el) !== -1;

        this.$refs[index][0].classList.toggle('datepicker-selected');

        if (isSelected) {
          this.selectedDays.splice(el, 1);
        } else {
          this.selectedDays.push(el);
        }
      },
      isSelected(index) {
        if (this.array[index] !== undefined) {
          const el = this.array[index].toString();
          return this.selectedDays.indexOf(el) !== -1;
        }

        return false;
      },
    },
  };
</script>

