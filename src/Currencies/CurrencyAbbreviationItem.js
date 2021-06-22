import React from "react";

export default function CurrencyAbbreviationItem(props) {
    return (
        <li onClick={event => props.onCurrencyAdd(event.target.innerText)}>{props.abbreviation}</li>
    )
}
