//Array methods

// const customerList = [];
// customerList.push(10);
// customerList.push(20);
// customerList.push(30);

// let revAr = customerList.reverse();


// console.log(revAr);

//------       ----------------

//let inStockItems = products.filter(product => product.inStock == false);

let inStockItems = products.filter(
    function (product) {
        return productFilter(product);

    }
)

function productFilter(product) {
    return product.inStock == true;
}

console.log(inStockItems);

