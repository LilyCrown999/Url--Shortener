 import React , {useState} from 'react';
 


 const Form = () => {

    const Href = "https://uriurl.herokuapp.com/";

    const [ url, setUrl] = useState('')
    const [ name, setName] = useState('')
    const [ data, setData] = useState('')
    const [ uri, setUri] = useState('')
    const [msg, setMsg] = useState('')
    
    function link(){
        // var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
        var link = url;
            if (!link.match('^https?:') ) 
                link = 'https://' + link
                return link
        };   

    function set(){
        return post()
    }
     
   async function post(){

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, url: link() })
        };
            
        const response = await fetch(`${Href}`, requestOptions);
        const data = await response.json();
        setData(data.alias)
        setUri(data.uri)
        setMsg("Your link : ")

    }



    
    const handleSubmit = (e) => {
        // console.log(url);
        if (e.code === 'Enter' || e.code === 'Submit')
          e.preventDefault();
    };

   return (
       <>

        <div
        className="
            font-sans
            tracking-wide
            bg-gray-500 bg-opacity-60
            w-full
            min-h-screen
            flex
            h-full
            top-0
            backdrop-filter backdrop-blur-lg
        "
    >
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
        <div
            className="
                p-2
                bg-white
                z-10
                justify-center
                items-center
                w-full
                mx-10
                m-auto
                sm:m-auto
                h-1/3
                sm:w-1/2
                sm:h-1/3
                md:w-1/2
                md:h-1/3
                lg:w-1/3
                lg:h-1/3
                rounded-3xl
                filter
                drop-shadow-2xl
            "
        >
            <div
                className="flex p-1 mt-1 mx-2 sm:mx-4 sm:mt-4 border-black items-center justify-between"
            >
                <span className="font-mono text-2xl "> Url Shortener</span>
            </div>
            <div className="ml-2 mr-2 mt-3 sm:mx-6 sm:mt-8">

                <p className="block"> {msg}
                <a className="underline
                text-blue-500
                hover:text-red-400 " 
                href={uri+data} 
                target="_blank" 
                rel="noreferrer"> 
                {uri+data} 
                </a>
                </p>
             </div>   
            <div className="ml-2 mr-2 mt-3 sm:mx-6 sm:mt-8">
                <h1 className="text-xl text-gray-600 sm:text-md font-bold">
                   Shorten your url link !
                </h1>
                <p className="text-xs sm:text-sm text-gray-400 mt-2">
                    Takes less than 10 minutes to fill out all the information needed to shorten your generate your url shortlink.
                </p>
            </div>
            <div className="mx-2 mt-1 sm:mx-6 sm:mt-8">
                <form >
                    <div className="relative">
                        <label htmlFor="url" className="text-gray-700 text-xs sm:text-md">Url</label>
                        <input
                            name="url"
                            placeholder="https://google.com"
                            onChange={(e) => setUrl(e.target.value)}
                            type="url"
                            className="
                                w-full
                                h-12
                                sm:h-9
                                border-b-2 border-gray-300
                                focus:border-blue-300
                                outline-none
                            "
                        />
                    </div>
                    <div className="relative mt-1 sm:mt-7">
                        <label htmlFor="name" className="text-gray-700 text-xs sm:text-md"
                            >Name</label
                        >
                        <input
                            name="name"
                            type="text"
                            placeholder="Google"
                            onChange={(e) => setName(e.target.value)}
                            className="
                                w-full
                                h-12
                                sm:h-9
                                border-b-2 border-gray-300
                                focus:border-blue-300
                                outline-none
                            "
                        />
                    </div>
                </form>
                <p className="text-xs sm:text-sm text-blue-400 hover:text-red-400 mt-2 underline  ">
                    <a href="/all"> Check out all saved shortened urls on this site </a>
                        </p>
            </div>
            
           
            <div className="justify-center items-center mt-2 sm:mt-5 flex">
                <button
                    className="
                        bg-blue-600
                        hover:bg-blue-500
                        text-gray-100 m-12
                        rounded-md
                        h-8
                        sm:h-auto
                        sm:rounded-lg
                        w-20
                        sm:w-52
                        p-1
                        text-xs
                        sm:text-md
                        sm:p-3
                    "
                    onSubmit={handleSubmit}
                    onClick={set}
                >
                    Shorten !
                </button>
            </div>
        </div>
    </div>

        </>
   )
    
}
 
 
 export default Form;
 