import React, { useState, useEffect } from 'react';
import * as S from './styles';

//aqui faz a conexão com o backend
import api from '../../services/api';

//nossos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  //aqui carrega todos os tasks
  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/18:4F:32:B2:1A:51`)
    .then(response => {
      setTasks(response.data);      
    });
  }

  //aqui é para carregar todas as task atrasadas
  async function lateVerify(){
    await api.get(`/task/filter/late/18:4F:32:B2:1A:51`)
    .then(response => {
      setLateCount(response.data.length);      
    });
  }

  //funcao para clicar e trazar o filtro das tarefas atrasadas
  function Notification(){
    setFilterActived('late');
  }

  //aqui caso a tela seja carregada, ele carrega todos os tasks e caso mude o filtro também 
  useEffect( () => {
    loadTasks();
    lateVerify();
  }, [filterActived]);

  return (
    <S.Container>
      <Header lateCount={lateCount} clickNotification={Notification} />

      <S.FilterArea>
        <button type="button" onClick={ () => setFilterActived("all") }>
          <FilterCard title="Todos" actived={filterActived == 'all'} />
        </button>

        <button type="button" onClick={ () => setFilterActived("today") }>
          <FilterCard title="Hoje" actived={filterActived == 'today'} />
        </button>

        <button type="button" onClick={ () => setFilterActived("week") }>
          <FilterCard title="Semana" actived={filterActived == 'week'} />
        </button>

        <button type="button" onClick={ () => setFilterActived("month") }>
          <FilterCard title="Mês" actived={filterActived == 'month'} />
        </button>
        
        <button type="button" onClick={ () => setFilterActived("year") }>
          <FilterCard title="Ano" actived={filterActived == 'year'} />
        </button>        
      </S.FilterArea>

      <S.Title>
        <h3>{ filterActived == 'late' ? 'TARAFAS ATRASADAS' : 'TAREFAS'}</h3>
      </S.Title>

      <S.Content>
        {
          tasks.map(t => (
            <TaskCard type={t.type} title={t.title} when={t.when} />
          ))          
        }        
      </S.Content>
      
      <Footer />
    </S.Container>    
    )
}

export default Home;
