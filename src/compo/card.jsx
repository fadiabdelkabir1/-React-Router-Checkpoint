import { Rating } from "@mui/material";

export default function CardComp({ item }) {
    return (
        <li className="img-container d-flex justify-content-start m-3">
        <img
            src={item.url}
            alt="error"
            style={{ height: 300, width: 250, margin: 10 }}
        ></img>
        <div
            className="overlay justify-content-between"
            style={{ color: "white", height: 300, width: 250, margin: 10 }}
        >
            <h1 style={{fontSize:35}}>{item.title}</h1>
            <Rating name="read-only" value={item.rate} readOnly />
            <p>{item.desc}</p>
            
        </div>
        </li>
    );
}
