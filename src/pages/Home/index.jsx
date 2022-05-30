import {useEffect, useState} from "react"
import {Card} from "../../components/Card";
import "./styles.scss";

export const Home = () => {
    // State
    const [name, setName] = useState("");
    const [students, setStudents] = useState([]);
    const [user, setUser] = useState({name: "", avatar: ""});

    // Add new student in the list
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
        setName("");
    };

    // Effect
    useEffect(() => {
        // Get user data, fetch from API
        const fetchUser = async () => {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
            const user = data.results[0];
            setUser({
                name: user.name.first,
                avatar: user.picture.large
            });
        };

        fetchUser();
    }, []);

    return (
        <div className={"home-container"}>
            {/* Header */}
            <header>
                <h1>Lista de Presença</h1>

                <div className={"header-content"}>
                    <strong>{user.name}</strong>
                    <img
                        src={user.avatar}
                        alt="Foto de Perfil"
                    />
                </div>
            </header>

            {/* Form */}
            <input
                type="text"
                placeholder={"Digite seu nome"}
                onChange={e => setName(e.target.value)}
                onKeyPress={e => e.key === "Enter" ? handlePerson() : null}
                value={name}
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