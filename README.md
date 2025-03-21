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
