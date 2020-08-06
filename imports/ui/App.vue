<template>
  <div>
    <h1>Meteor and Vue</h1>
    <router-link to="/about">About</router-link>
    <router-link to="/hobbies">Hobbies</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>