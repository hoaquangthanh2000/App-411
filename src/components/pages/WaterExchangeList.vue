<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { useStore } from "../store/index";
// import {ref } from 'vue'
export interface persons{
    name:string
}
const data = useStore();
const today = new Date()
console.log(data.person.id)
</script>
<template>
  <div class="container content-main">
    <div class="content-todo">
      <div class="form-input">
        <input
            v-model="data.person.name" 
            class="todo-input text-slate-500"
            placeholder="Nhap ten may vao"
            type="text"
        />
        <button class="btn-add" @click="data.addPerson()">Add person</button>
      </div>
      <table class="table-todo" :border="1">
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Ngày đổi nước</th>
          <th>Sửa</th>
          <th>Xóa</th>
        </tr>
        <tr v-for="(person,index) in data.listPerson" :key="index">
            <th>{{index}}</th>
            <th>{{person.name}}</th>
            <th>{{` ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} ` }}</th>
            <th class="btn-icon" ><i class="fa-regular fa-pen-to-square"></i></th>
            <th class="btn-icon" @click="data.deletePerson(person)"><i class="fa-solid fa-trash"></i></th>
          </tr>
      </table>
    </div>
  </div>
</template>

<style>
.btn-icon:hover{
  cursor: pointer;
  opacity: 0.7;
}
.btn-add{
  background-color: rgb(114, 202, 27);
  border-radius: 4px;
  height: 35px;
  min-width: 100px;
  line-height: 30px;
  font-size: 18px;
  cursor: pointer;
  border: none;
}
.form-input {
  padding: 15px;
}
.todo-input {
  height: 30px;
  width: 300px;
  font-size: 20px;
  font-weight: 400;
}
.table-todo {
  min-width: 700px;
  height: 30px;
  margin: auto;
}
.table-todo tr th {
  font-size: 20px;
}
.content-main {
  height: 100%;
}
.content-todo {
  padding-bottom: 100px;
}
</style>
