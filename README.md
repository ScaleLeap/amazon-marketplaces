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

### Code Demo

```ts
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'

console.log(
  'Amazon Marketplace %s has currency %s.',
  amazonMarketplaces.CA.name,
  amazonMarketplaces.CA.currency
)
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
    "uri": "https://advertising-api.amazon.com",
    "bids": {
      "sponsoredBrands": {
        "min": 10,
        "max": 4900
      },
      "sponsoredProducts": {
        "min": 2,
        "max": 100000
      }
    }
  }
}
```

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

* [Amazon Advertising API](https://advertising.amazon.com/API/docs/v2/guides/supported_features)
* [Amazon Marketplace Web Service](https://docs.developer.amazonservices.com/en_US/dev_guide/DG_Endpoints.html)
* [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#X_currencies)

### Authors or Acknowledgments

* Roman Filippov ([Scale Leap](https://www.scaleleap.com))

### License

This project is licensed under the MIT License.
