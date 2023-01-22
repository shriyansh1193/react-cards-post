import { useState } from "react";

export const MyScroll = ( start = 30 , pace = 10 ) => {
    const [limit , setLimit] = useState(start);

    window.onscroll = () => {
        if(
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            setLimit(limit+pace);
        }
    };
    return limit;
}