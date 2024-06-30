
if(localstorage.getItem("matrix"){
 ReactDOM.render(localstorage.getItem("matrix");
}
const root = document.getElementById('root');
const cube = [];

for(let i = 9; i <= 209; i++){
    cube.push(<div className='block' id={i} style={{ backgroundColor: 'transparent' }}></div>);
}


localstorage.setItem("matrix",cube);
ReactDOM.render(cube, root);

