// first check promise_PEP2.js
// ASYNC AWAIT is implemented as an extension of promise version

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

// once order is placed we need to process it anyhow and so it will only be resolved
function processOrder(order) {
    return new Promise(function (resolve) {
        console.log("Order is being prepared");
        resolve(`Order has been prepared for ${order}`);
    });
}

async function serveOrder() {
    // to handle error(catch of then-catch) we have try catch as we do not have reject here
    try {
        const orderRecvd = await placeOrder("coffee"); // no need to return or chain
        console.log(orderRecvd);
        const processedOrder = await processOrder(orderRecvd);
        console.log("after");
        console.log(processedOrder);
    } catch (error) {
        console.log(error);
    }
}

serveOrder();
