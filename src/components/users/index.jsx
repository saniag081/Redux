import React from 'react';
import axios from 'axios';

class User extends React.Component {
  constructor(){
    super()
    this.state= {
      usuarios: []
    }

  }

  async componentDidMount(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({
      usuarios: response.data
    })
  }

  ponerFilas = () => (
    this.state.usuarios.map( usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ))
  );

  render(){
    return(
      <div className="margen table">
  
        <table className="table">
            <thead>
              <tr>
                <th>
                  Nombre
                </th>
                <th>
                  Correo
                </th>
                <th>
                  Enlace
                </th>
              </tr>
            </thead>
  
            <tbody>
              { this.ponerFilas() }
            </tbody>
        </table>
      </div>
    )  
  }

}

export default User;