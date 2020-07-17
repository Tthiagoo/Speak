const users = [];

const addUser =({id,username})=>{
  const userExist = users.find((user)=>user.username === username)
  if(userExist){
    return{error:'Usuario já esta logado'}
  }

  const user = {id,username};
  users.push(user)
  return{user}
}