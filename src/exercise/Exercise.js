// React props exercise

import Bonus from "../bonus/Bonus";

// 1a
function Exercise({good = `Awesome`, bad = `Terrible`}){
    // 2a
    return (
        <div>
            {/* 3c */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
            <Bonus />
        </div>
    );
}


// 1b
export default Exercise;