<template>
    <div>
        <table cellpadding="0" cellspacing="0" width="700" align="center">
            <tr>
                <td>
                    <table :id="'content-element-' + elementId" border="0" width="700" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" style="font-family: 'Arial', sans-serif;">
                        <tr>
                            <td align="center">
                                <a href="http://click.email-calzedonia.com/?qs=0e8400c3277399dd286a3f22c8288294117deb01bf776c03e4333ef6154790c74b6e71009faa51985bc7533411395243b353d331dd0ff2fb">
                                    <img :src="'http://image.email-calzedonia.com/lib/fe9413727d64007f71/m/' + marketingCloudValue + '/' + imageName"
                                     width="700" border="0" style="margin:0px;padding:0px;display:block;" alt="Calzedonia">
                                </a>
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
                        Enter Marketing cloud number:
                    </p>
                    <input class="input is-primary" v-model="marketingCloudValue"></input>
                </div>
                <div class="image-name-holder column is-6">
                    <p class="menu-label">
                        Enter image name:
                    </p>
                    <input class="input is-primary" v-model="imageName"></input>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Header',
  props: ['elementId'],
  data () {
    return {
      marketingCloudValue: '3',
      imageName: 'en-CLZ-NL-NewArrivals21-01.jpg'
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
