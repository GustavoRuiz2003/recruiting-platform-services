export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
  <div class="global">
  <div class="box-finish">
  <div class="box-top-finish">
      <div class="box-left-top-finish">
          <img src="../assets/coffee.svg" alt="" class="logo-image-finish">
      </div>
      <div class="box-right-top-finish">
          <div class="box-title-finish">
              <h4 class="title-finish">Smart Coffee</h4>
          </div>
          <div class="box-subtitle-finish">
              <h5 class="subtitle-finish">by Alboom</h5>
          </div>
      </div>
  </div>
  <div class="box-middle-finish">
      <div class="box-messagesucess-finish">
          <div class="messagesucess-finish">
              Pedido realizado com sucesso!
          </div>
      </div>
      <div class="box-timer-finish" id="timer">

      </div>
      <div class="box-ticket-finish" id="ticket-result">
      </div>
  </div>
  <div class="box-end-finish">
      <a href="/#login" class='button-comeback-finish' onClick="limpar()"><img src="../assets/return.svg"
              class="img-return-finish"></a>
      <button class='button-imprimir-finish' onClick="imprimir_cupom()">IMPRIMIR CUPOM</button>
  </div>
</div>
  </div>
  `
  return container; 
}

