import { Counter } from "./Counter.1";

function Msg({ pic, name }) {
    // const name = props.name
    return (
        <div>
            <img className="user-pic" src={pic} alt={name} />
            <h1>
                Hello, <span className="user-name">{name}</span>🤩😎❤️
            </h1>
            <Counter />


        </div>
    );
}
