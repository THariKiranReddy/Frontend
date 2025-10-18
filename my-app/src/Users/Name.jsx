import React from 'react'

export const Name = (props) => {
    const {first_name,last_name,address,avatar,karma,followers,posts,index,findStatus,status}=props;
  return (
    <div key={index} style={{display:'flex',gap:"50px" ,border:"1px solid black",marginTop:"10px",justifyContent:"space-between",height:"100px"}}>
      <div>
        <img style={{borderRadius:"100px",width:"50px",height:"50px",marginTop:"30px",marginLeft:"100px"}} src={avatar}/>
      </div>
      <div>
        <h3>{first_name} {last_name}</h3>
        <h4>{address}</h4>
      </div>
      <div>
        <h3>{karma}</h3>
        <h4>Karma</h4>
      </div>
      <div>
        <h3>{followers}</h3>
        <h4>Followers</h4>
      </div>
      <div>
        <h3>{posts}</h3>
        <h4>Posts</h4>
      </div>
      <button style= {{borderRadius:"10px",width:"70px",height:"40px",marginTop:"20px",marginRight:"60px",textAlign:'center'}}onClick={findStatus}>{status?<h4> unfollow</h4> : <h4>follow</h4>}</button>
    </div>
  )
}
