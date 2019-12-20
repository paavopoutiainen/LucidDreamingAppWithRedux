import React from 'react';
import Paper from '@material-ui/core/Paper';
import {  Link } from "react-router-dom";

const DreamSummary = ({name, content, date, lucid, id}) => {
    
    return (
        
        <Paper style={{padding : 10, backgroundColor: "pink"}}>
            <Link  to={`analyze/dream/${id}`}>
                {name}
            </Link>
            <div>
                <p>{`${content.substring(0, 100)}...`}</p>
                <p>{date.toString()}</p>
                {lucid ? <span>Lucid dream</span>: null}
            </div>
            
        </Paper>     
        
    );
};

export default DreamSummary;