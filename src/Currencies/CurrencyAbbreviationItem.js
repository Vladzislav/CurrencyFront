import React from "react";

export default function CurrencyAbbreviationItem(props) {
    return (
        <li data-abbreviation={props.abbreviation}>
            <span
                data-abbreviation={props.abbreviation}
            >
                {props.abbreviation}
            </span>
            <span
                data-abbreviation={props.abbreviation}
            >
                {props.name}
            </span>
        </li>
    )
}
