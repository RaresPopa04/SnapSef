import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/components/SearchBox.css";

const SearchBox = () => {
    return(
        <div className="searchContainer">
                <div className="searchBox">
                    <div className="iconContainer">
                        <FontAwesomeIcon className="icon" icon={faSearch} />

                    </div>
                    <input type="text" placeholder="Caută rețete" />

                </div>
                <div className="filter">
                    <FontAwesomeIcon icon={faSliders} />
                </div>
            </div>
    )
};

export default SearchBox;