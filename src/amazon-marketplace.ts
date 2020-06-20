import { AmazonMarketplaceAdvertisingRegion } from './amazon-marketplace-advertising-region'

/**
 * Amazon Marketplace country code enum.
 */
export enum AmazonMarketplaceCountryCode {
  AE = 'AE',
  AU = 'AU',
  BR = 'BR',
  CA = 'CA',
  CN = 'CN',
  DE = 'DE',
  ES = 'ES',
  FR = 'FR',
  GB = 'GB',
  IN = 'IN',
  IT = 'IT',
  JP = 'JP',
  MX = 'MX',
  NL = 'NL',
  SA = 'SA',
  SG = 'SG',
  TR = 'TR',
  US = 'US',
}

/**
 * Currency enum.
 */
export enum AmazonMarketplaceAdvertisingCurrency {
  AED = 'AED',
  AUD = 'AUD',
  BRL = 'BRL',
  CAD = 'CAD',
  CNY = 'CNY',
  EUR = 'EUR',
  GBP = 'GBP',
  INR = 'INR',
  JPY = 'JPY',
  MXN = 'MXN',
  SAR = 'SAR',
  SGD = 'SGD',
  TRY = 'TRY',
  USD = 'USD',
}

/**
 * Amazon Marketplace Advertising country code enum.
 *
 * The country code identifying the publisher(s) on which ads will run.
 */
export enum AmazonMarketplaceAdvertisingCountryCode {
  AE = 'AE',
  AU = 'AU',
  CA = 'CA',
  DE = 'DE',
  ES = 'ES',
  FR = 'FR',
  IT = 'IT',
  JP = 'JP',
  UK = 'UK', // Not a real country code, but such is life. See https://github.com/ScaleLeap/amazon-marketplaces/issues/122
  US = 'US',
}

/**
 * Time Zone enum.
 */
export enum AmazonMarketplaceAdvertisingTimeZone {
  AMERICA_LOS_ANGELES = 'America/Los_Angeles',
  ASIA_DUBAI = 'Asia/Dubai',
  ASIA_TOKYO = 'Asia/Tokyo',
  AUSTRALIA_SYDNEY = 'Australia/Sydney',
  EUROPE_LONDON = 'Europe/London',
  EUROPE_PARIS = 'Europe/Paris',
}

export interface AmazonMarketplaceAdvertising {
  /**
   * Amazon Advertising account time zone.
   *
   * @example
   *
   * "America/Los_Angeles"
   */
  readonly timeZone: AmazonMarketplaceAdvertisingTimeZone

  /**
   * The country code identifying the publisher(s) on which ads will run.
   *
   * [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) with the exception of UK, which uses
   * `UK` instead of `GB`.
   *
   * @example
   *
   * AmazonMarketplaceAdvertisingCountryCode.CA
   */
  readonly countryCode: AmazonMarketplaceAdvertisingCountryCode

  /**
   * Amazon Advertising API Regions
   */
  readonly region: AmazonMarketplaceAdvertisingRegion

  /**
   * Minimum and maximum bids for each advertising type.
   */
  readonly bids: {
    /**
     * Sponsored Products (SP)
     */
    readonly sponsoredProducts: AmazonAdvertisingBidLimits

    /**
     * Sponsored Brands (SB)
     */
    readonly sponsoredBrands: AmazonAdvertisingBidLimits
  }
}

export interface AmazonAdvertisingBidLimits {
  /**
   * Minimum bid in account currency in **smallest units** (e.g. cents).
   *
   * @example
   *
   * 2
   */
  readonly min: number

  /**
   * Maximum bid in account currency in **smallest units** (e.g. cents).
   *
   * @example
   *
   * 100000
   */
  readonly max: number
}

export interface AmazonMarketplace {
  /**
   * Amazon Marketplace ID.
   *
   * @example
   *
   * 'A2EUQ1WTGCTBG2'
   */
  readonly id: string

  /**
   * Amazon Marketplace Name.
   *
   * @example
   *
   * 'Canada'
   */
  readonly name: string

  /**
   * Country code for the given marketplace.
   *
   * [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1)
   *
   * @example
   *
   * AmazonMarketplaceCountryCode.CA
   */
  readonly countryCode: AmazonMarketplaceCountryCode

  /**
   * Currency code for the given marketplace.
   *
   * [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#X_currencies)
   *
   * @example
   *
   * AmazonMarketplaceAdvertisingCurrency.CAD
   */
  readonly currency: AmazonMarketplaceAdvertisingCurrency

  /**
   * Amazon Marketplace URI.
   *
   * @example
   *
   * 'https://www.amazon.ca/'
   */
  readonly uri: string

  /**
   * [Amazon Marketplace Web Service](https://developer.amazonservices.com/gp/mws/docs.html) (Amazon MWS) Endpoint URI.
   *
   * @example
   *
   * 'https://mws.amazonservices.ca'
   */
  readonly webServiceUri: string

  /**
   * [Amazon Advertising](https://advertising.amazon.com/API/docs/v2/guides/supported_features).
   */
  readonly advertising?: AmazonMarketplaceAdvertising
}

export class AmazonMarketplace implements AmazonMarketplace {
  public constructor(amazonMarketplace: AmazonMarketplace) {
    Object.assign(this, amazonMarketplace)
    Object.freeze(this)
  }
}
