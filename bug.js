```javascript
const query = { $expr: { $gt: [ { $toDouble: '$price' }, 100 ] } };

//This query is supposed to filter documents where the price is greater than 100.
//However, it might fail if the 'price' field is not present in some documents.
//This will result in an error like:
//   "$toDouble" is not valid for a null value
```