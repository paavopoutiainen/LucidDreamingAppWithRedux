import React from 'react';
import Grid from '@material-ui/core/Grid';
import DreamSummary from "./DreamSummary"
import { connect } from "react-redux"



const Dreamlist = (props) => {


 

    let dreamSummaries = (
                <Grid container spacing={1} direction = "column" alignContent="center">
                    {props.dreams.map((dream, index) => {
                        return (<Grid item sm={4} xs={12} key={index} >
                            <DreamSummary 
                                name={dream.name}
                                content={dream.content}
                                date={dream.date}
                                lucid={dream.lucid}
                                id={dream.id}
                            >
                            </DreamSummary>
                        </Grid>)
                    })}
                </Grid>)

    return (
        <div style={{ padding: 15 }}>
            
                {dreamSummaries}
           
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        dreams: state.dreams
    }
}

export default connect(mapStateToProps)(Dreamlist)