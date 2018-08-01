import React,{Component} from 'react';
import data from '../data/bondData.json';
import BondCard from './BondCard';
import { createBlankTearout } from './tearOutWindow';

var previousIndex=0, currentDargger, currentDropTarget;

const onClick = (index) => {
    console.log(index);
    document.getElementsByTagName('tr')[previousIndex].classList.remove('highLightBg');
    previousIndex=index;
    var htmlElement = document.getElementsByTagName('tr')[previousIndex];
    htmlElement.scrollIntoView();
    htmlElement.classList.add('highLightBg');
    console.log('some card is clicked',index);
}

class BondGrid extends Component {
    componentDidMount(){
        window.addEventListener('drop',this.onDropHandler);
        window.addEventListener('dragEnter',this.onDragEnterHandler);
        window.addEventListener('dragLeave',this.onDragLeaveHandler);
        window.addEventListener('dragover',this.onDragOverHandler);
        try{
            fin.desktop.main(() => {
                var tearOut = createBlankTearout('title123',500);
                console.log('create Window', tearOut);
            })
        }catch(err){
            console.log('failed to create window');
        }
    }
    onDragEnterHandler(e){
        e.preventDefault()
        console.log('onDragEnterHandler');
    }
    onDragLeaveHandler(e){
        e.preventDefault()
    }
    onDragOverHandler(e){
        e.preventDefault()
        console.log('onDragOverHandler');
    }
    onDropHandler(e){
        e.preventDefault()
    }
    onDragStartEventHandler(event){
        console.log('Element is being dragged');
        currentDargger=event.target;
        //console.log(currentDargger);
    }
    onDragEndEventHandler(event) {
        console.log('User is done with dragging');
        currentDargger = event.target;
        event.preventDefault();
        event.stopPropagation();
        console.log('event is ',event);
    }
   render(){
    return (
        <div className='bondGrid'>
            {data.map((element,index) =>
                <div draggable='true' 
                    onDragStart={(event)=>this.onDragStartEventHandler(event)}
                    onDragEnd={(event)=>this.onDragEndEventHandler(event)}
                    key={index}>
                    <BondCard class='dragger' 
                        onClick={() => onClick(index+1)}
                        bondInfo={element}
                    />
                </div>)}
        </div>
    )
}
}
 
export default BondGrid;