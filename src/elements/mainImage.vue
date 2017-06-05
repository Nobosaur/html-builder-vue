<template>
    <div>
        <table cellpadding="0" cellspacing="0" width="700" align="center">
            <tr>
                <td>
                    <table :id="'content-element-' + elementId" border="0" width="700" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" style="font-family: 'Arial', sans-serif;">
                        <tr>
                            <td align="center">
                                <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://' + selectedLocale + '.calzedonia.com/' + imageUrl +'?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName">
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
        <div class="columns">
            <div class="main-image-input-field-wrapper column is-12 center">
                <div class="image-url-holder column is-6 center">
                    <p class="menu-label">
                       Please enter relative path to landing page:
                    </p>
                    http://{{ selectedLocale }}.calzedonia.com/<input class="input is-primary" v-model="imageUrl"></input>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Header',
  props: ['elementId', 'selectedLocale', 'utmCampaignName'],
  data () {
    return {
      marketingCloudValue: '3',
      imageName: 'en-CLZ-NL-NewArrivals21-01.jpg',
      imageUrl: ''
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
    .center {
        margin: 0 auto;
    }
</style>
