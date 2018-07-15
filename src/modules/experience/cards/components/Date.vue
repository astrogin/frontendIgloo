<template>
  <div class="date-container">
    <p class="month">May</p>
    <div class="date-circle"><p>23</p></div>
    <div class="date-circle"><p>24</p></div>
    <div class="date-circle active"><p>25</p></div>
    <div class="date-circle active"><p>26</p>
      <!--<i class="exp-purple">&#x1f5f2;</i>--></div>
    <div class="date-circle"><p>27</p></div>
  </div>
</template>
<style lang="scss" scoped>
  .date-container {
    .month {
      color: #bdbcbd;
      font-size: 12px;
      display: inline-block;
    }
    .date-circle {
      display: inline-block;
      margin-left: 4px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #be9fd4;
      font-size: 9.5px;
      color: #ffffff;
      text-align: center;
      p {
        margin: 24% 0;
        display: inline-block;
      }
    }
    .active {
      background-color: #7929a6;
    }
  }
</style>
