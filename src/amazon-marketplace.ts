export interface AmazonMarketplaceAdvertising {
  /**
   * Amazon Advertising API endpoint URI
   */
  readonly uri: string

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
   * 'CA'
   */
  readonly countryCode: string

  /**
   * Currency code for the given marketplace.
   *
   * [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#X_currencies)
   *
   * @example
   *
   * 'CAD'
   */
  readonly currency: string

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
