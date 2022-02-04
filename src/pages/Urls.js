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



            
                      {/* <div>{j.name} <br /> 
                      {j.alias} <br /> 
                      {j.uri + j.alias} <br />
                        {j._id} */}
  return (
       <div >
          {data && data.map((j, id) => (
                  <div className="data"
                    key={id}>
                     <Table>
                          <Thead >
                            <Tr>
                              <Th><a href={"/Q/" + j.alias} className="text-green-400"> Name </a></Th>
                              <Th>Alias</Th>
                              <Th><a href={`${Href}` + j.alias} className="text-blue-500"> ShortLink </a></Th>
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
