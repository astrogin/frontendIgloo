<template>
  <el-row :gutter="30" class="ep">
    <el-col :span="6">
      <span class="ep-title">Profile photo</span>
      <el-row>
        <el-col>
          <div class="ep-image">
            <img src="http://via.placeholder.com/200">
          </div>
        </el-col>
      </el-row>
      <el-row class="ep-row">
        <el-col><button-purple>Upload file</button-purple></el-col>
      </el-row>
      <el-row>
        <el-col>
          <p>Please change the word, I copied from Airbnb : ..............</p>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="18">
      <el-row>
        <el-col>
          <span class="ep-title">Edit profile</span>
          &nbsp;
          <span class="ep-subtitle">( All info is required )</span>
          <span class="right">
            <router-link :to="{name: 'user.profile.view'}">
              <button-purple>View profile</button-purple>
            </router-link>
          </span>
        </el-col>
      </el-row>
      <el-row class="ep-row">
        <el-col :span="6">
          <span class="ep-input-title">First name</span>
        </el-col>
        <el-col :span="18">
          <el-input v-model="form.firstname" placeholder="First name"/>
        </el-col>
      </el-row>
      <el-row class="ep-row">
        <el-col :span="6">
          <span class="ep-input-title">Last name</span>
        </el-col>
        <el-col :span="18">
          <el-input v-model="form.lastname" placeholder="Last name"/>
          <p>Your public profile only shows your first name. When you request a booking, your host will see your first and last name.</p>
        </el-col>
      </el-row>
      <el-row class="ep-row">
        <el-col :span="6">
          <span class="ep-input-title">Gender</span>
        </el-col>
        <el-col :span="18">
          <el-radio-group v-model="form.gender">
            <el-radio label="Male">Male</el-radio>
            <el-radio label="Female">Female</el-radio>
            <el-radio label="Other">Other</el-radio>
          </el-radio-group>
          <p>We use this data for analysis and never share it with other users.</p>
        </el-col>
      </el-row>
      <el-row class="ep-row">
        <el-col :span="6">
          <span class="ep-input-title">Birthday</span>
        </el-col>
        <el-col :span="18">
          <el-date-picker
            v-model="form.birthday"
            type="date"
            placeholder="Pick a day"/>
          <p>We would never share it with other users too.</p>
        </el-col>
      </el-row>
      <el-row class="ep-row">
        <el-col :span="6">
          <span class="ep-input-title">Email address</span>
        </el-col>
        <el-col :span="18">
          <el-input v-model="form.email" placeholder="Email address"/>
        </el-col>
      </el-row>
      <el-row class="ep-row">
        <el-col :span="6">
          <span class="ep-input-title">Phone number</span>
        </el-col>
        <el-col :span="18">
          <el-input v-model="form.phone" placeholder="Phone number"/>
          <p>All contact info are only shared once you have a confirmed booking with another user. This is how we can all get in touch.</p>
        </el-col>
      </el-row>
      <el-row class="ep-row">
        <el-col :span="6">
          <span class="ep-input-title">Identification</span>
        </el-col>
        <el-col :span="18">
          <el-radio-group v-model="form.identification">
            <el-radio label="Passport">Passport</el-radio>
            <el-radio label="Visa">Visa</el-radio>
            <el-radio label="National identity card">National identity card</el-radio>
            <el-radio label="Driver's license">Driver's license</el-radio>
          </el-radio-group>
          <el-row>
            <el-col>
              <el-upload :limit="1" action="#">
                <el-button type="primary">Upload file</el-button>
                <div slot="tip" class="el-upload__tip">Learn more</div>
              </el-upload>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="ep-row">
        <el-col :span="6">
          <span class="ep-input-title">Languages</span>
        </el-col>
        <el-col :span="18">
          <el-select v-model="form.languages" multiple placeholder="Language">
            <el-option label="English" value="English"/>
            <el-option label="Thai" value="Thai"/>
            <el-option label="Russian" value="Russian"/>
            <el-option label="German" value="German"/>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="ep-row">
        <el-col :span="6">
          <span class="ep-input-title">Where you live</span>
        </el-col>
        <el-col :span="18">
          <el-input v-model="form.live" placeholder="Type where you live"/>
        </el-col>
      </el-row>
      <el-row class="ep-row">
        <el-col :span="6">
          <span class="ep-input-title">Tell the world about yourself</span>
        </el-col>
        <el-col :span="18">
          <el-input
            v-model="form.about"
            :rows="10"
            type="textarea"
            placeholder="Please type to let them know"/>
          <p>We want to create the experience foe everyone.</p>
          <p>Best way is let other people get to know you first.</p>
          <p>Share your favorite travel destinations, books, movies, shows, music, food.</p>
          <p>Or your style of traveling or hosting?</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <button-cyan class="right">Save</button-cyan>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import ButtonCyan from '@/ui-kit/buttons/ButtonCyan.vue';
  import ButtonPurple from '@/ui-kit/buttons/ButtonPurple';

  import ConnectFacebook from '@/components/cards/login/ConnectFacebook';
  import ConnectGoogle from '@/components/cards/login/ConnectGoogle';

  export default {
    components: {
      ConnectFacebook,
      ConnectGoogle,
      ButtonCyan,
      ButtonPurple,
    },
    data() {
      return {
        form: {
          firstname: '',
          lastname: '',
          gender: 'Male',
          birthday: '',
          email: '',
          phone: '',
          identification: 'Passport',
          languages: [],
          live: '',
          about: '',
          social: {
            google: false,
            facebook: false,
          },
        },
      };
    },
  };
</script>

