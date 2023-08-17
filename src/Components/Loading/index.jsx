import React from "react";
import './loading.css'
const Loading = () => {
  return (
    <div class="preloader">
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
  );
};

export default Loading;
