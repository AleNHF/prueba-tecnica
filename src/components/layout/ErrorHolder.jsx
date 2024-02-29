import React from 'react';

function ErrorHolder() {

    return (
        <div className="error-container mt-[35px] text-center">
            <div className="error-image">
                <img
                    src="/icons/error.png"
                    alt="Error"
                    className="w-[100px] mx-auto"
                />
            </div>
        </div>
    );
}

export default ErrorHolder;