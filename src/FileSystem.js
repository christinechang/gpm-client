import OneDirectory from './OneDirectory';
import DirInput from './DirInput';
import React, {Component} from 'react';

export default class FileSystem extends Component {
    state = {
        thePath: '/'
    }
    getInputText = (value) => {
        this.setState({thePath: value});
    }
    render() {
        return(
            <div style = {styles.container}> 
                <DirInput getInputText = {this.getInputText}  /> {/* get path from user*/}
                <h2 style = {styles.container}>{this.state.thePath} </h2>           {/* display path*/} 
                <OneDirectory path = {this.state.thePath}/>  {/* show items in one directory*/}
            </div>
        );
    }
}
let styles = {
    container: {
        margin: 20
    }
}