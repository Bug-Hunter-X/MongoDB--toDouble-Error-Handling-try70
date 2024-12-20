# MongoDB $toDouble Error Handling

This repository demonstrates a common error when using the `$toDouble` operator in MongoDB queries. The issue arises when attempting to convert a field to a double, but the field is missing in some documents. This results in an error because `$toDouble` cannot handle null or undefined values.

The `bug.js` file contains the erroneous query, and `bugSolution.js` provides a solution to gracefully handle missing fields.