function calculatePrice (product, quantity) {
    let pricePerProduct = 0;

    switch (product) {
        case "coffee":
            pricePerProduct = 1.50;
            break;
        case "water":
            pricePerProduct = 1.00;
            break;
        case "coke":
            pricePerProduct = 1.40;
            break;
        case "snacks":
            pricePerProduct = 2.00;
            break;
    }

    console.log((pricePerProduct * quantity).toFixed(2));
}