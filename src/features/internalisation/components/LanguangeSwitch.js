import React from 'react';
import { Link } from 'react-router-dom';

const LanguangeSwitch = () => {
    return (
        <li>
            <Link to={""}>
                Language <i className="fa fa-chevron-down"></i>
            </Link>
            <ul className="sub-menu">
                <li>
                    <Link to={""} className="dez-page">
                        Albanian
                        </Link>
                </li>
                <li>
                    <Link to={""} className="dez-page">
                        English
                        </Link>
                </li>
            </ul>
        </li>
    )
}

export default LanguangeSwitch;
