import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState ({
    name: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState (null);

  const hendLeChange = (e) => {
    const {name, value} = e.target;
    setFormData ((prevData) => ({...prevData, [name]: value}));
  };

  const hendLeSubmit = (e) => {
    e.preventDefault();
    setSubmittedData (formData);
  };

  return(
    <div>
      <form onSubmit = {hendLeSubmit}>
        <div>
          <lable>
            Nome: 
            <input type="text" name="name" value={formData.name} onChange = {hendLeChange} />
          </lable>
        </div>

        <div>
          E-mail:
          <input type="email" name="email" value={formData.email} onChange = {hendLeChange} />
        </div>

        <button type="submit">Enviar</button>
      </form>

      {submittedData && (
        <div>
          <h3>Preencher dados</h3>
          <p>Nome: {submittedData.name}</p>
          <p>E-mail: {submittedData.email}</p>
        </div>
      )}
    </div>
  )
} 

export default SimpleForm;