import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'

export const CN = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.CN,
  currency: AmazonMarketplaceAdvertisingCurrency.CNY,
  id: 'AAHKV2X7AFYLW',
  name: 'China',
  uri: 'https://www.amazon.cn',
  webServiceUri: 'https://mws.amazonservices.com.cn',
})
