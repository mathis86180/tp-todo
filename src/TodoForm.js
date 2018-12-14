import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);

    }


    render(){

        return(
            <div>
                <form>
                    <input type="text" value=''/>
                    <input className='btn' type='submit' value='submit' name='Valider'/>
                </form>
            </div>
        );
    }

}


export { TodoForm }