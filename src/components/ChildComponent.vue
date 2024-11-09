<template>
  <div>
    <h1>{{ name }}!</h1>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    // Declare the 'name' prop that will be passed down from the parent
    name: {
      type: String,  // Ensure the data passed is of type String
    }
  }
};
</script>

<style scoped>
/* Some basic styling */
h2 {
  color: #ff6347;
}
</style>