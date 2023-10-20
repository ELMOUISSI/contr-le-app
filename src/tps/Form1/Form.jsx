import React, { useState, useRef, useEffect } from "react";

export default function MySelect() {
  const [filieres, setFilieres] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const inputFil = useRef();
  const inRef = useRef();

  useEffect(() => {
    inRef.current.focus();
    inRef.current.value = '';
  }, []);

  function handleAdd(e) {
    e.preventDefault();
    const newFiliere = inRef.current.value.trim(); 
    if (newFiliere === '') {
      return; 
    }

    if (filieres.includes(newFiliere)) {
      setErrorMessage('Filière déjà existante.');
      return;
    }

    setFilieres([...filieres, newFiliere]);
    setIsDisabled(true);
    setErrorMessage('');
    inRef.current.value = ''; 
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    inputFil.current = inputValue;
    if (inputValue === '') {
      setIsDisabled(true);
      setErrorMessage('');
    } else {
      setIsDisabled(false);
      setErrorMessage('');
    }
  }

  return (
    <div>
      <form>
        <p>Vous avez ajouté {filieres.length} filières</p>
        <input onChange={handleChange} ref={inRef} />
        <button disabled={isDisabled} onClick={(e) => handleAdd(e)} className="btn btn-primary">
          Ajouter
        </button> 
        <br />
        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
        {filieres.length === 0 ? (
          <p>Il n'y a pas encore de filière à afficher</p>
        ) : (
         
          <select className="bloc">
            {filieres.map((fil) => (
              <option key={fil}>{fil}</option>
            ))}
          </select>
        )}
      </form>
    </div>
  );
}
