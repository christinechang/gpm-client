import React, {Component} from 'react';
import OneItem from './OneItem';

export default class OneDirectory extends Component {
    state = {
        fileArr: [],
        path: '/',
        display: 'none'
    }

   getData = async (path)=> {
       console.log("in getData: URL path = ", path)
       let encodedUrl = encodeURIComponent(path); //  decodeURIComponent()
       const url = "http://localhost:3010/" + encodedUrl;
       console.log("in getData: URL: ",url);
        try{
            let response = await   
                fetch(url, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }) 
            
            if (response.ok) {
                let resJson = await response.json()
                // console.log('resJSON...: ', resJson);
                await this.setState({fileArr:resJson})    
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
        this.setState({display:'block'})
    }
    componentDidMount() {
        this.setState({path:this.props.path},()=>{this.getData(this.props.path);})
    }
    componentWillReceiveProps() {   //handles changes in properties
        this.setState({path:this.props.path}, ()=> {
            this.getData(this.props.path);
        })
    }
    render() {
        let {fileArr} = this.state;
        return(
            <div> 
                {fileArr.map((elem, i) => {
                    return (  
                        <OneItem key = {i} item = {elem} />
                    )
                }
                )}
            </div>
        );
    }
}
