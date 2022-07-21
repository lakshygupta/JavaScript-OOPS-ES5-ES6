// view ./promise_PEP2_secnerio.png for code flow
function placeOrder(Drink) {
    return new Promise(function (resolve, reject) {
        if (Drink == "coffee") {
            resolve("Order Placed");
        } else {
            reject("Order Rejected");
        }
    });
}

// once order is placed we need to process it and so it will only be resolved
function processOrder(order) {
    return new Promise(function (resolve) {
        console.log("Order is being prepared");
        resolve(`Order has been prepared for ${order}`);
    });
}

// Promises secnario
placeOrder("coffee")
    .then((str) => {
        console.log(str);
        return processOrder(str);
    })
    .then((processedOrder) => {
        console.log(processedOrder);
    })
    .catch((err) => {
        console.log(err);
    });

// for async await scenario check async_await_PEP
