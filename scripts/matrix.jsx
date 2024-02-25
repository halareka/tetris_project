console.log('1');
//

const root = document.getElementById('root');
let ab = 0;
let count = 9;
const cube = [];

while(ab < 200){
    cube.push(<div className='block' id={getid()} style={{ backgroundColor: 'transparent' }}></div>);
    ab++;
}
function getid(){return ++count;}

ReactDOM.render(cube, root);

