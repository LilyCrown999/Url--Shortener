import React,{ useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Urls = () => {

    const [ data, setData] = useState('')
    
    const Href = "https://uriurl.herokuapp.com/";


            useEffect(() => {

                
            fetch(`${Href}`)
                .then(response => response.json())
                .then(data => setData(data));

            }, [])

  return (
       <div >
         <div className=" font-bold text-gray-500 text-3xl text-center m-5"> List of Saved Urls </div>
          {data && data.map((j, id) => (
                  <div className="data"
                    key={id}>
                     <Table>
                          <Thead >
                            <Tr>
                              <Th><a href={"/Q/" + j.alias} className="text-green-500 hover:text-green-600 cursor-pointer"> Name </a></Th>
                              <Th>Alias</Th>
                              <Th><a href={j.alias} className="text-blue-500 hover:text-blue-600 cursor-pointer"> ShortLink </a></Th>
                              <Th>Url</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>{j.name}</Td>
                              <Td>{j.alias}</Td>
                              <Td>{`${Href}` + j.alias}</Td>
                              <Td>{j.url}</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                  </div> 
          ))}
       </div>
  )
};

export default Urls;
