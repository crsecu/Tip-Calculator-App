import React, {useState} from 'react';


export default function BillDetails(props) {


     return (
      <div>
        <form>
          <input type="number" name={props.name} onChange={props.state}></input>
        </form>

        
      </div>
    );
}