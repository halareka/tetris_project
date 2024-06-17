console.log('1');
//
if(localstorage.getItem("matrix){
 ReactDOM.render(localstorage.getItem("matrix");
}
const root = document.getElementById('root');
let ab = 0;
let count = 9;
const cube = [];

while(ab < 200){
    cube.push(<div className='block' id={getid()} style={{ backgroundColor: 'transparent' }}></div>);
    ab++;
}
function getid(){return ++count;}

localstorage.setItem("matrix",cube);
ReactDOM.render(cube, root);

