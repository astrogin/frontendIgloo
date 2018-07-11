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
      <el-date-picker
        v-model="dates"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"/>
      <!-- <base-filter width="620" text="Date &amp; Time">
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
          <el-col class="searchbar-right">
            <purple-text-button>Clear</purple-text-button>
            <button-cyan>Apply</button-cyan>
          </el-col>
        </el-row>
      </base-filter> -->
      <base-filter width="530" text="Guests">
        <el-row :gutter="10">
          <el-col :span="8">
            <div class="searchbar-guests-title">Adults</div>
            <div class="searchbar-guests-subtitle">Over 12</div>
            <div class="searchbar-input-number">
              <el-input-number v-model="guests.adults" :min="0" />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="searchbar-guests-title">Children</div>
            <div class="searchbar-guests-subtitle">Ages 2 - 12</div>
            <div class="searchbar-input-number">
              <el-input-number v-model="guests.children" :min="0" />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="searchbar-guests-title">Infants</div>
            <div class="searchbar-guests-subtitle">Under 12</div>
            <div class="searchbar-input-number">
              <el-input-number v-model="guests.infants" :min="0" />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="searchbar-right">
            <button-cyan>Apply</button-cyan>
          </el-col>
        </el-row>
      </base-filter>
      <base-filter width="510" text="Price">
        <el-row>
          <el-col class="searchbar-price-title">
            THB {{price[0]}} - {{price[1]}}
          </el-col>
        </el-row>
        <el-row>
          <el-col class="searchbar-price-subtitle">
            The average nighty price is THB 5983
          </el-col>
        </el-row>
        <el-row>
          <el-col class="searchbar-price-input">
            <el-slider
              v-model="price"
              :show-tooltip="false"
              :min="0"
              :max="40000"
              range/>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="searchbar-right">
            <button-cyan>Apply</button-cyan>
          </el-col>
        </el-row>
      </base-filter>
      <base-filter width="455" text="Category">
        <el-checkbox-group
          v-model="categories" class="searchbar-input-checkbox">
          <el-row>
            <el-col :span="12"><el-checkbox label="Travel"/></el-col>
            <el-col :span="12"><el-checkbox label="Eat"/></el-col>
          </el-row>
          <el-row>
            <el-col :span="12"> <el-checkbox label="Nightlife"/></el-col>
            <el-col :span="12"><el-checkbox label="Active"/></el-col>
          </el-row>
          <el-row>
            <el-col :span="12"><el-checkbox label="Relax and beauty"/></el-col>
            <el-col :span="12"><el-checkbox label="Photography"/></el-col>
          </el-row>
        </el-checkbox-group>
        <el-row>
          <el-col class="searchbar-right">
            <button-cyan>Apply</button-cyan>
          </el-col>
        </el-row>
      </base-filter>
      <base-filter width="420" text="Instant Booking">
        <el-row class="searchbar-book">
          <el-col :span="6" class="searchbar-book-switch">
            <el-switch v-model="instantBook" active-color="#7929a6"/>
          </el-col>
          <el-col :span="18">
            <div class="searchbar-book-title">Instant Book</div>
            <div class="searchbar-book-subtitle">
              Listings you can book without waiting for host approval
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="searchbar-right">
            <button-cyan>Apply</button-cyan>
          </el-col>
        </el-row>
      </base-filter>
      <base-filter :arrow="false" width="100" text="More Filters">
        <div>hello</div>
      </base-filter>
    </el-col>
  </el-row>
</template>

<script>
  import ButtonCyan from '@/ui-kit/buttons/ButtonCyan';
  import PurpleTextButton from '@/ui-kit/buttons/ButtonPurpleText';

  import DatePicker from '@/components/DatePicker.vue';
  import BaseFilter from './BaseFilter';

  export default {
    components: {
      BaseFilter,
      DatePicker,
      ButtonCyan,
      PurpleTextButton,
    },
    data() {
      return {
        searchInput: '',
        dates: [],
        timeRange: [0, 6],
        price: [500, 16850],
        categories: ['Travel', 'Relax and beauty'],
        instantBook: false,
        guests: {
          adults: 0,
          children: 0,
          infants: 0,
        },
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
