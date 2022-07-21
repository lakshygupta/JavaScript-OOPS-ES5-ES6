function func1() {
    return new Promise(function (resolve, reject) {
        const error = true;
        if (!error) {
            console.log("Function: your promise resolved");
            resolve();
        } else {
            console.log("Function: your promise got rejected");
            reject("HR: sorry you are rejected");
        }
    });
}

func1()
    .then(function () {
        console.log("Me: Thanks for resolving");
    })
    .catch(function (str) {
        console.log("Me: Next time " + str);
    });
