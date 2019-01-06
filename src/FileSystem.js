import OneDirectory from './OneDirectory';
import DirInput from './DirInput';
import React, {Component} from 'react';

export default class FileSystem extends Component {
    state = {
        thePath: '/',
        textIn: ''
    }

    getInputText = (value) => {
        this.setState({thePath: value});
    }
    render() {
        return(
            <div style = {styles.container}> 
                <DirInput getInputText = {this.getInputText}  />
                <h2 style = {styles.container}>{this.state.thePath} </h2>                {/* get path */}
               {/* get path */}
                <OneDirectory path = {this.state.thePath}/>  
            </div>
        );
    }
}
let styles = {
    itemDir:{
        color: "blue",
        fontSize: '16px',
        margin: 0,
        marginLeft: 20
    },
    itemFile:{
        color: "black",
        fontSize: '16px',
        margin: 0,
        marginLeft: 20
    },

    iconHid: {
        visibility: "hidden",
        marginRight: "10px"
    },
    iconVis: {
        visibility: "visible",
        marginRight: "10px"
    },
    pathText: {
        width: '50%',
        minWidth: '200px',
        marginLeft: 15
    },
    hidden: {
        display: "none"
    },
    container: {
        margin: 20
    }
      
}