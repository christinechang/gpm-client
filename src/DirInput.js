 import React, {Component} from 'react';

 export default class DirInput extends Component {
    state = {
        dirName: ''
    }
    handleChange = (event) => {
        this.setState({dirName: event.target.value});
    }
    handleSubmit = (event) => {
        // alert('submitted:  ' + this.state.dirName);
        this.props.getInputText(this.state.dirName);       
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label style = {styles.title}>ROOT NODE:
                    <input id="pathName" type="text" value={this.state.value} style={styles.pathText} 
                    onChange = {this.handleChange}/>
                </label>
                <input style= {styles.submitButt} type="submit"  value="Submit"/>
            </form>
        )
    }
}
let styles = {
    pathText: {
        width: '50%',
        minWidth: '200px',
        margin: '0 10px'
    },
    submitButt: {
        width: 100,
        backgroundColor: '#476daa'
    },
    title: {
        margin: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
}