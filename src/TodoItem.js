import React from 'react';

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = { isChecked: false, isStriped: false };
        this.handleChangeCheck = this.handleChangeCheck.bind(this); 
    }

    handleChangeCheck(event){
        this.setState({
            isChecked: !this.state.isChecked,
            isStriped: !this.state.isStriped
        });  
    }

    //afficher le titre en uppercase et une checkbox en fonction de isDone
    render(){
        let { isChecked, isStriped } = this.state;
        let textStriped = '';
        if(this.props.isDone)
        {
            isChecked = true;
            isStriped = true;
        }
        if(isStriped){
            textStriped = 'text-striped';
        }
        return(
            <li className="text-uppercase">
                <p className={ textStriped }>{this.props.title }</p>
                <input type="checkbox" checked={isChecked} onChange={this.handleChangeCheck}/>
            </li>
        );
    }

}

export { TodoItem }