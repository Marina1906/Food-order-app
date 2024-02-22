import { useState } from "react";

async function sendHttpRequest (url, config) {
 const response = await fetch (url, config);

    const resData = await response.json ();

 if (!response.ok) {
    throw new Error (
        resData.message || 'Something went wrong, failed to send request.'
    );
 }

 return resData;
}

export default function useHttp() {
 const [error, setError] = useState ();

async function sendRequest () {
    try{

    

  const resData =  sendHttpRequest();
} catch (error) {
    setError(error.message || 'Something went wrong!');
}

}
}