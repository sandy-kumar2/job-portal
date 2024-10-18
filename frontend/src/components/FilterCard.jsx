import React from 'react';
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Mumbai", "Kolkata", "Banglore"],
  },
  {
    filterType: "Industry",
    array: ["Software Development", "Banking", "Management", "Chatered Accountant"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-80k", "80k-150k", "150k-300k"],
  }
];

const FilterCard = () => {
  const[selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  }

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  },[selectedValue]);

  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {
          filterData.map((data, index) => (
            <div key={index}>
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {data.array.map((item, idx) => {
                const itemId = `id${index}-${idx}`
                return (
                  <div key={index} className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value={item} id={itemId}/>
                    <Label htmlFor={itemId}>{item}</Label>
                  </div>
                );
              })}
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard