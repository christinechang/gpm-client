import React, {Component} from 'react';
import OneDirectory from './OneDirectory';
// import FilePreview from 'react-preview-file';
// import logger from 'logging-library';
///////////////
// import FileViewer from 'react-file-viewer';
// import {CustomErrorComponent} from 'custom-error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class OneItem extends Component {
    state = {
        fileObj: [],
        path: '/',
        display: 'none',
        hoverStyle: {marginRight: "10px",
                    backgroundColor: 'white',
                    border: 0}
    }
    hover = () => {
        this.setState({hoverStyle:{...styles.buttVis,...{backgroundColor: '#ddf'}}})
    }
    noHover = () => {
        this.setState({hoverStyle:{...styles.buttVis,...{backgroundColor: 'white'}}})
    }
    getSubDir = () => {
        let disp = this.state.display === 'none'?'block':'none';
        this.setState({display:disp});
    }
    openSubBlock = () => {
        let disp = this.state.display === 'none'?'block':'none';
        this.setState({display:disp});
    }
    // onError(e) {
    //     console.log(e, 'error in file-viewer');
    // }
    render() {
        let item = this.props.item;
        // FOR FILE PREVIEW:
        // let filePrevuPath = new File(['someBase64'], (item.isDir ? '' : item.fullpath));
        let file = item.fullpath;
        let type = file.substr(file.lastIndexOf('.')+1);

        return (
            <div style = {styles.bottom}> 
                <div style = {item.isDir ? styles.itemDir :styles.itemFile}>

                    <button style = {this.state.hoverStyle} 
                        onMouseOver={this.hover} onMouseLeave={this.noHover}>
                            <FontAwesomeIcon icon={item.isDir ? "folder": "file"}  onClick={this.openSubBlock} 
                            style ={item.isDir ? styles.dirIcon : styles.fileIcon}/> 
                    </button>

                    {item.name} 
                </div> 

                {item.isDir ?
                    <div style = {{...styles.subDir , ...{display:this.state.display}}}>
                        {this.state.display === 'block' ?  <OneDirectory path = {item.fullpath}/> : ''} 
                    </div>
                    :
                    <div style = {{...styles.filePrevu , ...{display:this.state.display}}}>
                        {this.state.display === 'block' ?  
                            <h4>File Preview Here of {file} (type = .{type})</h4>
                            //THIS IS WHERE FILE PREVIEW CODE GOES.  TRIED THESE but didn't have time to get to work
                            // <FilePreview file={filePrevuPath}>
                            //     {(preview) => <img src={preview} />}
                            // </FilePreview>
                            ///////////////
                            // <FileViewer
                            //     fileType = {type}
                            //     filePath = {file}
                            //     errorComponent = {CustomErrorComponent}
                            //      />
                        : ''} 
                    </div>
                }
            </div>
        )
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
    // buttHid: {
    //     visibility: "hidden",
    //     marginRight: "10px"
    // },
    buttVis: {
        visibility: "visible",
        marginRight: "10px",
        backgroundColor: 'white',
        border: 0,
    },
    dirIcon: {
        color: 'grey'
    },  
    fileIcon: {
        color: '#bbb',
        margin: '0 1px 0 2px'
    },
    subDir: {
        margin: '10px 60px',
        borderBottom: '1px solid #eee',
    },
    filePrevu: {
        margin: '10px 60px',
        height: 200,
        backgroundColor: "#ddd"
    },
    bottom: {
        paddingBottom: 3,
        borderBottom: '1px solid #eee',
    },

}