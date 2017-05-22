<template>
    <div>
        Element1<br>
        Index: {{ elementId }}<br>
        Campaign name: {{ utmCampaignName }}
    </div>
    
</template>

<script>
export default {
  name: 'element1',
  props: ['elementId', 'utmCampaignName']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
