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
                                    <a href="http://view.email-calzedonia.com/?qs=f05de793bac18e64fed8d04f09fde97b2afb6e7d3dd2051fd47a19a0587ec11c2d0f91a7c42276b61e40639c5b2f72ea241ac2b59b348524e15013a9f67366e91fc086102057a8b4">
                                        <font color="#666666">View in a browser</font>
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
                                <a href="http://click.email-calzedonia.com/?qs=e7ee0ab89e3f0db45e218da454b306f6937cd564233832a0488f4691727438ec0f3c1732d9017cfbeacbf7b63aae1614f8c80e767fcaba62">
                                    <img src="http://image.email-calzedonia.com/lib/fe9413727d64007f71/m/1/all-logo-clz.jpg" border="0" style="margin:0px;padding:0px;display:block;" alt="Calzedonia">
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
  props: ['elementId'],
  data () {
    return {
      eyelinerValue: 'Lorem ipsum dolor sit amet'
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
