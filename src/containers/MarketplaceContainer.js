import React from "react";
import PressingContainer from "./PressingContainer";
import AuctionContainer from "./AuctionContainer";

import '../styling.css';

export default function MarketplaceContainer(){
    return(
        <>
            <PressingContainer />
            <AuctionContainer />
        </>
    )
}