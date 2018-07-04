import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import moment from 'moment';
import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: '', //propriedade de state que recebe o valor do input
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      })
    }

    catch(err) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input type="text" 
          placeholder="usuário/repositório" 
          value={this.state.repositoryInput} //aqui passamos o state como sendo o valor do input, que no caso está vazio
          onChange={e => this.setState({ repositoryInput: e.target.value })} //semp que houver mudança no valor do input, o stado é recarregado com o novo valor
          />
          <button type="submit">
    OK
          </button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}


