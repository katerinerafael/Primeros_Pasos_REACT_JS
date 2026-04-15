import{ useState , useEffect } from 'react';    

export default function Welcome(props) {
    const [counter, setCounter] = useState(0);  
    const [semaforo, setSemaforo] = useState(false);
    const {message, name} = props;

    useEffect(() => {
        console.log(semaforo);
    }, [semaforo]);

    const contar = () => {
        setCounter(counter + 1);
        setSemaforo(!semaforo);
    };
    console.log(semaforo);

    return (
        <div>
            <h2>Hola, {name}</h2>
            <h2>contador de REACT con Hooks</h2>
            <h3>El numero del contador es {counter}</h3>
            <p>El semaforo esta de color {semaforo ? 'verde' : 'rojo'}</p>
            <button type="submit" onClick={contar}>
                Sumar Contador
            </button>
        </div>
    ); 
}