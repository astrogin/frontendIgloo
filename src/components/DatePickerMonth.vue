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
    },
    methods: {
      getDayOfMonth(array, index) {
        return array[index] === undefined ||
        array[index] === '' ? '' : array[index].getDate();
      },
    },
  };
</script>

