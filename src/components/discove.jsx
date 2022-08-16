import React , { Component}from 'react';
class Discove extends Component {
    render() { 
        return (
            <div className="border m-1 border-red-500 rounded-full">
                 <span className="flex flex-row items-center text-md w-5/6 h-8 ml-1"><strong className='text-xs'>#</strong>&nbsp;{this.props.value}</span>
            </div>
        );
    }
}
 
export default Discove;