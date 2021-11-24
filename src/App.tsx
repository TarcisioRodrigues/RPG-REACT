import React, { useEffect } from 'react';
import * as styles from '../src/styles/App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

function App() {

  const char=useCharacter('Tarcisio');
  function handleKeyDown(e:KeyboardEvent){
    switch(e.code){
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
        break
        case 'KeyW':
          case' ArrowUp':
          char.moveUp()
          break
          case 'KeyS':
          case 'ArrowDown':
            char.moveDown()
          break
          case 'KeyD':
            case 'ArrowRight':
              char.moveRight()
              break
    }
  } 
  useEffect(()=>{
    window.addEventListener('keydown' ,handleKeyDown)
   
  },[])

  return (
    <styles.Container>
      <styles.Map>
        <Character x={char.x} y={char.y} side={char.side}/>
      </styles.Map>
    </styles.Container>
  );
}

export default App;
