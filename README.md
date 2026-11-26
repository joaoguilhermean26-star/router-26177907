
# Escola de idiomas — João

Projeto individual desenvolvido para a disciplina de
Front-End, utilizando React e React Router.

## Identificação

- Aluno: João Guiilherme Araujo Nunes
- RA: 26177907
- Curso: Análise e Desenvolvimento de Sistemas

## Meus parâmetros

RA: 26177907

Soma dos dígitos:
2 + 6 + 1 + 7 + 7 + 9 + 0 + 7 = 39

| Parâmetro | Cálculo | Resultado |
|---|---|---|
| A | 07 % 20 | 7 |
| B | Antepenúltimo dígito | 9 |
| C | 39 % 6 | 3 |
| D | 7 % 4 | 3 |
| Cor | 907 % 360 | 187 |

### Características do sistema

- Tema A7: Escola de idiomas.
- Validação B9: mensagem de sucesso enviada pelo
  state do navigate após o cadastro.
- Visualização C3: turmas agrupadas por idioma.
- Navbar D3: nome do sistema à esquerda, links
  à direita e quantidade de registros.
- Cor principal: hsl(187, 60%, 35%).

## Funcionalidades

- Cadastro de turmas.
- Visualização agrupada por idioma.
- Validação de campos obrigatórios.
- Mensagem de sucesso após cadastrar.
- Contador de turmas cadastradas.
- Navegação entre páginas sem recarregamento.
- Página de erro 404.
- Interface responsiva.

## Rotas

| Rota | Página |
|---|---|
| / | Home |
| /turmas/novo | Cadastro |
| /turmas | Visualização |
| * | Página não encontrada |

## Tecnologias utilizadas

- React
- React Router DOM
- JavaScript
- HTML
- CSS
- Vite

## Como executar

Instalar as dependências:

    npm install

Executar o projeto:

    npm run dev

## Funcionalidades opcionais

- O3 — Remover turmas com confirmação de exclusão.
- O5 — Busca de turmas pelo código.
- O6 — Persistência dos registros com localStorage
  e useEffect.