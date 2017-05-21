<template>
  <div class="home-page">
    <div class="columns">
        <div class="column is-one-quarter">
            <aside class="menu">
                <p class="menu-label">
                    Add new element
                </p>
                Select element:<br>
                <select v-model="selectedElement">
                    <option value="element-1">First element</option>
                    <option value="element-2">Second element</option>
                    <option value="element-3">Third element</option>
                </select>
                <div class="block">
                    <a class="button is-primary" @click="addElement">Add</a>
                </div>
            </aside>
        </div>
        <div class="column">
            <h1 class="title">Mian content</h1>
            <!-- <div v-for="(element, index) in elementsInList" :is="element.selected" :elementId="index"></div> -->
            <ul v-for="(element, index) in elementsInList" >
                <li :is="element.selected" :elementId="index"></li>
                <div class="block">
                    <a class="icon" @click="moveUp(index)">
                        <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    </a>
                    <a class="icon" @click="moveDown(index)">
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </a>
                    <a class="delete" @click="isVisible = true"></a>
                    <div class="modal is-active" v-show="isVisible">                       
                        <div class="modal-background"></div>
                        <div class="modal-content">
                            Are you sure that you want delete this element?<br>
                            <a class="button is-danger" @click="removeElement(index)">Yes</a>
                            <a class="button is-success" @click="isVisible = false">No</a>
                        </div>
                        <button class="modal-close" @click="isVisible = false"></button>
                    </div>
                </div>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      selectedElement: 'element-1',
      elementsInList: [],
      isVisible: false
    }
  },
  methods: {
    addElement () {
      this.elementsInList.push({selected: this.selectedElement})
    },
    removeElement (index) {
      this.elementsInList.splice(index, 1)
      this.isVisible = false
    },
    moveDown (index) {
      let from = index
      let to = index + 1
      this.elementsInList.splice(to, 0, this.elementsInList.splice(from, 1)[0])
    },
    moveUp (index) {
      let from = index
      let to = index - 1
      this.elementsInList.splice(to, 0, this.elementsInList.splice(from, 1)[0])
    }
  },
  components: {
    'element-1': require('@/elements/element1.vue'),
    'element-2': require('@/elements/element2.vue'),
    'element-3': require('@/elements/element3.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .block {
        padding: 20px 0 0 0;    
    }
</style>
