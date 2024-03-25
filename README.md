# To Do List Web App - Vite + React + Java Spring

Esse aplicativo é capaz de visualizar, inserir, deletar e atualizar tarefas de maneira rápida. Todas as funcionalidades do aplicativo serão apresentadas.

## Sobre o projeto

Projeto pessoal para aprender a construir um projeto completo, desde o back-end até o front. Para isso, foram escolhidas duas ferramentas que tive contato pela primeira vez: React para o front e Java Spring para o back. Essa foi a primeira vez entrando em contato não somente com essas duas ferramentas, mas de maneira geral, com esse tipo de framework.
React mostrou-se um pouco mais desafiador quando comparado com HTML, CSS e JavaScript. Todos os hooks e a estrutura de código diferente não foram tão fáceis de aprender no começo, mas após um tempo de adaptação, tornou-se mais acessível e a biblioteca mostrou seu valor. Para desenvolver a API Rest, Java Spring facilitou muito o trabalho, e não teve problemas para entender.

## Funcionalidades

O aplicativo, por ser simples e não ter necessidade de ocupar muito espaço, foi projetado para ocupar apenas uma pequena parte da tela.
Ao executar o projeto, a tela mostrada pela primeira vez mostra o painel de tarefas com a data do dia e informações sobre as tarefas, que no momento não são existentes.

