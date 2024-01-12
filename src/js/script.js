'use strict';

function price(literBorsch, oneKgPotatoPrice) {
    const potatoWeight= Math.ceil((300 * literBorsch) / 1000);
    const potatoPrice = potatoWeight * oneKgPotatoPrice;

    return `Для ${literBorsch} літрів борщу Вам знадобиться ${potatoWeight} кілограмів картоплі, яка коштуватиме ${potatoPrice} грн.`;
}

console.log(price(48, 13));
