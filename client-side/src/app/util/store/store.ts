export class Store {
    store: StoreInterface = {
        products: []
    };

    addProductToStore(product: Product) {
        this.store.products.push(product);
    }

    getProductsFromStore() {
        return this.store.products;
    }

}

export interface Product {
    id: string;
    name: string;
    price: string;
    dateAdded: string;
}

export interface StoreInterface {
    products: Product[];
}