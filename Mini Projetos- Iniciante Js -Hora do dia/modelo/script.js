function carregar(){
    var msg = document.getElementById('msg');
    var calenDiaSemana = document.getElementById('calenDiaSemana');
    var calenData = document.getElementById('calenData');
    var calenMes = document.getElementById('calenMes');
    var calenAno = document.getElementById('calenAno');
    var img = document.getElementById('imagem');
    var dia = new Date(); 
    var hora = dia.getHours();
    var min = dia.getMinutes();
    var diaSema = dia.getDay();
    var data = dia.getDate();
    var mes = dia.getMonth();
    var ano = dia.getFullYear();

// esse bloco de if é para adiconar o zero em horas e minutos
    if(hora<10){
        hora= `0${hora}`
    } if(min<10){
        min= `0${min}`
    } // Criando if e mudando a foto de fundo usando condições
    if(hora >=0 && hora<12){
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#F7F6C9'; //Comando para dar estilo no fundo
    }else if(hora >=12 && hora <=18){
        // Boa Tarde
        img.src = 'Tarde.png'
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#030A17';
    }
    calenAno.innerHTML = `<strong> ${ano}        (Ano)</strong>`;
    calenData.innerHTML = `<strong> ${data}      (Data)</strong>`;
    msg.innerHTML = `<strong> ${hora}: ${min}    (Horário)</strong>`;
    switch(diaSema){
        case 0:
            calenDiaSemana.innerHTML = `<strong>Domingo (Dia)</strong> `
            break
        case 1:
            calenDiaSemana.innerHTML = `<strong>Segunda-Feira (Dia)</strong> `
            break
        case 2:
            calenDiaSemana.innerHTML = `<strong>Terça-Feira (Dia)</strong> `
            break
        case 3:
            calenDiaSemana.innerHTML = `<strong>Quarta-Feira (Dia)</strong> `
            break
        case 4:
            calenDiaSemana.innerHTML = `<strong>Quinta-Feira (Dia)</strong> `
            break
        case 5:
            calenDiaSemana.innerHTML = `<strong>Sexta-Feira (Dia)</strong>`
            break
        default:
            calenDiaSemana.innerHTML = `<strong>Sábado (Dia)</strong>`
            break
    } switch(mes){
        case 0:
            calenMes.innerHTML = '<strong> Jan (Mês)   Temp.Média 21,5ºC</strong> '
            break
        case 1:
            calenMes.innerHTML = '<strong> Fev (Mês) Temp.Média 21,4ºC</strong>'
            break
        case 2:
            calenMes.innerHTML = '<strong> Mar (Mês)  Temp.Média 20,5ºC</strong>'
            break
        case 3:
            calenMes.innerHTML = '<strong> Abr (Mês)    Temp.Média 18,8ºC</strong>'
            break
        case 4:
            calenMes.innerHTML = '<strong> Mai (Mês)    Temp.Média 16,6ºC</strong>'
            break
        case 5:
            calenMes.innerHTML = '<strong> Jun (Mês)    Temp.Média 15,5ºC</strong>'
            break
        case 6:
            calenMes.innerHTML = '<strong> Jul (Mês)    Temp.Média 15,4ºC</strong>'
            break
        case 7:
            calenMes.innerHTML = '<strong> Ago (Mês)    Temp.Média 16,2ºC</strong>'
            break
        case 8:
            calenMes.innerHTML = '<strong> Set (Mês)    Temp.Média 17,4ºC</strong>'
            break
        case 9:
            calenMes.innerHTML = '<strong> Out (Mês)    Temp.Média 18,6ºC</strong>'
            break
        case 10:
            calenMes.innerHTML = '<strong> Nov (Mês)    Temp.Média 19,8ºC</strong>'
            break
        default:
            calenMes.innerHTML = ' <strong>Deze (Mês)   Temp.Média 20,3ºC</strong>'
            break
         
    } 
    
}