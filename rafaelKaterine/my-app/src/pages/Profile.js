import { useParams } from "react-router-dom";
export default function Profile() {
    const { name } = useParams();
    console.log(name);
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Desde profile con el nombre de {name}</p>
        </div>
    );
}