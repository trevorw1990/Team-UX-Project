import './SearchBar.css';
import { useState, useEffect } from "react";
import { statesList, artistRoles } from "../../utilities/list-items/list-items";

export default function SearchBar({user, filter, setFilter, type, refreshFilter, setRefreshFilter}){

  const handleChange = (evt) => {
    setFilter({
      ...filter,
      [evt.target.name]: evt.target.value
    })
  }

  const addRole = (e, aRole) => {
    console.log(e.target.checked) // print is checked
    const arr = filter.roles
    console.log(arr.indexOf(aRole)) // test if idx is correct
    if (e.target.checked) {
        arr.push(aRole)
        setFilter({...filter, roles: arr})
    } else {
        const indexToDelete = arr.indexOf(aRole)
        arr.splice(indexToDelete, 1)
        setFilter({...filter, roles: arr})
    }
  }

  const addDate = (event, isStart) => {

    const newDate = event.target.value

    if(event.target.name === 'dateStartEnd') {

        const dateArr = filter.dates
        if (isStart) {
            dateArr[0] = newDate
            setFilter({ ...filter, dates: dateArr })
        } else if (!isStart) {
            dateArr[1] = newDate
            setFilter({ ...filter, dates: dateArr })
        } 
    }
  }

  const clearFilter = (evt) => {
    if(type === 'collaborator'){
      setFilter({
        usState: '',
        zipCode: '',
        roles: [],
        keyword: ''
      })
    } else {
      setFilter({
        usState: '',
        zipCode: '',
        roles: [],
        dates: []
      })
    }
    setRefreshFilter(!refreshFilter);
  }

  const applyFilter = (evt) => {
    setRefreshFilter(!refreshFilter);
  }

  const search = () => {
    return (
      <div>

        <div>
          <label> state
            <select name="usState" value={filter.usState} onChange={handleChange} required >
                {statesList.map((usState, index) => (
                  <option value={usState.value} key={index} >{usState.label}</option>
                ))}   
            </select>
          </label>
          <label>zip code
              <input type="text" name="zipCode" value={filter.zipCode} onChange={handleChange} required />
          </label>
        </div>
        <div className='form-columns'>
          {
            artistRoles.map((theRole, index) => {
              return(
                <div className={`form-column-${index % 3 + 1}`} key={index}>
                    <label>
                        <input type="checkbox" name="roles" value={theRole.role} onChange={(e) => addRole(e, theRole.role)}/>
                        {theRole.role}
                    </label>
                </div>
              )
            })
          }
        </div>
        {
          type === 'project' && 
            <div className='date-range-select'>
              <p>Date Range:</p>
              <label>Start: <input type="date" name="dateStartEnd" onChange={(e) => {addDate(e, true)}}/></label>
              <label>End: <input type="date" name="dateStartEnd" onChange={(e) => {addDate(e, false)}}/></label>
            </div>
        }
        <button onClick={applyFilter}>Apply Filters</button>
        <button onClick={clearFilter}>Clear Filter</button>
      </div>
    )
  }

  return search();
}
