import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header({ lateCount, clickNotification }) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>

      <S.RightSide>
        <a href="#">INICIO</a>
        <span className="dividir"></span>
        <a href="#">NOVA TAREFA</a>
        <span className="dividir"></span>
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="dividir"></span>  
        <button id="notification" onClick={clickNotification} >
          <img src={bell} alt="Notificação" />
          <span>{ lateCount }</span>
        </button>       
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
