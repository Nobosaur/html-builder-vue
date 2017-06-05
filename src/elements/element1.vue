<template>
    <div>
        Element1<br>
        Index: {{ elementId }}<br>
        Campaign name: {{ utmCampaignName }}
        Selected locale: {{ selectedLocale }}
        Product: {{product}}
    </div>
    
</template>

<script>
export default {
  name: 'element1',
  props: ['elementId', 'utmCampaignName', 'selectedLocale'],
  test: 'bla',
  product: [],
  errors: []
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
