export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
  <div class="global">
  <div class="box-login">
      <div class="box-image-login">
          <div class="image-login">
              <img src="../assets/coffee.svg" alt="">
          </div>
      </div>
      <div class="box-contents-login">
          <div class="box-input-login">
              <label for="" class="label-login">Nome completo</label>
              <input type="text" class="input-login">
          </div>
          <div class="box-input-login">
              <label for="" class="label-login">E-mail</label>
              <input type="email" class="input-login">
          </div>
      </div>
      <div class="box-button-login">
          <div class="div-button-login">
              <a href="/#products"><button class="button-login">CADASTRAR</button></a>
          </div>
      </div>
  </div>
  </div>
  `
  return container; 
}