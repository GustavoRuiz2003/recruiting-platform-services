export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
  <div class="global">
  <div class="box-complement">
      <div class="box-top-complements">
          <div class="box-left-top-complements">
              <img src="../assets/coffee.svg" alt="" class="logo-image-complements">
          </div>
          <div class="box-right-top-complements">
              <div class="box-title-complements">
                  <h4 class="title-complements">Smart Coffee</h4>
              </div>
              <div class="box-subtitle-complements">
                  <h5 class="subtitle-complements">by Alboom</h5>
              </div>
          </div>
      </div>
      <div class="box-message-complements">
          Adicione complementos ao seu pedido
      </div>
      <div class="box-middle-complements">
          <!-- EXPRESSO -->
          <div class="box-informations-complements" id='box-complements-id1'>
              <div class="box-middle-left-complements">
                  <img src="../assets/coffee.svg" alt="" class="img-product-complements">
              </div>
              <div class="box-middle-right-complements">
                  <div class="box-information-products-complements">
                      <div class="box-name-products-complements">
                          Café expresso
                      </div>
                      <div class="box-time-products-complements">
                          <div class="box-img-clock-products-complements">
                              <img src="../assets/clock.svg" class="img-clock-products-complements">
                          </div>
                          0:45 min
                      </div>
                  </div>
                  <div class="box-information-complements-complements">
                      <div class="box-complement1-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/acucar.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Açúcar refinado
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:30 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-acucar" id="check-acucar1"
                                  name="check-acucar" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-acucar1"></label>
                          </div>
                      </div>
                      <div class="box-complement2-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/leite.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Leite desnatado
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:20 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-leite" id="check-leite1"
                                  name="check-leite" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-leite1"></label>
                          </div>
                      </div>
                      <div class="box-complement3-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/chantilly.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Chantilly
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:55 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-chantilly"
                                  id="check-chantilly1" name="check-chantilly" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-chantilly1"></label>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- DUPLO -->
          <div class="box-informations-complements" id='box-complements-id2'>
              <div class="box-middle-left-complements">
                  <img src="../assets/cafe-duplo.svg" alt="" class="img-product-complements">
              </div>
              <div class="box-middle-right-complements">
                  <div class="box-information-products-complements">
                      <div class="box-name-products-complements">
                          Café Duplo
                      </div>
                      <div class="box-time-products-complements">
                          <div class="box-img-clock-products-complements">
                              <img src="../assets/clock.svg" class="img-clock-products-complements">
                          </div>
                          0:45 min
                      </div>
                  </div>
                  <div class="box-information-complements-complements">
                      <div class="box-complement1-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/acucar.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Açúcar refinado
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:30 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-acucar" id="check-acucar2"
                                  name="check-acucar" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-acucar2"></label>
                          </div>
                      </div>
                      <div class="box-complement2-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/leite.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Leite desnatado
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:20 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-leite" id="check-leite2"
                                  name="check-leite" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-leite2"></label>
                          </div>
                      </div>
                      <div class="box-complement3-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/cupcake.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Cupcake
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:20 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-cupcake"
                                  id="check-cupcake1" name="check-cupcake" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-cupcake1"></label>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- AMERICANO -->
          <div class="box-informations-complements" id='box-complements-id3'>
              <div class="box-middle-left-complements">
                  <img src="../assets/cafe-americano.svg" alt="" class="img-product-complements">
              </div>
              <div class="box-middle-right-complements">
                  <div class="box-information-products-complements">
                      <div class="box-name-products-complements">
                          Americano
                      </div>
                      <div class="box-time-products-complements">
                          <div class="box-img-clock-products-complements">
                              <img src="../assets/clock.svg" class="img-clock-products-complements">
                          </div>
                          2:30 min
                      </div>
                  </div>
                  <div class="box-information-complements-complements">
                      <div class="box-complement1-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/acucar.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Açúcar refinado
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:30 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-acucar" id="check-acucar3"
                                  name="check-acucar" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-acucar3"></label>
                          </div>
                      </div>
                      <div class="box-complement2-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/cupcake.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Cupcake
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:20 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-cupcake"
                                  id="check-cupcake2" name="check-cupcake" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-cupcake2"></label>
                          </div>
                      </div>
                      <div class="box-complement3-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/cookie.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Cookie
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  1:30 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-cookie" id="check-cookie1"
                                  name="check-cookie" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-cookie1"></label>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- MOCHA -->
          <div class="box-informations-complements" id='box-complements-id4'>
              <div class="box-middle-left-complements">
                  <img src="../assets/mocha.svg" alt="" class="img-product-complements">
              </div>
              <div class="box-middle-right-complements">
                  <div class="box-information-products-complements">
                      <div class="box-name-products-complements">
                          Mocha
                      </div>
                      <div class="box-time-products-complements">
                          <div class="box-img-clock-products-complements">
                              <img src="../assets/clock.svg" class="img-clock-products-complements">
                          </div>
                          2:30 min
                      </div>
                  </div>
                  <div class="box-information-complements-complements">
                      <div class="box-complement1-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/chantilly.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Chantilly
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:55 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-chantilly"
                                  id="check-chantilly2" name="check-chantilly" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-chantilly2"></label>
                          </div>
                      </div>
                      <div class="box-complement2-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/cookie.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Cookie
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  1:30 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-cookie" id="check-cookie2"
                                  name="check-cookie" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-cookie2"></label>
                          </div>
                      </div>
                      <div class="box-complement3-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/cupcake.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Cupcake
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:20 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-cupcake"
                                  id="check-cupcake3" name="check-cupcake" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-cupcake3"></label>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- CAPPUCCINO -->
          <div class="box-informations-complements" id='box-complements-id5'>
              <div class="box-middle-left-complements">
                  <img src="../assets/cappuccino.svg" alt="" class="img-product-complements">
              </div>
              <div class="box-middle-right-complements">
                  <div class="box-information-products-complements">
                      <div class="box-name-products-complements">
                          Cappuccino
                      </div>
                      <div class="box-time-products-complements">
                          <div class="box-img-clock-products-complements">
                              <img src="../assets/clock.svg" class="img-clock-products-complements">
                          </div>
                          2:30 min
                      </div>
                  </div>
                  <div class="box-information-complements-complements">
                      <div class="box-complement1-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/acucar.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Açúcar refinado
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:30 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-acucar" id="check-acucar4"
                                  name="check-acucar" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-acucar4"></label>
                          </div>
                      </div>
                      <div class="box-complement2-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/leite.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Leite desnatado
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  0:20 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-leite" id="check-leite3"
                                  name="check-leite" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-leite3"></label>
                          </div>
                      </div>
                      <div class="box-complement3-complements">
                          <div class="box-img-complement-complements">
                              <img src="../assets/cookie.svg" alt="" class="img-complement-complements">
                          </div>
                          <div class="box-nameandtime-complement-complements">
                              <div class="box-name-complements">
                                  Cookie
                              </div>
                              <div class="box-time-complements">
                                  <div class="box-img-clock-complements">
                                      <img src="../assets/clock.svg" class="img-clock-complements">
                                  </div>
                                  1:30 min
                              </div>
                          </div>
                          <div class="box-checkbox-complements">
                              <input type="checkbox" class="checkbox-complements check-cookie" id="check-cookie3"
                                  name="check-cookie" />
                              <label id="label-check" class="label-checkbox-complements"
                                  for="check-cookie3"></label>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="box-end-complements">
         <a href="/#products" class='button-comeback-complements' onclick="limpar_complements()">VOLTAR</a>
          <a href="/#finish" class='button-finish-complements' onclick="oi()">FINALIZAR</a>
      </div>
  </div>
</div>
  `
  return container; 
}