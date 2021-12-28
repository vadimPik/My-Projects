import React, { Component } from 'react'
import XMLViewer from 'react-xml-viewer'

const customTheme = {
    // "attributeKeyColor": "#FF0000",
    // "attributeValueColor": "#000FF"
   // overflowBreak: "true"
  }

const XmlRender = (props) => {
    const xml = props.hdrfile;
    return (
        <div>
            <XMLViewer xml={xml} collapsible ={true} theme={customTheme}/>
        </div>
    );
};
  
export default XmlRender;