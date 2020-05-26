const {readFile, appendFile, truncate} = require('fs');
const path = require('path');

const productPath = path.join(process.cwd(), 'product.txt');

class ProductService {

    getProduct() {
        let products = [];

        return new Promise((resolve, reject) => {
            readFile(productPath, (error, JSONProducts) => {
                if (error) {
                    reject('Cant read file (')
                }

                let JSONArr = JSONProducts.toString().split('\n');

                JSONArr.forEach(jsonProduct => {
                    if (!jsonProduct) {
                        return
                    }
                    products.push(JSON.parse(jsonProduct))
                });

                resolve(products);
            })
        })
    }

    getProductOfId(id) {
        return new Promise((resolve, reject) => {
            this.getProduct()
                .then(allProducts => {
                    let productOfId = allProducts.find(jsonProduct => {
                        return +jsonProduct.id === +id
                    });
                    resolve(productOfId)
                })
        })

    }

    createProduct(product) {
        const productToPush = JSON.stringify(product);

        return new Promise((resolve, reject) => {
            appendFile(productPath, `\n${productToPush}`, (err) => {
                if (err) {
                    reject('Cant write product')
                }
                resolve()
            })
        })
    }

    updateProduct(id, change) {
        return new Promise((resolve, reject) => {

            this.getProduct()
                .then(allProducts => {
                    this.deleteAllProduct();
                    let newArrProducts = allProducts.map(itemProduct => {
                        if (itemProduct.id === id) {
                            return {...itemProduct, ...change}
                        }
                        return itemProduct;
                    });

                    newArrProducts.forEach(itemProduct => {
                        this.createProduct(itemProduct)
                    });

                    resolve()
                })
        })
    }

    deleteAllProduct() {
        truncate(productPath, err => {
            if (err) console.log(err)
        })
    }

    deleteProductOfId(id) {
        return new Promise((resolve, reject) => {
            this.getProduct()
                .then(allProducts => {
                    this.deleteAllProduct();
                    let productsWithoutItemOfId = allProducts.map(jsonProduct => {
                        console.log();
                        if (+jsonProduct.id !== +id) {
                            return jsonProduct;
                        }
                    });
                    productsWithoutItemOfId.forEach(itemProduct =>   this.createProduct(itemProduct));
                    this.getProduct()
                        .then(value => resolve(value))
                })
        })
    }
}

module.exports = new ProductService;

// {"id":1,"name":"samsung","price":1111}
// {"id":2,"name":"xiaomi","price":2222}
// {"id":3,"name":"nokia","price":3333}
