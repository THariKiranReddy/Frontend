import React, { useState } from 'react'
import { Name } from './Users/Name'

export const List = ({person}) => {
   
const [status,setStatus]=useState({});
const [sortedList,setSortedList]=useState(person);
const findStatus=(index,is_following)=>{
  setStatus(prev=>({...prev,[index]:!is_following}));
};
const ascFollowers=()=>{
  const sorted=[...sortedList].sort((a,b)=>a.followers-b.followers);
  setSortedList(sorted);
}
const dscFollowers=()=>{
 const sorted=[...sortedList].sort((a,b)=>b.followers-a.followers);
  setSortedList(sorted);
}
   return <section>
     <button type="button" onClick={()=>ascFollowers()}>Sort by Asc</button>
      <button type="button" onClick={()=>dscFollowers()}>Sort by Dsc</button>
    { sortedList.map((({ first_name, last_name,address,avatar,karma,followers,posts,is_following},index)=>{
     return < Name key={index} first_name={first_name} last_name={last_name} address={address} avatar={avatar} karma={karma} followers={followers} posts={posts} index={index} is_following={is_following} status={status[index] ?? is_following} findStatus={()=>{findStatus(index,status[index] ?? is_following )}}/>
    }))}
   </section>
}
