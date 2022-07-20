import React from "react";


export const Yaroslav = () => {

    const delUser = () => {
        alert('user should be deleted')
    }

    return (
        <div>
            <h2><input>Yaroslav</input></h2>
            <button>del</button>
            <button>save</button>
        </div>
    );
}