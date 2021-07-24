import React from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Title } from "../Input/InputElements";


export const InputAutocomplete = (props) => {
  return (<>
    <Title style={{marginLeft: 3, marginTop: 3, marginBottom: 1}}> {props.title}</Title>
      <div style={{width: "280px", marginLeft: 3}}>
      <div style={props.width}> 
    <ReactSearchAutocomplete
    items={props.dados}
    styling= {{background: "#FFFFFF",
      borderRadius: "5px",
      border: 0,
      width: "260px",
      height: "37px",
      fontSize: "13px",
      boxShadow: "10px",
    }}
    showIcon={false}
    placeholder={props.placeholder}
    />
    </div>
    </div>
    </>
  )
};
