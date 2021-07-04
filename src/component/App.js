import React from "react";

export default function (props) {
    const Index = () => {
        return <div>Hello {props.name}!!</div>;
    };
    return (
        <Index />
    )
}