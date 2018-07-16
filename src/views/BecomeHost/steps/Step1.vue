<template>
  <div>
    <el-row>
      <el-col>
        <h1>Let's get started</h1>
        <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicibo.</p>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <h1>Overview of process</h1>
        <el-row :gutter="20" type="flex" justify="center" class="bh-step-cards">
          <el-col :span="8">
            <el-card class="bh-step-card">
              <div class="bh-step-card-step">Step 1</div>
              <div class="bh-step-card-header">Learn our expectations</div>
              <div class="bh-step-card-body">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="bh-step-card">
              <div class="bh-step-card-step">Step 2</div>
              <div class="bh-step-card-header">Create your experience</div>
              <div class="bh-step-card-body">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="bh-step-card">
              <div class="bh-step-card-step">Step 3</div>
              <div class="bh-step-card-header">Pass our test</div>
              <div class="bh-step-card-body">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
