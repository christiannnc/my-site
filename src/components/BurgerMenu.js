import React from "react";

export default function BurgerMenu({ tabs }) {
    tabs.map((tab) => (
        <div>
            <h2>{tab.name}</h2>
        </div>
    ));
}
