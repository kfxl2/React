# Resumo da Aula

Na aula de hoje, aprendemos a instalar bibliotecas importantes, como React e Bootstrap, para criar nosso primeiro projeto React. Utilizamos os comandos recomendados com o `npm install` para instalar as dependências necessárias.

Além disso, exploramos o uso do **Reactstrap** para implementar componentes estilizados e praticamos a revisão de código HTML. Fizemos modificações para criar uma janela de navegação (Navbar), incluindo o nome do aluno como exemplo, configurando o arquivo `index.js` e outros componentes conforme solicitado na atividade.

### Etapas realizadas:
1. Instalamos as bibliotecas:
   - `reactstrap`
   - `bootstrap`
   - `react-popper` e `@popperjs/core`
2. Configuramos o arquivo `index.js` para importar o CSS do Bootstrap.
3. Criamos e modificamos o componente Navbar para exibir o nome do aluno.
4. Utilizamos o comando `commit` para subir as alterações ao GitHub, garantindo que nosso repositório fosse salvo online.

### Imagem do Navbar
Adicione aqui uma captura de tela do Navbar com seu nome personalizado:

![alt text](image.png)
```bash
    import { Navbar, NavbarBrand } from 'reactstrap';

      <Navbar dark color="primary">
      <div className="container">
      <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      <div>Aluno: Fulano de Tal</div>
   </div>
 </Navbar>
```
**A primeira linha de codigo server para importar a bliblioteca do navbar e o navbarBrand para poder utilizar suas funcionalidades** 

**segunda linha  define a barra de navbar de cor preta  e a barra primaria do bootstrap** 

**terceira linha  define o nome como container e deixa ela centralizada  na barra de navegação** 

**quarta linha define o navbarBrand como o ristorante con funsion 
que feio que deixa ele como link direcionando para tela inicial meio que como um botão para voltar para a pagina inicial quando se click** 

**quinta linha eu defino o nome do aluno como foi pedido na questão 
ele exibe na tela o nome que foi digitado dentro do div e deixa ele centralizado na cor preta como foi definido no começo do codigo.**