var valor_total = 0;
let date = new Date("2022-06-24 00:00:00");

function products() {

    let check1_prod = document.querySelectorAll("#check-product1:checked");
    let check2_prod = document.querySelectorAll("#check-product2:checked");
    let check3_prod = document.querySelectorAll("#check-product3:checked");
    let check4_prod = document.querySelectorAll("#check-product4:checked");
    let check5_prod = document.querySelectorAll("#check-product5:checked");

    if (check1_prod.length > 0) {
        date.setSeconds(date.getSeconds() + 45);
        setTimeout(function () {
            document.getElementById("box-complements-id2").style.display = "flex";
        }, 0);
    }
    if (check2_prod.length > 0) {
        date.setSeconds(date.getSeconds() + 45);
        setTimeout(function () {
            document.getElementById("box-complements-id1").style.display = "flex";
        }, 0);
    }
    if (check3_prod.length) {
        date.setSeconds(date.getSeconds() + 30);
        date.setMinutes(date.getMinutes() + 02);
        setTimeout(function () {
            document.getElementById("box-complements-id4").style.display = "flex";
        }, 0);
    }
    if (check4_prod.length) {
        date.setSeconds(date.getSeconds() + 30);
        date.setMinutes(date.getMinutes() + 02);
        setTimeout(function () {
            document.getElementById("box-complements-id3").style.display = "flex";
        }, 0);
    }
    if (check5_prod.length) {
        date.setSeconds(date.getSeconds() + 30);
        date.setMinutes(date.getMinutes() + 02);
        setTimeout(function () {
            document.getElementById("box-complements-id5").style.display = "flex";
        }, 0);
    }

}

function oi() {
    let check_acucar = document.querySelectorAll('.check-acucar:checked');
    let check_leite = document.querySelectorAll('.check-leite:checked');
    let check_cookie = document.querySelectorAll('.check-cookie:checked');
    let check_cupcake = document.querySelectorAll('.check-cupcake:checked');
    let check_chantilly = document.querySelectorAll('.check-chantilly:checked');

    if (check_acucar.length > 0) {
        for (var i = 0; i < check_acucar.length; i++) {
            date.setSeconds(date.getSeconds() + 30);
        }
    }
    if (check_leite.length > 0) {
        for (var i = 0; i < check_leite.length; i++) {
            date.setSeconds(date.getSeconds() + 20);
        }
    }
    if (check_cookie.length > 0) {
        for (var i = 0; i < check_cookie.length; i++) {
            date.setMinutes(date.getMinutes() + 01);
            date.setSeconds(date.getSeconds() + 30);
        }
    }
    if (check_cupcake.length > 0) {
        for (var i = 0; i < check_cupcake.length; i++) {
            date.setSeconds(date.getSeconds() + 20);
        }
    }
    if (check_chantilly.length > 0) {
        for (var i = 0; i < check_chantilly.length; i++) {
            date.setSeconds(date.getSeconds() + 55);
        }
    }

    setTimeout(function () {
        const generateRandomString = (num) => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let result1 = ' ';
            const charactersLength = characters.length;
            for (let i = 0; i < num; i++) {
                result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result1;
        }
        var ticket = document.getElementById("ticket-result");
        ticket.innerHTML = generateRandomString(8);

        var minutos = date.getMinutes();
        var segundos = date.getSeconds();
        var count_time = Math.round((segundos / 60) * 100);
        if(count_time < 10){
            count_time = "0" + count_time;
        }

       var mostrar_tempo = minutos + "." +  count_time;

    var duration = 60 * mostrar_tempo; // Converter para segundos
    display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
    }, 0);
    
}
function limpar_complements() {
    valor_total = 0;
    document.getElementById("box-complements-id1").style.display = "none";
    document.getElementById("box-complements-id2").style.display = "none";
    document.getElementById("box-complements-id3").style.display = "none";
    document.getElementById("box-complements-id4").style.display = "none";
    document.getElementById("box-complements-id5").style.display = "none";
}
function imprimir_cupom() {
    window.print();
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
function limpar(){
    location.reload();
}

window.onload = function () {
    window.location.href = "#login";
    date = new Date("2022-06-24 00:00:00");
};
