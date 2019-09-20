import React, { Component } from 'react';

import { Button, Pagination } from 'react-bootstrap';

// import { Container } from './styles';

export default class main extends Component {
    constructor(props) {
        super(props);

        this.state = { lista: [], tarefa: '', erro: '', excluir: '', mostrarErro: false, paginaAtual: 1,
                        itensPagina: 5};

        this.validaFormulario = this.validaFormulario.bind(this);
        this.removerItem = this.removerItem.bind(this);
        this.limparLista = this.limparLista.bind(this);
        this.imprimirListaConsole = this.imprimirListaConsole.bind(this);
        this.cliquePaginacao = this.cliquePaginacao.bind(this);
        this.adicionarLista = this.adicionarLista.bind(this);
        this.excluirLista = this.excluirLista.bind(this);
        this.atualizaLista = this.atualizaLista.bind(this);

    }

    

    componentDidMount() {
        let url = "http://localhost:3001/lista";

        fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState( {lista : data})
        })
    }

    atualizaLista() {
        let url = "http://localhost:3001/lista";

        fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState( {lista : data})
        })
    }

    validaFormulario(e) {
        e.preventDefault();

        if(this.state.tarefa.length<=0){
            //alert('entre com algum valor para tarefa');
            this.setState({erro: 'Entre com algum valor para a Tarefa'});
            return;
        }

        const novoItem = {
            id: Date.now(),
            tarefa: this.state.tarefa
        }

        this.setState(state => ({
            //lista: state.lista.concat(novoItem),
            erro: '',
            tarefa: ''
        }));

        this.adicionarLista(novoItem);
        //this.componentDidMount();
        this.atualizaLista();
    }

    removerItem(id, e) {
        e.preventDefault();
        if(id<=0){
            this.setState({erro: 'não há item a excluir'});
            return;
        }

        /*console.log(id);
        console.table(this.state.lista);*/

        /*const listaFiltrada = this.state.lista.filter( item => item.id !== id);

        this.setState({
            lista: listaFiltrada,
            erro: '',
        });*/

        this.excluirLista(id);
        //this.componentDidMount();
        this.atualizaLista();
    }
    
    limparLista(e) {
        e.preventDefault();
        this.setState({
            lista: [],
            tarefa: '',
            erro: ''
        })
    }


    imprimirListaConsole(e) {
        e.preventDefault();
        console.table(this.state.lista);
    }

    cliquePaginacao(e, id) {
        this.setState({paginaAtual: id});
    }

    adicionarLista(xlista) {
        let options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(xlista)
          }
          return fetch('http://localhost:3001/lista', options)
            .then((response) => response.json)
    }

    excluirLista(id) {
        let options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          }
          return fetch('http://localhost:3001/lista/'+id, options)
            .then((response) => response.json) 
    }

  render() {

    let rows = [];
    let totalPaginas = Math.round(this.state.lista.length  / this.state.itensPagina);
    let inicial = (this.state.paginaAtual * this.state.itensPagina) - this.state.itensPagina;

    let itens = this.state.lista.slice(inicial, inicial+this.state.itensPagina);
    
    for(let i=1; i<totalPaginas+1; i++){
        rows.push(<Pagination.Item key={i}
                 active={i === this.state.paginaAtual}
                 onClick={(e) => { this.cliquePaginacao(e, i)}}>{i}</Pagination.Item>)
    }

    return (
        <div>
            <h3>Tarefas</h3>
            <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Tarefa</th>
                <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                    itens.map(
                        (item, index) => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.tarefa}</td>
                                <td>
                                    <button className="btn btn-danger"
                                    onClick={(e) => this.removerItem(item.id, e)}>
                                        Remover
                                    </button>
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
            </table>
            <Pagination>{rows}</Pagination><br />
            <form onSubmit={this.validaFormulario} className="form-inline">
                <div className="form-group">
                    <label htmlFor="tarefa" >
                        Indique a Tarefas
                    </label><br/>
                    <input id="tarefa" className="form-control mx-2"
                    onChange={ (e) => { this.setState({tarefa: e.target.value})}}
                    value={this.state.tarefa} />
                </div>
                
                <div className="form-group mx-sm-3 mb-2">
                    <Button type="submit">
                        Adicionar Lista
                    </Button>  
                    <Button onClick={this.limparLista} className="btn btn-danger mx-2">
                        Limpar Lista
                    </Button>
                    <Button onClick={this.imprimirListaConsole} className="btn btn-info">
                        Console
                    </Button>
               </div>
                <br />
                {/* <label>{this.state.tarefa}</label><br/>*/ }
            </form>

            <div className="alert alert-warning" role="alert">
                {this.state.erro}
            </div>
        </div>
        );
  }
}
