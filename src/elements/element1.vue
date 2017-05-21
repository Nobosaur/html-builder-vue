<template>
    <div>
        Element1<br>
        Index: {{ elementId }}
    </div>
    
</template>

<script>
export default {
  name: 'element1',
  props: ['elementId']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
