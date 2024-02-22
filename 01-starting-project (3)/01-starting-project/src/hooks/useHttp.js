async function sendHttpRequest (url, config) {
 const response = await fetch (url, config);

    const resData =

 if (!response.ok) {
    throw new Error ();
 }
}

export default function useHttp() {


}