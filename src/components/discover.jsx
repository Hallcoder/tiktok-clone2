import React, { Component } from 'react';
import Discove from './discove';
const Discover = () => {
    return (
        <div>
            <h2>Discover</h2>
            <div className="w-full flex flex-row flex-wrap h-2/6">
                <Discove value={"250"}/>
                <Discove value={"gameChanger"}/>
                <Discove value={"غنية_لؤ"} />
                <Discove value={"250"}/>
            </div>
        </div>
      );
}
 
export default Discover;