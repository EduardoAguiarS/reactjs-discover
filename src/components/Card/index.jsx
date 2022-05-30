import "./styles.scss"; // Styles

export const Card = (props) => {
    return (
        <div className="card-container">
            <strong>{props.name}</strong>
            <span>{props.time}</span>
        </div>
    )
}