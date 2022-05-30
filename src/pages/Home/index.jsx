import "./styles.scss";
import {Card} from "../../components/Card";

export const Home = () => {
    return (
        <div className={"home-container"}>
            <h1>Lista de Presença</h1>
            <input type="text" placeholder={"Digite seu nome"}/>
            <button type={"button"}>Adicionar</button>
            <Card name={"Eduardo Aguiar"} time={"10:10:32"}/>
            <Card name={"Eduardo Aguiar"} time={"10:10:32"}/>
            <Card name={"Eduardo Aguiar"} time={"10:10:32"}/>
        </div>
    );
};