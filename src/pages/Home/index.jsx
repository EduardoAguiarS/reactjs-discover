import "./styles.scss";

export const Home = () => {
    return (
        <div className={"home-container"}>
            <h1>Lista de Presença</h1>
            <input type="text" placeholder={"Digite seu nome"}/>
            <button type={"button"}>Adicionar</button>
        </div>
    );
};