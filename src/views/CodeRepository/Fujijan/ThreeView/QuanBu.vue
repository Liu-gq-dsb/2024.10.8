<template>
  <div>
    <el-form-item label="">
      <el-switch v-model="form.delivery" />←创建代码仓库
    </el-form-item>
  </div>
  <hr />
  <div class="cc"></div>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="所属项目*">
      <el-select v-model="form.region" placeholder="选择你的项目">
        <el-option label="项目 1" value="项目1" />
        <el-option label="项目 2" value="项目2" />
      </el-select>
    </el-form-item>

    <el-form-item label="Resources">
      <el-radio-group v-model="form.resource">
        <el-radio value="Sponsor">Sponsor</el-radio>
        <el-radio value="Venue">Venue</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="仓库描述">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox value="生成README文件" name="type">
            生成README文件
          </el-checkbox>
          <el-checkbox value="添加 .gitignore文件" name="type">
            添加 .gitignore文件
          </el-checkbox>
          <el-checkbox value="Offline activities" name="type">
            添加分支模型(创建仓库后根据所选模型创建分支)
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">完成创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>
<style>
.cc {
  height: 30px;
}
</style>
