import React from "react";
import CurrencyAbbreviationItem from "./CurrencyAbbreviationItem";

export default function CurrencyItem(props) {
    return (
        <ul name="" id="">
            {props.list.map(el => {
                return <CurrencyAbbreviationItem abbreviation={el} key={el} onCurrencyAdd={props.onCurrencyAdd}/>
            })}
        </ul>
    )
}
