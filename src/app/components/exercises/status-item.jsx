import React from "react";
import PropsTypes from "prop-types";
import "./styles.css";

const SatutusItem = ({ children }) => {
    const className = `step-progress-item current`;

    return (
        <div className={className}>
            <strong>{children}</strong>
        </div>
    );
};

SatutusItem.propTypes = {
    children: PropsTypes.object
};

export default SatutusItem;
