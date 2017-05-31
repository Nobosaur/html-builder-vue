<template>
  <div class="home-page">
    <div class="columns">
        <div class="column is-one-quarter">
            <aside class="menu">
                <p class="menu-label">Select locale:</p>
                <select v-model="selectedLocale" >
                    <option value="it">Italy</option>
                    <option value="fr">France</option>
                    <option value="lu">Luxembourg</option>
                    <option value="de">Germany</option>
                </select>
                <div class="utm-input-field-wrapper column is-half center">
                    <p class="menu-label">
                        Enter UTM campaign name:
                    </p>
                    <input class="input is-primary is-6" v-model="utmCampaignName"></input>
                </div>
                <p class="menu-label">
                    Add new element
                </p>
                <p class="label">Select element:</p>
                <select v-model="selectedElement">
                    <option value="element-1">First element</option>
                    <option value="main-head-element">Header</option>
                    <option value="main-image-element">Main image</option>
                    <option value="main-headline">Main headline</option>
                </select>
                <div class="block">
                    <a class="button is-primary" @click="addElement">Add</a>
                </div>
                
                <div class="block">
                    <a class="button is-primary" @click="createHtmlFile()">Export HTML</a>
                </div>
            </aside>
        </div>
        <div class="column">
            <h1 class="title">Mian content</h1>
            <div class="elements-wrapper center" v-for="(element, index) in elementsInList" >
                <article class="message is-dark">
                    <div class="message-header">
                        <h3 class="element-name">{{ element.selected }}
                            <div class="icons">
                                <a class="icon" @click="moveUp(index)">
                                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                </a>
                                <a class="icon" @click="moveDown(index)">
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                </a>
                                <a class="delete" @click="removeElement(index)"></a>
                            </div>
                        </h3>
                    </div>
                    <div :is="element.selected" :elementId="index" :utmCampaignName="utmCampaignName" :selectedLocale="selectedLocale" class="message-body"></div>
                </article>
            </div>
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
      utmCampaignName: '2016-02-05-test',
      selectedLocale: 'it'
      // isVisible: false
    }
  },
  methods: {
    addElement () {
      this.elementsInList.push({selected: this.selectedElement})
    },
    removeElement (index) {
      this.elementsInList.splice(index, 1)
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
    },
    download (filename, text) {
      var pom = document.createElement('a')
      let headString = `
      <!DOCTYPE 
        html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head><META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Calzedonia</title>
            <style>
                td {
                    vertical-align:top;
                    margin: 0;
                    padding: 0;
                }
                table {
                    border-collapse: collapse;
                }
            </style>
        </head>
        <body>
            <table cellpadding="0" cellspacing="0" width="700" align="center">
      `
      let footerString = `
            </table>
        </body>
        </html>
      `
      pom.setAttribute('href', 'data:text/text;charset=utf-8,' + headString + encodeURIComponent(text) + footerString)
      pom.setAttribute('download', filename)
      if (document.createEvent) {
        var event = document.createEvent('MouseEvents')
        event.initEvent('click', true, true)
        pom.dispatchEvent(event)
      } else {
        pom.click()
      }
    },
    createHtmlFile () {
      var elementsToExport = []
      for (let i = 0; i < this.elementsInList.length; i++) {
        let getElement = document.getElementById('content-element-' + i).innerHTML
        elementsToExport.push(getElement)
      }
      elementsToExport.toString()
      this.download('test.txt', elementsToExport)
    }
  },
  components: {
    'element-1': require('@/elements/element1.vue'),
    'main-head-element': require('@/elements/mainHeadElement.vue'),
    'main-image-element': require('@/elements/mainImage.vue'),
    'main-headline': require('@/elements/mainHeadline.vue'),
    'element-3': require('@/elements/element3.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .block {
        padding: 20px 0 0 0;    
    }
    article {
        padding: 20px 0;
    }
    .center {
        margin: 0 auto;
    }
    .elements-wrapper {
        max-width: 700px;
        width: 100%;
    }
    .element-name {
        text-align: left;
        font-size: 16px;
    }
    .icons {
        float: right;
        display: inline-block;
    }
</style>
