# web-components
Development server for custom web components

## Development 
Install dependencies
```bash
$ npm install && bower install
```
Run local cdn
```bash
$ npm start
```

## Deploying to S3 requires [s3cmd](http://s3tools.org/s3cmd)
The simplest way to install s3cmd is using [pip](https://pip.pypa.io/)

```bash
$ sudo pip install s3cmd
$ s3cmd --configure
$ npm run deploy
```

