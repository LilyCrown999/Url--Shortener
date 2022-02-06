
import { useState, useEffect} from "react";


const People = ({ match }) => {
    const {
      params: { alias },
    } = match;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    
    const Href = "https://uriurl.herokuapp.com/";
    // const href = "http://localhost:5500/";

  
    useEffect(() => {
      fetch(`${Href}Q/${alias}`, {})
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, [alias]);

    function res() {
      return window.location = `${Href}${alias}`
    }
    // onLoad={res()}
    //  let pageUrl =  window.location.href;
     

    return (
      <>
        {!isLoading && (
          <div onLoad={res()}  className="m-6">
              <b> Redirecting... </b>
            <hr/> If the redirecting takes too long, click <a
              className="
               underline
               cursor-pointer
               text-blue-500 
               hover:text-red-500"
              href={data.url}>
                 here
            </a> . <br />
             Redirecting to {data.url}
          </div>
        )}
      </>
    );
  };


  export default People;