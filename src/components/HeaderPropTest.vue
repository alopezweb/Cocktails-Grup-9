<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentName: 'Cocktails'  // Data to be passed as a prop to the child component
    };
  }
};
</script>

<template>
    <div id="props-example">
    <ChildComponent :name="parentName" />
  </div>
  
</template>

<style scoped>
p {
  font-weight: bold;
  color: red;
}
</style>