![To Do List - Documentação - Interface](https://github.com/peregozo/to-do-list/assets/160425803/52cc2c1c-978f-4ca6-9b0f-be9f917892ee)

### 1 - Adicionar uma tarefa ✔️
Ao clicar em 'Add new' é possível criar uma nova tarefa. Cada tarefa tem três campos a serem preenchidos:

- Nome
- Descrição
- Prioridade

Por default, os campos começam vazios no modo de adicionar uma nova tarefa e podem ser preenchidos livremente, apesar de um limite de letras.

![To Do List - Documentação - Preenchendo nova tarefa](https://github.com/peregozo/to-do-list/assets/160425803/573d1968-9458-49ef-962c-296c5d357fab)

Ao enviar uma nova tarefa ocorre uma verificação, analisando se os campos estão vazios ou não e exibindo uma mensagem de acordo com a situação:

![To Do List - Documentação - Preenchendo nova tarefa](https://github.com/peregozo/to-do-list/assets/160425803/d17e6570-2fa8-4bc1-809b-9d31f5b2a5de)

Se o campo estiver vazio, tanto no modo de adicionar uma nova tarefa, quanto no modo de edição, aparecerá a mensagem:

![To Do List - Documentação - Tarefa Não Enviada](https://github.com/peregozo/to-do-list/assets/160425803/f5980024-d830-43ec-85d8-315c42b1734f)

Desta forma, é possível visualizar a tarefa criada com os dados preenchidos:

![To Do List - Documentação - Tarefa Criada](https://github.com/peregozo/to-do-list/assets/160425803/b12c8b4f-72e6-4c65-b3d3-f2fbe3fc1b12)

### 2 - Visualizar tarefa 👁️
As tarefas são apresentadas em forma de coluna, sendo possível visualizar todas por meio do scroll. A ordenação das tarefas é feita no back-end, e começa pelas tarefas a fazer, seguido pela prioridade e pela ordem alfabética do nome das tarefas.

**Tarefas somente em ordem alfabética:**

![To Do List - Documentação - Ordenação Tarefas 1](https://github.com/peregozo/to-do-list/assets/160425803/124c19bc-4b74-490a-aeab-8c97145fbb0a)

**Tarefas em ordem de status e alfabética:**

![To Do List - Documentação - Ordenação Tarefas 2](https://github.com/peregozo/to-do-list/assets/160425803/63b91880-aaf4-47bc-b98d-f65e2c2e9afc)

**Tarefas em ordem de status, prioridade e alfabética:**

![To Do List - Documentação - Ordenação Tarefas 3](https://github.com/peregozo/to-do-list/assets/160425803/5d437d16-72ba-4bf0-bd93-ab959789ba2a)

Também é possível visualizar as tarefas de acordo com seu status, acessadas por meio do nome de cada um desses status:

![To Do List - Documentação - Lista Status da Tarefa](https://github.com/peregozo/to-do-list/assets/160425803/2dc1ccdd-3b8b-41d2-829b-e902aa88ca7f)

**Todas as tarefas:**

![To Do List - Documentação - Lista Status da Tarefa Todos](https://github.com/peregozo/to-do-list/assets/160425803/fb4c03be-787d-4cdd-b5e5-2e5e750c09d3)

**Tarefas feitas:**

![To Do List - Documentação - Lista Status da Tarefa Feitos](https://github.com/peregozo/to-do-list/assets/160425803/e7062eb3-d3ba-4930-a066-ed654ae0e234)

**Tarefas a fazer:**

![To Do List - Documentação - Lista Status da Tarefa Fazer](https://github.com/peregozo/to-do-list/assets/160425803/c7d0d041-b510-4552-ba81-f5d5e463f801)

### 3 - Manipular tarefa 📓
Ao clicar no ícone do lado direito de um componente de tarefa é possível visualizar três opções:
- Mudar o status
- Editar a tarefa
- Deletar a tarefa

Uma funcionalidade interessante que foi implementada é que o código controla quais tarefas estão visíveis na tela no momento e calcula quais tem espaço para permitir que a div de opções se direcione para baixo e quais é necessário que se direcione para cima, otimizando o espaço na tela.

**Div direcionada para baixo:**

![To Do List - Documentação - Opções 1](https://github.com/peregozo/to-do-list/assets/160425803/813f5a18-b0e5-412a-ac03-143bcb2fb88b)

**Div direcionada para cima:**

![To Do List - Documentação - Opções 2](https://github.com/peregozo/to-do-list/assets/160425803/8a1942ec-595e-46d0-931a-0466935e5e45)

### 4 - Mudar o status ➡️
Para mudar o status de uma tarefa basta clicar nas opções da tarefa desejada e clicar em update status. O status será o oposto do selecionado no momento, redefinindo as cores do componente e a ordem das tarefas. Outra funcionalidade que é afetada é o painel que mostra a porcentagem de tarefas completas, que será apresentado.

![To Do List - Documentação - Mudar Status 1](https://github.com/peregozo/to-do-list/assets/160425803/7abbd242-629e-4c34-bf9b-b3bd3222a135)

![To Do List - Documentação - Mudar Status 2](https://github.com/peregozo/to-do-list/assets/160425803/8ebc22af-15d0-4d18-84f9-1de7042a5486)

### 5 - Editar a tarefa ✍️
Para editar uma tarefa basta clicar em editar tarefa nas opções e o mesmo painel de criar uma nova tarefa será apresentado no modo de edição. Os campos serão preenchidos com os valores da tarefa correspondente.

![To Do List - Documentação - Editar Tarefa](https://github.com/peregozo/to-do-list/assets/160425803/4af9fc2a-904f-41e7-ba30-14643b861458)

Ao enviar a tarefa também ocorre uma verificação, agora analisando se os campos estão vazios ou se os valores são os mesmos já definidos na tarefa.

Se os campos não forem os mesmos, mostra a mensagem 'Task editted successfully':

![To Do List - Documentação - Tarefa Editada Sucesso](https://github.com/peregozo/to-do-list/assets/160425803/5b553d18-4b96-4359-b2ec-45da6a02021a)

Se os campos forem os mesmos da tarefa correspondente, mostra a mensagem 'Values should not be the same':

![To Do List - Documentação - Tarefa Não Editada](https://github.com/peregozo/to-do-list/assets/160425803/e3a1797f-76e7-4fef-b54b-c60b69d8530a)

### 6 - Deletar a tarefa ❌
Para deletar uma tarefa, basta clicar em opções e deletar a tarefa. Não será mais possível visualizar e nem manipular ela, sabendo que será deletada do banco de dados. A ordem e o painel de porcentagem são redefinidos.

![To Do List - Documentação - Deletar Tarefa](https://github.com/peregozo/to-do-list/assets/160425803/fc13d404-b35b-45e7-bb5f-bb4bcd979632)

![To Do List - Documentação - Tarefa Deletada](https://github.com/peregozo/to-do-list/assets/160425803/609a3d07-eb23-4052-a97a-02122c564ff9)

### 7 - Painel de tarefas completas 🥇
Painel que mostra a porcentagem de tarefas feitas, com base nas tarefas a fazer e as completas. É afetado toda vez que uma tarefa é inserida, deletada ou muda seu status.

![To Do List - Documentação - Painel Tarefas Completas 1](https://github.com/peregozo/to-do-list/assets/160425803/fd64f0b6-add0-4a99-9658-128d0bf78a93)

![To Do List - Documentação - Painel Tarefas Completas 2](https://github.com/peregozo/to-do-list/assets/160425803/fa5aaefb-ff0b-4d44-bec8-1c65869670c0)

![To Do List - Documentação - Painel Tarefas Completas 3](https://github.com/peregozo/to-do-list/assets/160425803/057aa00f-27c4-44f9-b34e-519ccc49036f)
