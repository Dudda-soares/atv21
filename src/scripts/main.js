const dataDoEvento = new Date("Feb 25, 2026 20:00:00")
const tempoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function(){
    const dataAgora = new Date();
    const tempoAgora = dataAgora.getTime();

    const tempoParaEvento = tempoEvento - tempoAgora;

    const dias = 1000*60*60*24;
    const hora = 1000*60*60;
    const min = 1000*60;
    
    const diasAteEvento = Math.floor(tempoParaEvento / dias )
    const horasAteEvento = Math.floor(tempoParaEvento % dias / hora)
    const minAteEvento = Math.floor(tempoParaEvento % hora / min)
    const segAteEvento = Math.floor(tempoParaEvento % min / 1000)

    document.getElementById('dia').innerHTML = `${diasAteEvento}d`
    document.getElementById('hora').innerHTML = `${horasAteEvento}h`
    document.getElementById('minutos').innerHTML = `${minAteEvento}m`
    document.getElementById('seg').innerHTML = `${segAteEvento}s`


    if(tempoParaEvento < 0){
        clearInterval(contaHoras)
        document.getElementById('conatdor').innerHTML= `evento indisponivel`
    }
}, 1000)
