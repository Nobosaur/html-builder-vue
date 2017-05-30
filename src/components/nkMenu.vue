<template>
    <div class="column is-one-quarter">
            <aside class="menu">
                <p class="menu-label">
                    Add new element
                </p>
                <p class="label">Select element:</p>
                <select v-model="selectedElement">
                    <option value="element-1">First element</option>
                    <option value="element-2">Second element</option>
                    <option value="element-3">Third element</option>
                </select>
                <div class="block">
                    <a class="button is-primary" @click="addElement">Add</a>
                </div>
                <div class="utm-input-field-wrapper column is-half center">
                    <p class="menu-label">
                        Enter UTM campaign name:
                    </p>
                    <input class="input is-primary is-6" v-model="utmCampaignName"></input>
                </div>
                <div class="block">
                    <a class="button is-primary" @click="createHtmlFile()">Export HTML</a>
                </div>
            </aside>
        </div>
</template>

<script>
export default {
  name: 'nk-menu'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
