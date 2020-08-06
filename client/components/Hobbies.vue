<template>
  <div>
    <div>Hobbies Component</div>
    <div>My Hobbies</div>
    <ul>
      <li v-for="hobby in hobbies" :key="hobby._id">{{hobby.hobby}}</li>
    </ul>
  </div>
</template>

<script>
import { Hobbies } from '/imports/api/hobbies'
export default {
  meteor: {
    hobbies() {
      return Hobbies.find({}).fetch()
    }
  }
}
</script>

<style>

</style>