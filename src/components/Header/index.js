import React from 'react';
import { Link } from 'react-router-dom';

import{ AreaHeader } from './styled';

import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header(props){
    return(
       <AreaHeader>
            <div className="container">
                <div className="logo">
                    <img src="../../../Fua Logotipo.png" />
                </div>

                <nav>
                    <ul>
                        <li><Link to="/"><HomeIcon />Início</Link></li>
                        <li><Link to="/config"><SettingsIcon />Configurações</Link></li>
                        <li><Link to="/logout"><ExitToAppIcon />Sair</Link></li>
                        
                    </ul>

                    <div className="avatar">
                        <img src={props.user.avatar} />
                        <label>{props.user.name}</label>

                    </div>
                </nav>
            </div>
       </AreaHeader>
    );
}

export default Header;