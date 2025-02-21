import { useState } from 'react';
import {AsyncPaginate} from 'react-select-async-paginate'
import { geoDbOptions, geoDbUrl } from './api';


export default function Search({onInputChange}){

    const[input,setInput] = useState(null)

    const handleLoadOptions = (input)=>{
        return fetch(`${geoDbUrl}?minpopulation=1000000&namePrefix=${input}`, geoDbOptions)
        .then((response)=> response.json())
        .then((response)=>{
            return {
                options: response.data.map((city)=>{
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                }
            })}
        })
    }

    const handleOnChange = (newInput)=>{
        setInput(newInput)
        onInputChange(newInput)
    }
    
    return(
        <div className='w-[50%]  mt-[15px]'>
            <AsyncPaginate
                placeholder="Search your city..."
                debounceTimeout={800}
                onChange={handleOnChange}
                value={input}
                loadOptions={handleLoadOptions}
            />
        </div>
    );
}