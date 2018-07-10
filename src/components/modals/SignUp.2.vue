<template>
  <div>
    <el-row class="dialog-title-row">
      <el-col :span="12"><div class="dialog-title-left">Sign Up</div></el-col>
      <el-col :span="12">
        <div class="dialog-title-small">
          Sign up with
          <a href="#" class="dialog-secondary-text">Facebook</a>
          or
          <a href="#" class="dialog-secondary-text">Google</a>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-form :model="form">
          <el-form-item required>
            <el-input
              v-model="form.email"
              type="email"
              placeholder="Email address">
              <font-awesome-icon
                slot="prefix"
                size="lg"
                icon="envelope"
                class="el-input__icon"/>
            </el-input>
          </el-form-item>
          <el-form-item required>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input
                  v-model="form.firstname"
                  placeholder="First name">
                  <font-awesome-icon
                    slot="prefix"
                    size="lg"
                    icon="user"
                    class="el-input__icon"/>
                </el-input>
              </el-col>
              <el-col :span="12">
                <el-input v-model="form.lastname" placeholder="Last name"/>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item required>
            <el-input
              v-model="form.password" type="password" placeholder="Password">
              <font-awesome-icon
                slot="prefix"
                size="lg"
                icon="lock"
                class="el-input__icon"/>
            </el-input>
          </el-form-item>
          <el-row class="dialog-form-information">
            <el-col>
              <div class="dialog-form-information-title">Birthday</div>
              <div class="dialog-form-information-subtitle">
                To sign up, you mus be 18 or older.
                Other people won't see your birthday
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-select v-model="form.month" placeholder="Month" class="w100">
                <el-option
                  v-for="item in months"
                  :key="item"
                  :value="item"/>
              </el-select>
            </el-col>
            <el-col :span="6">
              <el-select v-model="form.day" placeholder="Day">
                <el-option
                  v-for="item in days"
                  :key="item"
                  :value="item"/>
              </el-select>
            </el-col>
            <el-col :span="6">
              <el-select v-model="form.year" placeholder="Year">
                <el-option
                  v-for="item in years"
                  :key="item"
                  :value="item"/>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item>
              <el-checkbox v-model="form.promote">
                I would like to receive updates and promotions from GoAround
              </el-checkbox>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item>
              <div class="dialog-form-right">
                <button-cyan class="dialog-form-button" @click="handleSubmit">
                  Sign up
                </button-cyan>
              </div>
            </el-form-item>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ButtonCyan from '@/ui-kit/buttons/ButtonCyan';

  export default {
    components: {
      ButtonCyan,
    },
    data() {
      return {
        form: {
          email: '',
          firstname: '',
          lastname: '',
          password: '',
          month: '',
          day: '',
          year: '',
          promote: true,
        },
        months: [
          'December',
          'September',
          'October',
        ],
        days: [
          '1', '2', '3', '4', '5', '6', '7',
        ],
        years: [
          '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997',
        ],
      };
    },
    methods: {
      handleSubmit() {

      },
    },
  };
</script>
