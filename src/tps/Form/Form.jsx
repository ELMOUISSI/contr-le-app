import React, { useState,useEffect, useRef, Fragment } from 'react';
import InputForm from './InputForm'; 
import Rotate from 'react-reveal/Rotate';

function MyForm() {
  const attrs=["nom", "numeroInscription", "option"]
  useEffect(()=>{
    if(members.length >0){
      document.title=members[members.length-1].username;
    }else{
      document.title="mysiteweb";
    }
  }
  )
  const inputs = useRef({});
  const [members, setMembers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    inputs.current = {...inputs.current, [name]:value}
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editIndex !== null) {
      const updatedMembers = [...members];
      updatedMembers[editIndex] = inputs;
      setMembers(updatedMembers);
      setEditIndex(null);
    } else {
      setMembers([...members, inputs.current]);
    }

    //setInputs({ username: '', prenom: '' });
  };

  const editMember = (index) => {
    const memberToEdit = members[index];
    
    attrs.forEach((attr)=>
    {
      document.querySelector(`[name=${attr}]`).value=memberToEdit[attr]
    }
    )
    //setInputs(memberToEdit);
    setEditIndex(index);
  };

  const deleteMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

 
  return (
    <div className='container'>
      
      <form onSubmit={handleSubmit}>
        {
        attrs.map((attr, idx) => 

          <InputForm key={idx}
            label={"Enter your "+attr}
            name={attr}
            onChange={handleChange}
          />
                 )
        }
        

        
        <input type="submit" value={editIndex !== null ? 'Update' : 'Add'} />
      </form>
     {members.length === 0? (<p>Il n'y pas encore de liste à afficher</p>):
    ( <>
     <h3>Liste des Membres</h3>
      <table striped bordered hover size="sm" className='table table-bordered'>
        <thead>
          <tr>
          {
              attrs.map((attr, idx) => 
               <th key={idx}>{attr}</th>              
                        )
          }

          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <Rotate>
            <tr key={index}>
            {console.log(index)}
            {console.log(editIndex)}
            
            {
              attrs.map((attr, idx) => 
               <td key={idx}>{member[attr]}</td>              
              )
            }
              <td>
                <button className='btn btn-danger' onClick={() => deleteMember(index)}>Supprimer</button>
                <button className='btn btn-primary' onClick={() => editMember(index)}>Edit</button>
              </td>
              
            </tr>
            </Rotate>
          ))}
        </tbody>
      </table>
      </>
      )
          }
      
  
      
    </div>
  );
}

export default MyForm ;

