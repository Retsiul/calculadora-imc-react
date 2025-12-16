import { useState } from 'react'
import styles from './Calculo.module.css'

const Calculo = ({ resultado, setResultado }) => {



    const [altura, setAltura] = useState('');

    const [peso, setPeso] = useState('');

    const [msgAlturaErrada, setAlturaErrada] = useState(false)

    const [msgPesoErrado, setPesoErrado] = useState(false)





    const recebeAltura = (event) => {
        let valorAltura = event.target.value.replace(/\D/g, "");

        if (valorAltura.length >= 3) {
            let numeroConvertido = Number(valorAltura) / 100;
            valorAltura = numeroConvertido.toFixed(2)
        }
        setAltura(valorAltura)

        if (altura > 0) {
            setAlturaErrada(false)
        }
    }

    const recebePeso = (event) => {

        setPeso(event.target.value);
        if (peso > 0) {
            setPesoErrado(false)
        }
    }

    function calcImc() {
        const pesoRecebido = parseFloat(peso)
        const alturaRecebida = parseFloat(altura)

        if (pesoRecebido > 0 && alturaRecebida > 0) {
            const valorDoImc = pesoRecebido / (alturaRecebida * alturaRecebida);
            setResultado(valorDoImc.toFixed(2));
        }
    }




    function alturaErrada() {
        if (altura == 0) {
            setAlturaErrada(true)
        }
        if (altura > 0) {
            setAlturaErrada(false)
        }

    }

    function pesoErrado() {

        if (peso == 0) {
            setPesoErrado(true)
        }
        if (peso > 0) {
            setPesoErrado(false)
        }

    }

    function funcoesDoBot() {

        pesoErrado();

        alturaErrada();

        calcImc();

    }
    return (

        <div className={styles.container}>
            <label for="peso">Peso (kg)</label>
            <input id="peso" value={peso} onChange={recebePeso} placeholder="Ex: 74" />
            <label for="altura">Altura (m)</label>
            <input id="altura" value={altura} onChange={recebeAltura} placeholder="Ex: 176" />
            <button onClick={funcoesDoBot}>Calcular IMC</button>
            {
                (msgAlturaErrada || msgPesoErrado) && (
                    <p>Por favor Digite peso e altura correta!</p>
                )
            }
        </div>

    )
}

export default Calculo