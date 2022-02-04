
import { useState, useEffect} from "react";
import moment from "moment";

const Url = ({ match }) => {
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

  
    return (
      <>
        {!isLoading && (
          <>
           <div>
             <h1 className="
                text-center text-4xl h1
                p-4
                border-t mr-0 
                border-b border-l
                font italic"> Url Inner information </h1>
            <div className="
                  text-gray-500
                  text-center m-6
                  font italic">
                <span>Name:  <br /> {data.name}</span> <br />
                <span>Alias:  <br /> {data.alias}</span> <br />
                <span >Url:  <br /> {data.url} </span> <br />
                <span>ShortLink:  <br /> {`${Href}` + data.alias}</span><br />
                <span>Creation Date:  <br /> {moment( data.createdAt).format('LLLL')}</span><br />
              </div>

              <a href="/" className="underline hover:text-red-500 text-blue-400" > Back to homepage </a> <br/>
              <a href={`${Href}` + data.alias} className="underline hover:text-red-500 text-blue-400"> Go to Url </a>

           </div>
          </>
        )}
      </>
    );
  };


  export default Url;