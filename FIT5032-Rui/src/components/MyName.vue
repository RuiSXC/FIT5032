<script setup>
/* receive the data from parent component(App.vue) */
defineProps({ myName: {
    type: Object,
    required: true,
    default(rawProps){
      return {name:'rui',id:"000000"}
    }}}) 
</script>
<template>
  <!-- define the template to display myInfo -->
  <div class="myInfo">
    <span class="myName">{{ myName.name }}</span>
    <span class="myId">{{ myName.id }}</span>
  </div>
 </template>
<style scoped>
.myInfo{
  position: absolute;
  width: 200px;
  height: 100px;
  top:100px;
  border: 1px dashed black;
  text-align: center;
}
.myName {
  font-weight: 500;
  font-size: 2rem;
  display: inline-block;
  color: red;
}
.myId{
  font-size:1.5rem ;
  color: purple;
  margin: 10px;
}
</style>
