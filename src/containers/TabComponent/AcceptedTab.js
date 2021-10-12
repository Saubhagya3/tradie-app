import React, { useState, useEffect } from "react";
import AcceptedCard from "../CardComponent/AcceptedCard";
import Axios from 'axios';

const AcceptedTab = () => {
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
    <div className="acceptedTab">
      {tradieList.map((val) => {
        if(val.status === "accepted"){
          return(
            <AcceptedCard 
              name={val.contact_name}
              date={val.created_at}
              phone={val.contact_phone}
              description={val.description}
              price={val.price}
              jobId={val.id}
              email={val.contact_email}
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

export default AcceptedTab;