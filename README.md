# abertura-empresa
Aplicativo Abertura de Empresa

Para iniciar os serviços necessários. Aqui estão os passos:

1. Primeiro, inicie o json-server:

```bash
cd .\abertura-empresa
npx json-server --watch mocks/db.json --port 3000
```

2. Em outra janela do terminal, inicie o servidor Angular:

```bash
cd .\abertura-empresa
ng serve
```

3. Abra o navegador e acesse `http://localhost:4200`.

4. Para executar os testes:

```bash
cd .\abertura-empresa
ng ng test
```

5. Projeto publicado no servidor Netlify:
https://abertura-de-empresas.netlify.app/

------------------------------------------------------------------

Aplicativo Abertura de Empresa: 
# TELA INICIAL
- Tela de listagem com cards exibindo os nomes das empresas e responsáveis das solicitações feitas.
- Ao Clicar em "Visualizar Detalhes" em um card, abrirá um modal com todas as informações do pedido.
- Dentro do Card tem a possibilidade de fechar a janela ou clicar em Editar Pedido, para editar as informações da solicitação.
- Na tela inicial também consta o botão "Solicitar Abertura" para criar um novo pedido.

# TELA DE SOLICITACAO
- Nessa tela o usuário pode preencher as informações do pedido, como nome do solicitante, CPF, data de nascimento, nome fantasia, endereço, número, complemento, bairro, cidade, estado e CEP.
- Após preencher as informações, o usuário pode clicar no botão "Salvar" para salvar o pedido.
- Se algum campo obrigatório estiver preenchido de forma errada ou sem preenchimento, o mesmo será sublinhado em vermelho e o usuário não poderá salvar o pedido.
- Ao clicar no botão "Salvar" um modal será aberto informando que o pedido está salvo e o usuário  redirecionado para a tela inicial.

# TELA DE EDICAO
- Nessa tela o usuário pode editar as informações do pedido, como nome do solicitante, CPF, data de nascimento, nome fantasia, endereço, número, complemento, bairro, cidade, estado e CEP.
- Após preencher as informações, o usuário pode clicar no botão "Salvar" para salvar o pedido.
- Se algum campo obrigatório estiver preenchido de forma errada ou sem preenchimento, o mesmo será sublinhado em vermelho e o usuário não poderá salvar o pedido.
- Ao clicar no botão "Salvar" um modal será aberto informando que o pedido está salvo e o usuário  redirecionado para a tela inicial.

----------------------------------------------------------------

# O QUE PODE MELHORAR
- Texto informativo abaixo do campo que está com erro, para uma melhor compreensão do usuário.
- Opção de excluir pedido.
- Status do pedido ser exibido na tela de listagem.
- Estado ser por seleção
- CEP ser preenchido automaticamente outros campos
- Tela de autenticação
- Botão de sair do sistema
- Usuários para autenticação