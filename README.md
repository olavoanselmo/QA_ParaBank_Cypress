# Projeto de testes ParaBank

<div align="center">
<img width="181" height="39" alt="logo" src="https://github.com/user-attachments/assets/add171a2-2219-4c89-9de0-83c0a701283c" />
</div>





---
## 📋 **Descrição do Projeto**

Este projeto foi criado como atividade  no bootcamp AVANTI 2026.2, focando em automação de testes utilizando Cypress. O objetivo principal foi garantir a qualidade e confiabilidade das funcionalidades da aplicação Parabank através de testes automatizados. O projeto abrange todo o ciclo de testes, desde o planejamento até a implementação.

---
## 🚀 Tecnologias Utilizadas

- JavaScript: Linguagem principal utilizada para escrever os testes.
- Cypress: framework de automação de testes End-to-End (E2E)
- Faker: Gerador de dados falsos (mas realistas) para testes e desenvolvimento. [https://fakerjs.dev/](https://fakerjs.dev/)

---
## 🛠️ Funcionalidades Implementadas

- Planejamento de Testes: Criação de um plano de testes completo, cobrindo todas as funcionalidades disponíveis, críticas da aplicação Bugbank.
- Cenários de Testes: Definição de cenários de testes claros e abrangentes, garantindo a cobertura de todos os casos de uso.
- Automação: Implementação da automação de testes com Cypress, permitindo a execução repetida dos testes de forma eficiente.

---
### Índice (em elaboração)
1. [Introdução](introducao)
2. [Objetivos](Objetivos)
3. [Ir para o título](#meu-titulo-importante)
4. [Ir para o título](#meu-titulo-importante)
5. [Estrutura do Projeto](#Estrutura-do-Projeto)

---
# 🔍 1. Introdução


## 1.1 Objetivos

Este plano de testes tem como objetivo principal definir as estratégias, o escopo e as abordagens que serão utilizadas para validar a qualidade do sistema "ParaBank" [https://parabank.parasoft.com/parabank/index.htm](https://parabank.parasoft.com/parabank/index.htm). O foco é garantir que a aplicação atenda a todos os requisitos e especificações de negócio definidos, assegurando que as principais funcionalidades operem conforme o esperado  tanto em cenários de sucesso quanto em fluxos de exceção. Dessa forma, busca-se atestar que o produto final oferece uma experiência eficiente, segura e confiável para os usuários.

---
## 1.2 Descrição da Aplicação

O ParaBank é uma aplicação web gratuita projetada especificamente para fins de estudo e prática em testes de software. Ele simula o funcionamento de um internet banking, oferecendo um ambiente seguro e estruturado para aprimorar habilidades analíticas e técnicas na validação de sistemas.

Esse site é composto pela seguinte estrutura e funcionalidades, cada uma possuindo seus próprios requisitos e regras de negócio a serem validados:

1. **Home / Tela Inicial:** Atua como porta de entrada do sistema, apresentando o formulário de acesso rápido e o redirecionamento para a criação de novas contas.  
2. **Seção de requisitos (“Conheça nossos requisitos”):** Uma área dedicada à documentação interna do sistema , que lista detalhadamente as regras de negócio e os critérios de aceite de cada módulo. Esta seção destaca que a aplicação não conta com um banco de dados, portanto, todas as informações (como usuários cadastrados, saldos e histórico de transações) são armazenadas exclusivamente na memória local do navegador. Consequentemente, os dados gerados não possuem persistência permanente e serão perdidos caso o armazenamento do navegador seja limpo ou acessado por uma janela anônima.  
3. **Login:** Funcionalidade de autenticação, englobando a validação de campos obrigatórios, formato de e-mail, e a correta exibição de mensagens de erro para credenciais inválidas ou em branco.  
4. **Cadastro:** Módulo de registro de novos usuários, que possibilita a criação de contas (com ou sem saldo inicial), validando a coerência das senhas e a obrigatoriedade dos dados fornecidos.  
5. **Transferência:** Recurso de envio de valores entre contas. Os testes devem cobrir a validação de saldo disponível, dados corretos do destinatário e os bloqueios para transferências com valores zerados ou negativos.
6. **Extrato:** Tela de consulta de histórico financeiro, responsável por listar de forma cronológica e precisa todas as movimentações de entradas e saídas realizadas na conta. 

Observação as funcionalidades Pagamento e Saque, até o momento desses testes ainda não tinham sido implementados pelo site.

---

# 2. Escopo de Teste

O site Bugbank é um recurso valioso para treinamento e desenvolvimento. Nesse projeto serão realizados testes funcionais e de compatibilidade nas principais funcionalidades da aplicação, incluindo a Home, Signup/Login, Transferência, e Extrato, visto que as páginas com função de pagamentos e saque estão em desenvolvimento. Utilizando a técnica de teste caixa preta, onde não teremos acesso ao código-fonte e será testada apenas a camada front-end.    

---
# 3\. Tipos e Níveis de Teste

Serão executados apenas testes funcionais, a fim de validar o funcionamento de cada página e de sua interface gráfica, bem como verificar a conformidade do sistema como um todo em relação aos requisitos definidos para cada funcionalidade, como login, cadastro, transferência, pagamento etc.

## 3.1 Testes Funcionais

Os testes funcionais garantem que o software funcione exatamente como os requisitos de negócios e o usuário final esperam. Eles testam o "o que" o sistema faz, ou seja, as entradas e saídas esperadas, sem se preocupar com a lógica interna do código. 

## 3.2 Integração

Verificar se as diferentes partes do sistema interagem corretamente quando combinadas, como a transferência e extrato da conta.

## 3.3 Baseados na experiência

Este método é amplamente utilizado na previsão de erros, onde os testes são derivados da habilidade e intuição do testador, bem como de sua experiência com 

aplicativos e tecnologias semelhantes. 

## 3.4 Teste Exploratório

Os testes exploratórios são uma abordagem de software onde o testador aprende, cria e executa os testes simultaneamente. 

--- 
# 4\. Técnicas de Teste 

## 4.1 Caixa preta

Esta técnica visa obter um conjunto de condições de entrada que verificam todos os requisitos funcionais de um software. Entre as vantagens deste tipo de teste estão: eliminar a necessidade de testes extensivos, servir como um guia para selecionar o conjunto de dados de entrada para teste com alta probabilidade de detecção de defeitos, não é necessário ter acesso ao código-fonte e haver uma separação entre as perspectivas do usuário e do desenvolvedor.   

---
# 5\. Ambiente de Teste

Os testes foram realizados em ambientes com as seguintes especificações: 

| Ambiente de Testes |  |  |
| ----- | :---- | :---- |
| Browser utilizado:  | Google Chrome |  |
| Versão do Browser:  | 119.0.6045.160 64 bits  |
| Tipo do sistema operacional:  | Windows  | Linux Ubuntu |
| Versão do sistema operacional:  | 22H2  | 20.04.6 LTS |
| Ambiente:  | Produção |  |
| Hardware:  | Notebook Dell Intel Core i5 |  |

---
# 6\. Papéis e Responsabilidades

A equipe é formada por dois Analistas de QA e um Team Leader e um Engineer QA que tem as seguintes responsabilidades: 

---
# 7\. Ferramentas

Iremos utilizar as seguintes ferramentas auxiliares no desempenho de nossas funções: 

| Ferramentas Utilizadas |  |
| ----- | :---- |
| Captura de tela  | ScrenPrint, Screenpresso |
| Gerador de métricas dos testes realizados  | Aio Testes, Jira, Excel |
| Gráficos e tabelas  | Planilhas do Google Sheets |
---
# 8\. Métricas  (em desenvolvimento)

As métricas que serão consideradas serão quantitativas a fim de avaliar diversos   
aspectos do processo de teste e da qualidade do software e fornecer informações objetivas sobre o desempenho, a eficácia e a eficiência das atividades de teste. 

8.1 **Estatísticas de Execução de Teste:** número total de testes executados, passados e falhados. 

8.2 **Taxa de Sucesso/Fracasso de Teste:** Proporção de testes bem-sucedidos em 
comparação com o total de testes executados. 

| Resultado dos testes  |  | Observação |
| ----- | :---- | :---- |
| Quantidade de cenários listados:  | % | Listar a quantidade de cenários total eobs. |
| Quantidade de testes de sucesso:  | % | Listar os testes bem-sucedidos ePercentual. |
| Quantidade de testes mal sucedidos:  | % | Listar os testes que falharam ePercentual. |
|Quantidade de cenários não testados: | %  | Listar os cenários não testados e o percentual e o motivo.| 
---
# 9\. Padrões 

## 9.1 Padrão de abertura e report de Bugs

Os bugs serão categorizados de acordo com a gravidade, conforme abaixo: 

- **Crítico:** Impede o uso normal do site.
- **Médio:** Impacta a funcionalidade, mas o usuário pode contornar o problema.
- **Baixo:** Problemas de usabilidade ou estilísticos que não afetam a funcionalidade.



| Abertura de Bugs |  |
| ----- | :---- |
| **ID**  | BugXXX |
| **Descrição**  | Descrição objetiva do bug |
| **Passo a passo** | Detalhamento do Bug, incluindo passos para sua reprodução. |
| **Dados de entrada**  | Dados utilizados como entrada para reproduzir o Bug |
| **Ambiente** | Forneça o ambiente em que ocorreu o Bug \- Sistema operacional, navegador, versão e hardware. |
| **Prioridade**  | Baixa \- Média \- Alta |
| **Severidade**  | Menor \- Maior \- Crítica |
| **Evidências** | Anexar capturas de tela ou arquivos para auxiliar na compreensão |
| **Responsável**  | Nome do QA responsável pela descoberta do bug |
| **Data de abertura**  | Data em que o bug foi encontrado |
| **Status**  | Aberto \- Fechado \- Reincidente |


   
## 9.2 Padrão de Especificação e Execução de Teste

Seguiremos o seguinte padrão para cada caso de teste: 

| Especificação e Execução de Teste |  |
| :---- | :---- |
| **CT ID**  | Um número ou código único para identificar o teste |
| **Descrição do CT**  | Uma breve descrição do que o teste está avaliando. |
| **Prioridade**  | Alta \- Média \- Baixa |
| **Autor**  | Responsável pela execução do teste |
| **Ambiente** | Informar em qual ambiente serão realizados os testes,como sistema operacional, navegadores e computadores |
| **Pré Condições**  | O que é necessário para executar os testes |
| **Dados de Entrada**  | Dados necessários para executar os testes |
| **Passo a Passo**  | Passo a passo para reproduzir o teste |
| **Resultado Esperado**  | O que esperamos que o sistema faça |
| **Resultado Atual**  | O resultado real apresentado |
| **Resultado Observado** | Anotações de percepções que auxiliam no entendimento do resultado obtido ou na correção necessária. |

---
# 10\. Escopo de Automação de Teste

| Funcionalidade: Login |  |
| :---- | :---- |
| **ID**  | **Cenários** |
| 001  | Cadastro |
| 002  | Login |
| 003  | Transferências |
| 004  | Extrato |

| Funcionalidade: Cadastro de usuário |  |
| :---- | :---- |
| **ID**  | **Cenários** |
| 001  | Login com credenciais corretas |
| 002  | Login com credenciais incorretas |
| 003  | Logout do usuário |

| Funcionalidade: Transferências |  |
| :---- | :---- |
| **ID**  | **Cenários** |
| 001  | Login com credenciais corretas |
| 002  | Login com credenciais incorretas |
| 003  | Logout do usuário |


| Funcionalidade: Extrato |  |
| :---- | :---- |
| **ID**  | **Cenários** |
| 001  | Login com credenciais corretas |
| 002  | Login com credenciais incorretas |
| 003  | Logout do usuário |

---

# 11\. Cronograma 

| Etapas  | Entrega | Data de início  | Data de término |
| :---- | :---- | ----- | ----- |
| Planejar | Plano de testes |  | 17/07/2026 |
| Projetar | Especificação de testes  Relatório de testes | 18/07/2026 | 27/07/2026 |
| Executar | 4\. Relatório de bugs | 27/07/2026 | 01/08/2026 |
| Avaliar  |  |  | 03/08/2026 (segunda) Obs:Entrega final 05/08 |


Processo de testes

| Fases/processos | Artefato |
| :---- | :---- |
| Planejamento  | Plano de testes |
| Elaboração | Especificação de testes |
| Execução | Relatório de testes e bugs. |
| Automação |  |



---
# 12 📦 Estrutura do Projeto

```QA_BUGBANK
|-- Cypress/
|   |--e2e
|-- documentos/
|   |--1.Plano de testes
|   |--2.Casos de Testes
|   |--3.Relatorio de testes
|   |--4.Relatorio de testes
|   |--5.Automação de testes
|-- node_modules/
|-- README.md

```
---
## Referência

- [Site BugBank](https://bugbank.netlify.app/)
---
## ✒️ Autor

- Olavo Anselmo

- [Linkedin](https://www.linkedin.com/in/olavo-cavalcanti-0278a072)
