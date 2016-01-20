# hetzner-email
A custom html element that validates email is valid and unique

## Local development environment

### Install dependencies

```bash
$ npm install #local only server side dependencies
$ bower install #client side dependencies
```

### Run locally

#### Default port 8000

```bash
$ npm start
```

#### Specify a custom safe port
List of [unsafe ports](https://src.chromium.org/viewvc/chrome/trunk/src/net/base/net_util.cc?view=markup)
```bash
$ npm start -- -p 7000
```

## Testing Your Element

Simply navigate to the `/test` directory of your element to run its tests. If
you are using Polyserve: `http://localhost:8080/components/seed-element/test/`

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.

# Notes

To run headless browser 
```
$ xvfb-run ./node_modules/web-component-tester/bin/wct -p --skip-selenium-install --local chrome --color --skip-update-check --simpleOutput client/test
