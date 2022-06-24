import login from "./pages/login/main.js";
import products from "./pages/products/main.js";
import complements from "./pages/complements/main.js";
import finish from "./pages/finish/main.js";

export default {
  login: login(),
  products: products(),
  complements: complements(),
  finish: finish()
}
var check1_prod = document.querySelector("#check-product1");
var check2_prod = document.querySelector("#check-product2");
var check3_prod = document.querySelector("#check-product3");
var check4_prod = document.querySelector("#check-product4");
var check5_prod = document.querySelector("#check-product5");