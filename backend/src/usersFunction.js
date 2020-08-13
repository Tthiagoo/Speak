const users = [];

const addUser =({id,username,room, foto_url, name, bio})=>{
  username = username
  room = room.trim().toLowerCase()
  foto_url = foto_url
  name = name
  bio = bio

  const userExist = users.find((user)=>user.username === username && user.room === room)
  if(userExist){
    return{error:'Usuario já esta logado'}
  }

  const user = {id,username,room, foto_url, name, bio};
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



