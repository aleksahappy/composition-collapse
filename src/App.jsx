import './App.css';
import {React, useState} from 'react';
import Collapse from './components/Collapse';

const initialState = {
  isExpanded: true
};

export default function App() {
  const [state, setstate] = useState(initialState);

  const handleExpandedChange = isExpanded => {
    setstate({isExpanded: isExpanded});
  }

  return (
    <div className="App">
      <Collapse
        collapsedLabel='Подробнее'
        expandedLabel='Скрыть'
        isExpanded={state.isExpanded}
        onExpandedChange={handleExpandedChange}
      >
        <p>
          Альфа-Банк, основанный в 1990 году, является универсальным банком,
          осуществляющим все основные виды банковских операций, представленных
          на рынке финансовых услуг, включая обслуживание частных и корпоративных
          клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.
        </p>
      </Collapse>
    </div>
  );
}
