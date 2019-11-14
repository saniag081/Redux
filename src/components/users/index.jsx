import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as usuariosAction from '../../actions/usuariosAction';

class User extends React.Component {
  componentDidMount(){
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    // this.setState({
    //   usuarios: response.data
    // })
    this.props.traerTodos();
  }

  ponerFilas = () => (
    this.props.usuarios.map( usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ))
  );

  render(){
    console.log(this.props)
    return(
      <div>
  
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

//mapear el estado al props
const mapStateToProps = (reducers) =>{
  return reducers.usuariosReducer
}

export default connect(mapStateToProps, usuariosAction)(User);