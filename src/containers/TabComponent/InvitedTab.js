import React, { useState, useEffect } from "react";
import InvitedCard from "../CardComponent/InvitedCard";
import Axios from 'axios';

const InvitedTab = () => {
  const [tradieList, setTradieList] = useState([])
  const [location, setLocation] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
      Axios.get('https://test-fullstack-project.herokuapp.com/api/get').then((response) => {
          setTradieList(response.data)
      })
  }, [])

  useEffect(() => {
      Axios.get('https://test-fullstack-project.herokuapp.com/api/get-location').then((response) => {
          setLocation(response.data)
      })
  }, [])

  useEffect(() => {
      Axios.get('https://test-fullstack-project.herokuapp.com/api/get-category').then((response) => {
          setCategory(response.data)
      })
  }, [])
  
  return (
    <div className="invitedTab">
      {tradieList.map((val) => {
        if(val.status === "new"){
          return(
            <InvitedCard 
              name={val.contact_name}
              date={val.created_at}
              phone={val.contact_phone}
              description={val.description}
              price={val.price}
              jobId={val.id}
              location={location.map((loc)=>{
                if(loc.id === val.suburb_id){
                  return (loc.name + " " + loc.postcode)
                }
              })}
              job={category.map((cat)=>{
                if(cat.id === val.category_id){
                  return cat.name
                }
              })}
            />
          )
        }
      })}
    </div>
  );
};

export default InvitedTab;