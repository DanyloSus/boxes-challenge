import React from "react"

export default function Box (props) {
    return(<div className="box" key={props.id}
        style={{backgroundColor: props.on ? "#222" : "#ccc"}}
    ></div>);
}