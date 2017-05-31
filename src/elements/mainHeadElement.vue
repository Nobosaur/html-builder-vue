<template>
    <div>
        <table :id="'content-element-' + elementId" cellpadding="0" cellspacing="0" width="700" align="center">
            <tr>
                <td>
                    <table border="0" width="700" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" style="font-family: 'Arial', sans-serif;">
                        <tr>
                            <td align="left">
                                <p style="font-family:'Arial', sans-serif; font-size:11px; color:#666666;">
                                    {{ eyelinerValue }}
                                </p>
                            </td>
                            <td align="right">
                                <p style="font-family:'Arial', sans-serif; font-size:11px; color:#666666;">
                                    <a href="%%view_email_url%%">
                                        <font color="#666666">{{ eyelinerLocale }}</font>
                                    </a>
                                </p>
                            </td>
                        </tr>
                        <tr>
                             <td colspan="2" align="center" valign="middle"><img style="margin:0px;padding:0px;display:block;" src="http://image.email-calzedonia.com/lib/fe9413727d64007f71/m/1/spacer-1x1.png" width="1" height="15" /></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table border="0" width="100%" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" style="font-family: 'Arial', sans-serif;">
                        <tr>
                            <td align="center" valign="middle"><img style="margin:0px;padding:0px;display:block;" src="http://image.email-calzedonia.com/lib/fe9413727d64007f71/m/1/spacer-1x1.png" width="1" height="0" /></td>
                        </tr>
                        <tr>
                            <td align="center">
                                <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName +'&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://' + selectedLocale + '.calzedonia.com/?utm_source=%%jobid%%&utm_medium=email&utm_campaign='+ utmCampaignName">
                                    <img :src="'http://image.email-calzedonia.com/lib/fe9413727d64007f71/m/' + logoUrlLocale" border="0" style="margin:0px;padding:0px;display:block;" alt="Calzedonia">
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" valign="middle"><img style="margin:0px;padding:0px;display:block;" src="http://image.email-calzedonia.com/lib/fe9413727d64007f71/m/1/spacer-1x1.png" width="1" height="30" /></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div class="eyeliner-input-field-wrapper column is-12">
            <p class="menu-label">
                Enter eyeliner:
            </p>
            <input class="input is-primary is-6" v-model="eyelinerValue"></input>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Header',
  props: ['elementId', 'utmCampaignName', 'selectedLocale'],
  data () {
    return {
      eyelinerValue: 'Lorem ipsum dolor sit amet',
      logoUrlLocale: '1/it-it-clz-logo.jpg',
      eyelinerLocale: 'Guarda la versione online'
    }
  },
  computed: {
    logoLocale () {
      if (this.selectedLocale === 'it') {
        this.logoUrlLocale = '1/it-it-clz-logo.jpg'
      } else if (this.selectedLocale === 'fr') {
        this.logoUrlLocale = '3/fr-logo-new-clz-v1.jpg'
      } else {
        this.logoUrlLocale = '1/all-logo-clz.jpg'
      }
    },
    eyelinerDependLocale () {
      if (this.selectedLocale === 'it') {
        this.eyelinerLocale = 'Guarda la versione online'
      } else if (this.selectedLocale === 'fr') {
        this.eyelinerLocale = 'Consultez le site internet'
      } else {
        this.eyelinerLocale = 'View in webbrowser'
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
      margin: 0 auto !important;
  } 
  font {
      float: right;
  }
  .eyeliner-input-field-wrapper{
      text-align: left;
  }
</style>
