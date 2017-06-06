<template>
    <div>
        <table cellpadding="0" cellspacing="0" width="700" align="center">
            <tr>
                <td>
                    <table :id="'content-element-' + elementId" border="0" width="700" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" style="font-family: 'Arial', sans-serif;">
                        <tr>
                            <td>
                                <table>
                                    <td align="center" width="10">
                                        <span>&nbsp;</span>
                                    </td>
                                    <td align="center">
                                        <div class="hiden">
                                            %%[ 
                                            var @productNameProduct11,@productLinkProduct11,@productCodeProduct11,@currencyProduct11,@RegularPriceProduct11,@SalePriceProduct11,@productValProduct11,@skuValProduct11,@imgTypValProduct11,@imageLinkProduct11,@rowsProduct11,@rowProduct11,@rowNrProduct11

                                            set @skuValProduct11 = "{{ product1SkuValue }}_{{ product1ColorValue }}"
                                            
                                            set @productNameProduct11 = "" /* This has to be here cause otherwise the script has no idea if there is data about the product or not */

                                            set @rowsProduct11 = LookupRows("ENT.Catalog_F2","Variant_SFMC", @skuValProduct11, "Locale", @countrycatalog)

                                            If Rowcount(@rowsProduct11) > 0 then
                                            set @rowProduct11            = row(@rowsProduct11,1)
                                            set @productNameProduct11    = field(@rowProduct11,"ProductName")
                                            set @productCodeProduct11    = field(@rowProduct11,"ProductCode")
                                            set @productLinkProduct11    = field(@rowProduct11,"ProductLink")
                                            set @currencyProduct11       = field(@rowProduct11,"Currency")
                                            set @RegularPriceProduct11   = field(@rowProduct11,"RegularPrice")
                                            set @SalePriceProduct11      = field(@rowProduct11,"SalePrice")
                                            Endif
                                            ]%%
                                        </div>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product1UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName">
                                            <img :src="'https://d3tousz17tm3ri.cloudfront.net/get/hcrop/' + productCropBasedOnPercent + '/w/200/'+ product1SkuValue + '_' + product1ColorValue + '_F.image'" width="200" border="0" style="margin:0px;padding:0px;display:block;" alt="Calzedonia">
                                        </a>
                                        <span height="30" style="font-size:30px;line-height:30px;">&nbsp;</span>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product1UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName" style="text-decoration: none;">
                                            <p style="line-height:16px;;width:100%;text-align:center; font-family: Trebuchet MS, Helvetica, sans-serif; font-size:14px; color:#000000; margin:0;text-decoration: none">
                                            Name product 1
                                            </p>
                                        </a>
                                        <span height="10">&nbsp;</span>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product1UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName" style="text-decoration: none;">
                                            <p style="line-height:18px;;width:100%;text-align:center; font-family: Trebuchet MS, Helvetica, sans-serif; font-size:16px; color:#000000; margin:0;text-decoration: none">
                                            <b>Price product 1</b>
                                            </p>
                                        </a>
                                        <span height="10">&nbsp;</span>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product1UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName" style="text-decoration: none;">
                                            <p style="line-height:16px;;width:100%;text-align:center; font-family: Trebuchet MS, Helvetica, sans-serif; font-size:14px; color:#000000; margin:0;text-decoration: none;text-transform: uppercase;">
                                            <span v-if="!customCta">
                                                    <b><u>{{ productCtaBasedOnLocale }}</u></b>
                                                </span>
                                                <span v-if="customCta">
                                                    <b><u>{{ productCtaCustomValue }}</u></b>
                                                </span>
                                            </p>
                                        </a>
                                    </td>
                                    <td align="center" width="40">
                                        <span>&nbsp;</span>
                                    </td>
                                    <td align="center">
                                        <div class="hiden">
                                            %%[ 
                                            var @productNameProduct2,@productLinkProduct2,@productCodeProduct2,@currencyProduct2,@RegularPriceProduct2,@SalePriceProduct2,@productValProduct2,@skuValProduct2,@imgTypValProduct2,@imageLinkProduct2,@rowsProduct2,@rowProduct2,@rowNrProduct2

                                            set @skuValProduct2 = "{{ product2SkuValue }}_{{ product2ColorValue }}"
                                            
                                            set @productNameProduct2 = "" /* This has to be here cause otherwise the script has no idea if there is data about the product or not */

                                            set @rowsProduct2 = LookupRows("ENT.Catalog_F2","Variant_SFMC", @skuValProduct2, "Locale", @countrycatalog)

                                            If Rowcount(@rowsProduct2) > 0 then
                                            set @rowProduct2            = row(@rowsProduct2,1)
                                            set @productNameProduct2    = field(@rowProduct2,"ProductName")
                                            set @productCodeProduct2    = field(@rowProduct2,"ProductCode")
                                            set @productLinkProduct2    = field(@rowProduct2,"ProductLink")
                                            set @currencyProduct2       = field(@rowProduct2,"Currency")
                                            set @RegularPriceProduct2   = field(@rowProduct2,"RegularPrice")
                                            set @SalePriceProduct2      = field(@rowProduct2,"SalePrice")
                                            Endif
                                            ]%%
                                        </div>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product2UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName">
                                            <img :src="'https://d3tousz17tm3ri.cloudfront.net/get/hcrop/' + productCropBasedOnPercent + '/w/200/'+ product2SkuValue + '_' + product2ColorValue + '_F.image'" width="200" border="0" style="margin:0px;padding:0px;display:block;" alt="Calzedonia">
                                        </a>
                                        <span height="30" style="font-size:30px;line-height:30px;">&nbsp;</span>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product2UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName" style="text-decoration: none;">
                                            <p style="line-height:16px;;width:100%;text-align:center; font-family: Trebuchet MS, Helvetica, sans-serif; font-size:14px; color:#000000; margin:0;text-decoration: none">
                                            Name product 2
                                            </p>
                                        </a>
                                        <span height="10">&nbsp;</span>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product2UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName" style="text-decoration: none;">
                                            <p style="line-height:18px;;width:100%;text-align:center; font-family: Trebuchet MS, Helvetica, sans-serif; font-size:16px; color:#000000; margin:0;text-decoration: none">
                                            <b>Price product 2</b>
                                            </p>
                                        </a>
                                        <span height="10">&nbsp;</span>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product2UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName" style="text-decoration: none;">
                                            <p style="line-height:16px;;width:100%;text-align:center; font-family: Trebuchet MS, Helvetica, sans-serif; font-size:14px; color:#000000; margin:0;text-decoration: none;text-transform: uppercase;">
                                            <span v-if="!customCta">
                                                    <b><u>{{ productCtaBasedOnLocale }}</u></b>
                                                </span>
                                                <span v-if="customCta">
                                                    <b><u>{{ productCtaCustomValue }}</u></b>
                                                </span>
                                            </p>
                                        </a>
                                    </td>
                                    <td align="center" width="40">
                                        <span>&nbsp;</span>
                                    </td>
                                    <td align="center">
                                        <div class="hiden">
                                            %%[ 
                                            var @productNameProduct3,@productLinkProduct3,@productCodeProduct3,@currencyProduct3,@RegularPriceProduct3,@SalePriceProduct3,@productValProduct3,@skuValProduct3,@imgTypValProduct3,@imageLinkProduct3,@rowsProduct3,@rowProduct3,@rowNrProduct3

                                            set @skuValProduct3 = "{{ product3SkuValue }}_{{ product3ColorValue }}"
                                            
                                            set @productNameProduct3 = "" /* This has to be here cause otherwise the script has no idea if there is data about the product or not */

                                            set @rowsProduct3 = LookupRows("ENT.Catalog_F2","Variant_SFMC", @skuValProduct3, "Locale", @countrycatalog)

                                            If Rowcount(@rowsProduct3) > 0 then
                                            set @rowProduct3            = row(@rowsProduct3,1)
                                            set @productNameProduct3    = field(@rowProduct3,"ProductName")
                                            set @productCodeProduct3    = field(@rowProduct3,"ProductCode")
                                            set @productLinkProduct3    = field(@rowProduct3,"ProductLink")
                                            set @currencyProduct3       = field(@rowProduct3,"Currency")
                                            set @RegularPriceProduct3   = field(@rowProduct3,"RegularPrice")
                                            set @SalePriceProduct3      = field(@rowProduct3,"SalePrice")
                                            Endif
                                            ]%%
                                        </div>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product3UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName">
                                            <img :src="'https://d3tousz17tm3ri.cloudfront.net/get/hcrop/' + productCropBasedOnPercent + '/w/200/'+ product3SkuValue + '_' + product3ColorValue + '_F.image'" width="200" border="0" style="margin:0px;padding:0px;display:block;" alt="Calzedonia">
                                        </a>
                                        <span height="30" style="font-size:30px;line-height:30px;">&nbsp;</span>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product3UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName" style="text-decoration: none;">
                                            <p style="line-height:16px;;width:100%;text-align:center; font-family: Trebuchet MS, Helvetica, sans-serif; font-size:14px; color:#000000; margin:0;text-decoration: none">
                                            Name product 2
                                            </p>
                                        </a>
                                        <span height="10">&nbsp;</span>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product3UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName" style="text-decoration: none;">
                                            <p style="line-height:18px;;width:100%;text-align:center; font-family: Trebuchet MS, Helvetica, sans-serif; font-size:16px; color:#000000; margin:0;text-decoration: none">
                                            <b>Price product 2</b>
                                            </p>
                                        </a>
                                        <span height="10">&nbsp;</span>
                                        <a :href="'http://calzedonia.commander1.com/c3/?tcs=2254&cmp=' + utmCampaignName + '&chn=newsletter&country=%%Country_of_interest_sf_code%%&med=email&src=%%jobid%%&url=http://it.calzedonia.com/' + product3UrlValue + '?utm_source=%%jobid%%&utm_medium=email&utm_campaign=' + utmCampaignName" style="text-decoration: none;">
                                            <p style="line-height:16px;;width:100%;text-align:center; font-family: Trebuchet MS, Helvetica, sans-serif; font-size:14px; color:#000000; margin:0;text-decoration: none;text-transform: uppercase;">
                                            <span v-if="!customCta">
                                                    <b><u>{{ productCtaBasedOnLocale }}</u></b>
                                                </span>
                                                <span v-if="customCta">
                                                    <b><u>{{ productCtaCustomValue }}</u></b>
                                                </span>
                                            </p>
                                        </a>
                                    </td>
                                    <td align="center" width="10">
                                        <span>&nbsp;</span>
                                    </td>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div class="columns">
            <div class="product-info-wrapper column is-12">
                <p class="product-number menu-label">Product 1</p>
                <div class="left-items-holder column is-6">
                    <p class="menu-label">
                        SKU:
                    </p>
                    <input class="input is-primary" v-model="product1SkuValue"></input>
                    <p class="menu-label">
                        Product URL:
                    </p>
                    <input class="input is-primary" v-model="product1UrlValue"></input>
                </div>
                <div class="right-items-holder column is-6">
                    <p class="menu-label">
                        Color code:
                    </p>
                    <input class="input is-primary" v-model="product1ColorValue"></input>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="product-info-wrapper column is-12">
                <p class="product-number menu-label">Product 2</p>
                <div class="left-items-holder column is-6">
                    <p class="menu-label">
                        SKU:
                    </p>
                    <input class="input is-primary" v-model="product2SkuValue"></input>
                    <p class="menu-label">
                        Product URL:
                    </p>
                    <input class="input is-primary" v-model="product2UrlValue"></input>
                </div>
                <div class="right-items-holder column is-6">
                    <p class="menu-label">
                        Color code:
                    </p>
                    <input class="input is-primary" v-model="product2ColorValue"></input>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="product-info-wrapper column is-12">
                <p class="product-number menu-label">Product 3</p>
                <div class="left-items-holder column is-6">
                    <p class="menu-label">
                        SKU:
                    </p>
                    <input class="input is-primary" v-model="product3SkuValue"></input>
                    <p class="menu-label">
                        Product URL:
                    </p>
                    <input class="input is-primary" v-model="product3UrlValue"></input>
                </div>
                <div class="right-items-holder column is-6">
                    <p class="menu-label">
                        Color code:
                    </p>
                    <input class="input is-primary" v-model="product3ColorValue"></input>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="general-product-info-wrapper column is-12">
                <p class="product-number menu-label">General info</p>
                <div class="left-items-holder column is-6">
                    <p class="menu-label">
                        CTA:
                    </p>
                    <input type="checkbox" v-model="customCta">I want cusotm CTA</input>
                    <input v-show="!customCta" class="input is-primary" v-model="productCtaBasedOnLocale"></input>
                    <input v-show="customCta" class="input is-primary" v-model="productCtaCustomValue"></input>
                </div>
                <div class="right-items-holder column is-6">
                    <p class="menu-label">
                    Crop by height in %:
                    </p>
                    <input class="input is-primary" v-model="productCropValue"></input>
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
      product1SkuValue: '',
      product1ColorValue: '',
      product1UrlValue: '',
      product2SkuValue: '',
      product2ColorValue: '',
      product2UrlValue: '',
      product3SkuValue: '',
      product3ColorValue: '',
      product3UrlValue: '',
      productCropValue: '0',
      productCtaValue: '',
      productCtaCustomValue: 'Custom Cta',
      customCta: false
    }
  },
  methods: {
    isCustomCta () {
      if (!this.customCta) {
        this.productCtaBasedOnLocale()
      }
    }
  },
  computed: {
    productCtaBasedOnLocale () {
      if (this.selectedLocale === 'it') {
        this.productCtaValue = 'Aciqusta ora'
        return this.productCtaValue
      } else if (this.selectedLocale === 'fr') {
        this.productCtaValue = 'Shoppezz'
        return this.productCtaValue
      } else {
        this.productCtaValue = 'Shop now'
        return this.productCtaValue
      }
    },
    productCropBasedOnPercent () {
      var productCropPixels = (this.productCropValue / 2) * 22.4
      return Math.round(productCropPixels)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .right-items-holder {
        float: right;
    }
    .left-items-holder {
        float: left;
    }
    .product-info-wrapper{
        padding-top: 50px;
    }
    .product-number {
        border-top: 1px solid #7a7a7a;
        padding-top: 25px;
    }
    .center {
        margin: 0 auto;
    }
    .hiden {
        display: none;
        height: 0;
        width: 0;
    }
</style>
