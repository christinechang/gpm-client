import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class OneDirectory extends Component {
    state = {
        fileObj: [],
        path: '/',
        display: 'none'
    }

   getData = async (path)=> {
       console.log("in getData: URL path = ", path)
       let encodedUrl = encodeURIComponent(path); //  decodeURIComponent()
       const url = "http://localhost:3010/" + encodedUrl;
       console.log("in getData: URL: ",url);
        try{
            let response = await   //get statement doesn't need any params
                fetch(url, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }) 
            
            if (response.ok) {
                let resJson = await response.json()
                console.log('resJSON: ', resJson);
                this.setState({fileObj:resJson})
                return resJson;
            } else {
                console.log('error in fetch in getData')
            }
        }
        catch(err) {    //big error - server problem
            console.log("Fetch Error - try turning on and off CORS")
            alert("in OneDirectory : " + err);
        }
    }
    getSubDir = () => {
        console.log("button clicked:", this.state.display);
        this.setState({display:'block'})
        // element.removeAttribute("style")
    }
    componentDidMount() {
        this.setState({path:this.props.path},()=>{this.getData(this.props.path);})
    }
    componentWillReceiveProps() {
        // console.log("=====componentWillReceiveProps",this.props.path);

        this.setState({path:this.props.path}, ()=> {
            // console.log("componentWillReceiveProps: state:", this.state.path,"props = ",this.props.path);
            this.getData(this.props.path);
        })
    }

    render() {
        let {fileObj} = this.state;
        // console.log("fileObj:", fileObj["Apps"],fileObj)
        let fileArr = Object.entries(fileObj)
        return(
            <div> 
                {/* {elem[1].fullpath} */}
                {fileArr.map((elem, i) => {
                    return (  
                        <div key={i} >
                            <div style = {elem[1].isDir ? styles.itemDir :styles.itemFile}>
                                <button style = {elem[1].isDir ? styles.iconVis: styles.iconHid}><FontAwesomeIcon icon="folder" 
                                    onClick={this.getSubDir} /> </button> 
                                {elem[0]} 
                            </div> 
                            <div id = "subDir" style = {{...styles.subDir , ...{display:this.state.display}}}>

                            </div>
                        </div>
                    )
                }
                )}
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
    title: {
        margin: 20
    },
    pathText: {
        width: '50%',
        minWidth: '200px',

    },
    subDir: {
        height: '100px',
        background: 'lightBlue',
        margin: '10px 30px',
    },
    invisible: {
        display: "none"
    }
      
}