import { CharacterSides } from '../../types/characterSides'
import * as styles from './styles'
type Props={
    x:number;
    y:number;
    side:CharacterSides;
}
export function Character({x,y,side}:Props){
    const size=30
    const sides={
        down:0,
        left:-30,
        right:-60,
        up:-90

    }
    return(
        <styles.Container left={x*size} top={y*size} size={size} sidePos={sides[side]??0} >
            
        </styles.Container>
    )
}