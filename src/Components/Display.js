import React from 'react';

const Display = (props) => {
    const {colorList, setColorList} = props;
    return(
        <div>
            {
            colorList.map((color) => (
                <div style={{
                    height:"200px",
                    width:"200px",
                    display:"inline-block",
                    margin:"10px",
                    backgroundColor: color,
                }}>
                </div>
            ))
            }
        </div>
    )
}
export default Display;