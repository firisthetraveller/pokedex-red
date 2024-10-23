import React, { useEffect, useState } from 'react';

import './Tooltip.css';

/** WARNING: It's a bit broken when tooltip is on the side,
 * but I only used it once so I'll fix it when I'll need it more than once */

const Tooltipped = ({ className = "", tooltipClassName = "", children, width, text }) => {
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);
    const style = { width: width };

    useEffect(() => {
        if (clicked) {
            setTimeout(() => setClicked(false), 3000);
        }
    }, [clicked]);

    return (
        <div
            className={`${className} cursor-help`}
            onClick={() => setClicked(true)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {children}

            {(clicked || hovered) &&
                <p className={`${tooltipClassName} tooltiptext ml-14`} style={style}>
                    {text.split('\n').map(l => <React.Fragment><span>{l}</span><br/></React.Fragment>)}
                </p>
            }
        </div>
    );
}

export default Tooltipped;