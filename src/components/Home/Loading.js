import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex align-items-center justify-content-center vh-100'>
            <div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        </div>
    );
};

export default Loading;