<template>
    <div>
        <table :id="'content-element-' + elementId" cellpadding="0" cellspacing="0" width="700" align="center">
            <tr>
                <td>
                    <table cellpadding="0" cellspacing="0" width="700" align="center">
                        <tr>
                            <td>
                                <table width="100%">
                                    <!-- COPY -->
                                    <tr>
                                        <td align="center" style="width:60px;" width="60">
                                            &nbsp;
                                        </td>
                                        <td align="center">
                                            <p :style="'line-height:' + lineHeight + 'px; width:100%; text-align:center; font-family: Trebuchet MS, Helvetica, sans-serif; font-size:' + fontSize + 'px; color:#000000; letter-spacing:1px; margin:0;' + addBoldStyle + addUppercaseStyle">
                                            {{ textFieldInHeader }}
                                            </p>
                                        </td>
                                        <td align="center" style="width:60px;" width="60">
                                            &nbsp;
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div class="columns">
            <div class="main-image-input-field-wrapper column is-12 center">
                <div class="image-number-holder column is-6">
                    <p class="menu-label">
                        Font size:
                    </p>
                    <input class="input is-primary" v-model="fontSize"></input>
                </div>
                <div class="image-name-holder column is-6">
                    <p class="menu-label">
                        Enter text:
                    </p>
                    <input class="input is-primary" v-model="textFieldInHeader"></input>
                </div>
                <div class="block">
                    <a class="button is-primary" @click="boldText">Bold</a>
                </div>
                <div class="block">
                    <a class="button is-primary" @click="uppercaseText">Uppercase</a>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'MainHeadline',
  props: ['elementId'],
  data () {
    return {
      fontSize: '22',
      lineHeight: this.fontSize + 10,
      textFieldInHeader: 'Lorem ipsum dolor sit amet',
      textIsBold: false,
      addBoldStyle: '',
      textIsUppercase: false,
      addUppercaseStyle: ''
    }
  },
  methods: {
    boldText () {
      if (this.textIsBold === false) {
        this.textIsBold = true
        this.addBoldStyle = 'font-weight: bold;'
      } else {
        this.textIsBold = false
        this.addBoldStyle = ''
      }
    },
    uppercaseText () {
      if (this.textIsUppercase === false) {
        this.textIsUppercase = true
        this.addUppercaseStyle = 'text-transform: uppercase;'
      } else {
        this.textIsUppercase = false
        this.addUppercaseStyle = ''
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .image-number-holder {
        display: inline-block;
        float: left;
    }
    .image-name-holder {
        display: inline-block;
        float: right;
    }
</style>
