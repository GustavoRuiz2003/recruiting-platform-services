export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
  <div class="global">
  <div class="box-products">
      <div class="box-top-products">
          <div class="box-left-top-products">
              <img src="../assets/coffee.svg" alt="" class="logo-image-products">
          </div>
          <div class="box-right-top-products">
              <div class="box-title-products">
                  <h4 class="title-products">Smart Coffee</h4>
              </div>
              <div class="box-subtitle-products">
                  <h5 class="subtitle-products">by Alboom</h5>
              </div>
          </div>
      </div>
      <div class="box-middle-products">
          <div class="box-informations-products">
              <div class="box-image-products">
                  <img src="../assets/cafe-duplo.svg" alt="" class="image-products">
              </div>
              <div class="box-description-products">
                  <div class="box-top-description-products">
                      Café Duplo
                  </div>
                  <div class="box-end-description-products">
                      <img src="../assets/clock.svg" class="clock-image-products" alt="">
                      0:45 min
                  </div>
              </div>
              <div class="box-checkbox-products">
                  <input type="checkbox" class="checkbox-products" id="check-product1" name="check-product1" />
                  <label id="label-check-product1" class="label-checkbox-products" for="check-product1"></label>
              </div>
          </div>
          <div class="box-informations-products">
              <div class="box-image-products">
                  <img src="../assets/coffee.svg" alt="" class="image-products">
              </div>
              <div class="box-description-products">
                  <div class="box-top-description-products">
                      Café expresso
                  </div>
                  <div class="box-end-description-products">
                      <img src="../assets/clock.svg" class="clock-image-products" alt="">
                      0:45 min
                  </div>
              </div>
              <div class="box-checkbox-products">
                  <input type="checkbox" class="checkbox-products" id="check-product2" name="check-product2" />
                  <label id="label-check-product2" class="label-checkbox-products" for="check-product2"></label>
              </div>
          </div>
          <div class="box-informations-products">
              <div class="box-image-products">
                  <img src="../assets/mocha.svg" alt="" class="image-products">
              </div>
              <div class="box-description-products">
                  <div class="box-top-description-products">
                      Mocha
                  </div>
                  <div class="box-end-description-products">
                      <img src="../assets/clock.svg" class="clock-image-products" alt="">
                      2:30 min
                  </div>
              </div>
              <div class="box-checkbox-products">
                  <input type="checkbox" class="checkbox-products" id="check-product3" name="check-product3" />
                  <label id="label-check-product3" class="label-checkbox-products" for="check-product3"></label>
              </div>
          </div>
          <div class="box-informations-products">
              <div class="box-image-products">
                  <img src="../assets/cafe-americano.svg" alt="" class="image-products">
              </div>
              <div class="box-description-products">
                  <div class="box-top-description-products">
                      Americano
                  </div>
                  <div class="box-end-description-products">
                      <img src="../assets/clock.svg" class="clock-image-products" alt="">
                      2:30 min
                  </div>
              </div>
              <div class="box-checkbox-products">
                  <input type="checkbox" class="checkbox-products" id="check-product4" name="check-product4" />
                  <label id="label-check-product4" class="label-checkbox-products" for="check-product4"></label>
              </div>
          </div>
          <div class="box-informations-products">
              <div class="box-image-products">
                  <img src="../assets/cappuccino.svg" alt="" class="image-products">
              </div>
              <div class="box-description-products">
                  <div class="box-top-description-products">
                      Cappuccino
                  </div>
                  <div class="box-end-description-products">
                      <img src="../assets/clock.svg" class="clock-image-products" alt="">
                      2:30 min
                  </div>
              </div>
              <div class="box-checkbox-products">
                  <input type="checkbox" class="checkbox-products" id="check-product5" name="check-product5" />
                  <label id="label-check-product5" class="label-checkbox-products" for="check-product5"></label>
              </div>
          </div>
      </div>
      <div class="box-end-products">
      <a href="/#complements"><button class="button-products" onClick='products()'>CONTINUAR</button></a>
      </div>
  </div>
</div>


  `
  return container; 
}