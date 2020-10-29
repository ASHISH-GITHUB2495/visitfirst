import React from "react";
import TopHeadlines from "./TopHeadlines";
import Everything from "./Everything";
import Sources from "./Sources";

function NewsChose(props){

    if(props.chosen===1)
        return <TopHeadlines /> ;
    else  if(props.chosen===2)
        return <Everything />;
    else  if(props.chosen===3)
        return  <Sources />;
    else
        return <h1> Select Please</h1>;


}

export default NewsChose;