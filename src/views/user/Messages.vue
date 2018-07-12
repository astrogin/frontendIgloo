<template>
  <el-row type="flex" justify="center">
    <el-col :span="7">
      <el-row>
        <el-col class="chat-list-title">
          Recent Accepted experience
        </el-col>
      </el-row>
      <el-row>
        <el-col class="chat-list">
          <el-row
            v-for="n in 20"
            :key="n + 'chatitem'"
            :class="{'active': n === 5}"
            class="chat-list-item clearfix">
            <img src="http://via.placeholder.com/60" class="chat-list-item-photo">
            <div class="chat-list-item-body clearfix">
              <div class="chat-list-item-title">Jessica Liu</div>
              <div class="chat-list-item-message">
                Lorem ipsum dolor sit amet, adi ...
              </div>
              <div class="chat-list-item-date">2 hr ago</div>
            </div>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="14">
      <el-row class="h100">
        <el-col class="chat clearfix">
          <div class="chat-header clearfix">
            <img class="chat-image"  src="http://via.placeholder.com/100">
            <div>
              <span class="chat-title">Jessica Liu</span>
              <span class="right purple-check">
                <font-awesome-icon icon="check"/>
                Verified User
              </span>
            </div>
            <div>
              <span class="chat-subtitle">Bangkok, Thailand</span>
              <span class="right chat-text">Language</span>
            </div>
            <div>
              <span class="chat-text">Joined in June 2014</span>
              <span class="right chat-subtitle">English, Thai</span>
            </div>
          </div>

          <div class="chat-textinput">
            <input type="text" placeholder="Type your message here">
            <button>Send</button>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
