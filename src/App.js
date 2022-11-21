import './App.css';
// #1 budas itraukti paveiksleli
import house5 from './house5.jpg';

const card1 = (
  <div className='card'>
    <h4 className='card__title'>house 5</h4>
    <img className='card__img' src={house5} alt='namas penktas' />
  </div>
);
const card2 = (
  <div className='card'>
    <h4 className='card__title'>house 2</h4>
    <img className='card__img' src='/img/house2.jpg' alt='namas antras' />
  </div>
);

const member1 = (
  <div className='teamItem'>
  <img className='card__img' src='/img/team2.jpg' alt='team member' />
  <h3 className='team__title'>John Doe</h3>
  <p className='team__ocupation'>CEO & Founder</p>
  <p className='team_desc'>
    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque
    elementum.
  </p>
  <button>Contact</button>
</div>
);



// react componentas
function HouseGrid() {
  return (
    <div className='grid1'>
      {card1}
      {card2}
      {card1}
      {card2}
      {card1}
      {card2}
    </div>
  );
}

function TeamItem(){
return(
  <div className='grid1'>
    {member1}
    {member1}
    {member1}
    {member1}
    {member1}
    {member1}
    {member1}
    {member1}
</div>
)
}
function FormArea(){
return(
  <div className='formContainer'>
    <h3>Form</h3>
    <form action="">
      <input type="text" placeholder='Name' />
      <input type="text" placeholder='Email' />
      <input type="text" placeholder='Subject' />
      <input type="text" placeholder='Comment' />
      <button>Send messege</button>
    </form>

</div>
)
}

function App() {
  const name = 'James';

  return (
    <div className='App'>
      <h1 className='mainTitle'>
        Hello111 {name} !!! {150 * 45}
      </h1>
      {/* {houseGrid} */}
      <HouseGrid />

      {/* <TeamItem /> */}
      <TeamItem />

      {/* <FormArea /> */}
      <FormArea />

    </div>
  );
}

export default App;