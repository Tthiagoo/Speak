import React, { useState } from 'react'
import { FaCircle, FaBars, FaSearch} from 'react-icons/fa'
import './styles.css'

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import ModalSala from './ModalSala'



export default function Perfil({ foto, name }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };



  return (
    <div id="perfil">
      <div id="perfil-user">
        <div id="perfil-user-photo" style={{ backgroundImage: `url(${foto}` }}></div>
        <div id="info">
          <span id="perfil-user-name">{name}</span>

          <div id="status">
            <Select defaultValue={10} labelId="demo-simple-select-label" id="status-text">
              <MenuItem value={10}>Online  <FaCircle size={6} color={"green"} className="FaCircle" /></MenuItem>
              <MenuItem value={20}>Ausente  <FaCircle size={6} color={"yellow"} className="FaCircle" /></MenuItem>
              <MenuItem value={30}>Offline  <FaCircle size={6} color={"red"} className="FaCircle" /></MenuItem>
            </Select>
            
          </div>


        </div>
      </div>
      <div id="perfil-config">
        <FaBars size={23} color={"white"} onClick={handleClick} id="FaBars" />
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Editar Perfil (Em Breve)</MenuItem>
          <MenuItem onClick={handleClose}>Configurações(Em Breve)</MenuItem>
          <MenuItem onClick={handleClose}>Amizades(Em Breve)</MenuItem>
          <MenuItem onClick={handleClose}>Criar Sala(Em Breve)</MenuItem>
          <ModalSala open={open} close={handleModalClose}/>
        </Menu>


      </div>
      <div id="perfil-search">
        <input type="text" placeholder="Procure alguem na sala (Em breve)" />
        <FaSearch id="search" size={15} />
      </div>
    </div>
  )
}