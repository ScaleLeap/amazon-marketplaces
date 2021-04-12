![Amazon Marketplace Logo](https://raw.githubusercontent.com/ScaleLeap/amazon-marketplaces/master/amazon-marketplace.png)

@scaleleap/amazon-marketplaces
=======================================

A collection of [Amazon Marketplace](https://en.wikipedia.org/wiki/Amazon_Marketplace) data objects.

This package is written in TypeScript and is fully typed.

---

This package combines data about Amazon Marketplace (the consumer side of Amazon) into
a structured class.

### Available Marketplace Data

* ID (e.g. `A2EUQ1WTGCTBG2`)
* Country code (ISO 3166-1) (e.g. `CA`)
* Currency code (ISO 4217) (e.g. `CAD`)
* Name (country name) (e.g. `Canada`)
* URI (e.g. `https://www.amazon.ca/`)
* Amazon Marketplace Web Service (Amazon MWS) endpoint URI
* Amazon Advertising
  * API endpoint URI
  * Sponsored products
    * Minimum bid
    * Maximum bid
  * Sponsored Brands
    * Minimum bid
    * Maximum bid
  * Account time zone
* Amazon Selling Partner API
  * Selling Partner Region
  * API endpoint URI
  * Seller Central endpoint URI (used for SP Auth)

### Code Demo

#### Enum of Amazon Marketplace Data

```ts
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'

const { CA } = amazonMarketplaces

console.log('Amazon Marketplace %s uses currency %s.', CA.name, CA.currency)
```

#### List of Amazon Marketplace Data

Sometimes it is more ergonomic to iterate over an array of marketplaces.
And that is where `amazonMarketplacesList` may come handy.

```ts
import { amazonMarketplacesList } from '@scaleleap/amazon-marketplaces'

const marketplaceIds = amazonMarketplacesList.map(marketplace => marketplace.id)
```

#### Utility Functions

```ts
import {
  findAmazonMarketplace,
  findAmazonMarketplaceOrFail,
  AmazonMarketplaceCountryCode
} from '@scaleleap/amazon-marketplaces'

// Return value *can* be undefined
const CA = findAmazonMarketplace('countryCode', AmazonMarketplaceCountryCode.CA)

// Function will throw an error if marketplace is not found
// Thus return value is never undefined.
const US = findAmazonMarketplaceOrFail('countryCode', AmazonMarketplaceCountryCode.US)

// TypeScript assertion functions that ensure that the marketplace has advertising / selling partner enabled.
// Throws if not.
assertMarketplaceHasAdvertising(CA)
assertMarketplaceHasSellingPartner(CA)

// CA.advertising is now type guarded and can be safely accessed.
console.log(CA.advertising.countryCode)
```

### Full Data Object Example

```json
{
  "countryCode": "CA",
  "currency": "CAD",
  "id": "A2EUQ1WTGCTBG2",
  "name": "Canada",
  "uri": "https://www.amazon.ca",
  "webServiceUri": "https://mws.amazonservices.ca",
  "advertising": {
    "countryCode": "CA",
    "timeZone": "America/Los_Angeles",
    "region": {
      "accessTokenUri": "https://api.amazon.com/auth/o2/token",
      "authorizationUri": "https://www.amazon.com/ap/oa",
      "code": "NA",
      "endpoint": "https://advertising-api.amazon.com",
      "name": "North America",
    },
    "bids": {
      "sponsoredBrands": {
        "min": 10,
        "max": 4900
      },
      "sponsoredProducts": {
        "min": 2,
        "max": 100000
      }
    },
  },
  "sellingPartner": {
    "region": {
      "awsRegion": "us-east-1",
      "code": "NA",
      "endpoint": "https://sellingpartnerapi-na.amazon.com",
      "name": "North America",
    },
    "sellerCentralAuthUri": "https://sellercentral.amazon.com"
  }
}
```

You may also view the [Jest snapshot data](tests/__snapshots__/marketplaces.test.ts.snap) for the fully rendered data object examples.

### Download & Installation

```sh
$ npm i -s @scaleleap/amazon-marketplaces
```

### Contributing

If you find any other data that can be added, please open an issue and let us know.

Note that this repository uses [Conventional Commit](https://www.conventionalcommits.org/)
style commit messages.

If a new marketplace is added, this should be marked as breaking change and increase the major
version, because others may rely on iterating over the available marketplaces.

### Original Data Sources

* [Amazon Advertising API](https://advertising.amazon.com/API/docs/en-us/get-started/how-to-use-api)
* [Amazon Marketplace Web Service](https://docs.developer.amazonservices.com/en_US/dev_guide/DG_Endpoints.html)
* [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)
* [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)
* [Regional profile time zone codes](https://advertising.amazon.com/API/docs/en-us/reference/2/profiles#regional-profile-time-zone-codes)
* [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
* [Selling Partner API endpoints](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#selling-partner-api-endpoints)

### Authors or Acknowledgments

* Roman Filippov ([Scale Leap](https://www.scaleleap.com))

### License

This project is licensed under the MIT License.


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FScaleLeap%2Famazon-marketplaces.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FScaleLeap%2Famazon-marketplaces?ref=badge_large)

### Badges

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ScaleLeap/amazon-marketplaces/CI)](https://github.com/ScaleLeap/amazon-marketplaces/actions)
[![NPM](https://img.shields.io/npm/v/@scaleleap/amazon-marketplaces)](https://npm.im/@scaleleap/amazon-marketplaces)
[![License](https://img.shields.io/npm/l/@scaleleap/amazon-marketplaces)](./LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FScaleLeap%2Famazon-marketplaces.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FScaleLeap%2Famazon-marketplaces?ref=badge_shield)