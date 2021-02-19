import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { sellerCentralUrls, sellingPartnerRegions } from '../selling-partner-api-regions'

export const TR = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.TR,
  currency: AmazonMarketplaceAdvertisingCurrency.TRY,
  id: 'A33AVAJ2PDY3EV',
  name: 'Turkey',
  uri: 'https://www.amazon.com.tr',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralUrl: sellerCentralUrls.NA,
  },
})
