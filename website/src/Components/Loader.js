import React from 'react';
import Spinner from 'react-spinner-material';


function Loader() {

    return(
        <div className="loader">
            <Spinner size={120} spinnerColor={"red"} spinnerWidth={2} visible={true} />
        </div>
    )
}

export default Loader;