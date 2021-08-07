import React ,{useState} from 'react'

const data = [
  { id:1, name:'john'},
  {id:2, name:'peter'},
  {id:3, name:'jack'},
  {id:4,name:'dave'},
];

const ArrayExample = () =>{

  const [people ,setPeople]= useState(data);

  const removeItem = (id) =>{
    let newpeople = people.filter((person)=>person.id !== id);
    setPeople(newpeople);
  };


return (
  <>
  {people.map((person) =>{
    const {id,name}=person;

    return(
      <div key={id} className='item'>
        <h4>{name}</h4>
        <button onClick={() => removeItem(id)}>remove item</button>
      </div>
    )
  })}
  <button className='btn' onClick={()=>setPeople([])}>clear items</button>
  </>
);
};
export default ArrayExample