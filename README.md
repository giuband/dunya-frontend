# Dunya front end

[![Build Status](https://travis-ci.org/giuband/dunya-frontend.svg?branch=master)](https://travis-ci.org/giuband/dunya-frontend)
![Dependencies](https://david-dm.org/giuband/dunya-frontend.svg)

## Development
First use
```
npm install
```
to install all the dependencies.

Then run
```
npm run dev
```
to start an express server that simulates the client-only environment with hot reloading.

If you want to generate the production build, run:
```
npm run build
```

## Integration with back-end
The web-app is written to be flexible to the content provided by the server. To let this application know which catalogue to load, **start by rendering `index.html` with a template variable named `dunya_catalogue`**, whose value must be in `[carnatic, hindustani]` (although it's possible to extend these values, see section [Customization/Adding new content](#customizationadding-new-content)).

### Settings and behavior
All settings in the following paragraphs are stored in the file `src/settings.js`. If you change one, please rebuild the bundle with the command `npm run build`.

### Serving data for filters
At initial mount, the app requests data from the server to fill up the sidebar with filters. The address for this request is the value of the setting `FILTERS_DATA_URL[$dunya_catalogue]`, where `$dunya_catalogue` is the content of the template variable `dunya_catalogue` passed to `index.html` (as explained in previous section). The response of the server at this address must be an object, whose values are arrays of entries for the corresponding key. An example:
```json
{
  "artists": [{
      "id": "a1",
      "name": "artist 1",
      "instruments": ["i1", "i2"]
      }, {
      "id": "a2",
      "name": "artist 2",
      "instruments": []
    }],
  "concerts": [{
      "id": "c1",
      "name": "concert 1",
      "aliases": ["that concert"]
      }, {
      "id": "c2",
      "name": "concert 2"
    }],
  "instruments": [{
      "uuid": "i1",
      "name": "Violin"
      }, {
      "uuid": "i2",
      "name": "Cello"
    }],
}
```
**The key `artists` in the response is mandatory**. There are no other rules for the names and/or amount of the response keys. Each key of the response will be a section of filters in the sidebar.

**Each entry of each field** (the fields in this example are `artists, concerts, instruments`) **must have a `name` property**.
Each entry must as well contain an id field, but *this is not required to be named* `id`; edit the setting `ID_KEYS` to list all the possible keys for the id field and the app will automatically detect which entry key corresponds to the entry id. If an entry of a specific field has a key that is a reference to the ids of another field (in the example, the first entry of `artists` has a reference to `instruments`, i.e. it contains the list of instruments played by that artist), that reference will be used for advanced content filtering. In this case, if the user selected the instrument 'Violin', only "artist 1" would appear in the `artists` section as he's the only one playing the violin. On the other hand, the content of the `concerts` field wouldn't be affected as its entries don't have a reference to the `instruments` fields.

If an entry has an `aliases` field, the values on that field will be used during the search.

### Serving data for autocomplete


### Serving search results


## Customization/Adding new content
In case of extending the application to support a new catalogue, the settings for the new catalogue have to be added in:
- `FILTERS_DATA_URL`
- `SEARCH_URL`
- `AUTOCOMPLETE_URL`

`SELF_EXPLANATORY_CATEGORY_ITEMS` might as well be extended in order to include new response keys that don't need an explanation on the search bar. In the same way, you might need to add new items to the list `ID_KEYS`.

## License
MIT
