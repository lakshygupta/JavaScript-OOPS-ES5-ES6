const fs = require("fs").promises;

const promise = fs.readFile("f1.txt");
console.log(promise);

promise.then(function (data) {
    console.log(data.toString());
});
promise.catch(function (err) {
    console.log(err);
});
