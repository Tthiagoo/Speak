const users = [];

const addUser =({id,username,room})=>{
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  const userExist = users.find((user)=>user.username === username && user.room === room)
  if(userExist){
    return{error:'Usuario já esta logado'}
  }

  const user = {id,username,room};
  users.push(user)
  return{user}
}

const removeUser=(id)=>{
  const index = users.findIndex((user)=>user.id === id);

  if(index !== -1){
    return users.splice(index,1)[0]
  }
}

const getUser = (id)=> users.find((user)=>user.id == id);

const getUserInRoom = (room) =>users.filter((user)=>user.room == room);

module.exports={addUser, removeUser, getUser, getUserInRoom}



