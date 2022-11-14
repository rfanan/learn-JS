const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

//jika ingin mengexport module lebih dari satu maka {param1, param2}
const hahah = 'halo'
module.exports = { coffeeStock }
module.exports = { coffeeStock, hahah };
console.log(module)

//dengan ES6 Module 
export default coffeeStock;
//lebih dari satu
export { hahah, coffeeStock }