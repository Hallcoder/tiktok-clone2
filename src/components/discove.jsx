import React , { Component}from 'react';
class Discove extends Component {
    render() { 
        return (
            <div className="border-2 rounded-full  w-2/5 ">
                 <span className="flex flex-row items-center text-md w-5/6 h-8 ml-1"><strong className='text-3xl'>#</strong>&nbsp;{this.props.value}</span>
            </div>
        );
    }
}
 
export default Discove;