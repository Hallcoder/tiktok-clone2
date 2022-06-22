import React from 'react';
function ErrorBadge({message}) {
    return ( 
        <div className='w-10/12 h-6 text-red-600'>
            <p className='underline decoration-wavy mb-2'>{message}</p>
        </div>
     );
}

export default ErrorBadge;