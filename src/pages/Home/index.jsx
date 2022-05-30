import {useState} from "react"
import "./styles.scss";
import {Card} from "../../components/Card";

export const Home = () => {
    const [name, setName] = useState("");
    const [students, setStudents] = useState([]);

    const handlePerson = () => {
        if (name.trim() === "") return;
        const newStudent = {
            id: students.length + 1,
            name: name,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })
        };

        setStudents([...students, newStudent]);
    }

    return (
        <div className={"home-container"}>
            {/* Header */}
            <header>
                <h1>Lista de Presença</h1>
            </header>

            {/* Form */}
            <input
                type="text"
                placeholder={"Digite seu nome"}
                onChange={e => setName(e.target.value)}
            />
            <button
                type={"button"}
                onClick={handlePerson}
            >
                Adicionar
            </button>

            {/* Card */}
            {students.map(student => (
                <Card
                    name={student.name}
                    time={student.time}
                    key={student.id}
                />
            ))}
        </div>
    );
};