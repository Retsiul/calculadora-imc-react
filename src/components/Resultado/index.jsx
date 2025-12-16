import { useEffect, useState } from 'react'
import styles from './Resultado.module.css'

const Mensagem = ({ resultado }) => {
    const [estadoMsg, setEstadoMsg] = useState(false)


    useEffect(() => {
        if (resultado) {
            setEstadoMsg(true);
        } else {
            setEstadoMsg(false);
        }
    }, [resultado]);


    function mensagens() {

        if (resultado < 18.5) {
            return <>

                <div className={styles.containerResultados}>
                    <div>  <p>Seu IMC é
                        <br /> <span>({resultado})</span> </p></div>
                    <div> <h3>Abaixo do peso</h3>
                        <p>Seu peso está abaixo do recomendado!</p></div>
                </div>
            </>
        }

        if (resultado >= 18.5 && resultado <= 24.9) {

            return <>
                <div className={styles.containerResultados}>
                    <div>  <p>Seu IMC é
                        <br /> <span>({resultado})</span> </p></div>
                    <div><h3>Normal</h3>
                        <p>Parabéns! Você está dentro do peso adequado!</p>
                    </div>
                </div>
            </>
        }

        if (resultado >= 25 && resultado <= 29.9) {
            return <>
                <div className={styles.containerResultados}>
                    <div>  <p>Seu IMC é
                        <br /> <span>({resultado})</span> </p></div>
                    <div> <h3>Sobrepeso</h3>
                        <p>Seu peso está acima do recomendado!</p></div>
                </div></>

        }
        if (resultado > 30) {
            return <div className={styles.containerResultados}>
                <div>   <p>Seu IMC é
                    <br /> <span>({resultado})</span> </p></div>
                <div><h3>Obesidade</h3>
                    <p>Você precisa procurar cuidados médicos!</p></div>
            </div>
        }
    }
    return (
        <>

            {/* <div className={styles.containerResultado}> */}
            {/* {resultado} */}
            {estadoMsg && (
                <div className={styles.container}>{mensagens()}</div>)
            }
            {/* </div> */}

        </>
    )
}

export default Mensagem