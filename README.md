A quick example for how to import JSON files in Typescript properly (well, at least according to my knowledge ;) )

## Installation
```
> git clone https://github.com/saenglert/jsonimport.git
> cd jsonimport/
> npm install
```
## Build
```
npm run build
```

## Usage
```
node dist/src/index.js
```
The script should output the following:
```
user@user-pc:~/git/hfu$ node dist/src/index.js
Import { books: [ { author: 'Georg Orwell', title: '1984' } ] }
```