# Suporte Acadêmico Orientado a Objetos

Aplicação didática em JavaScript (Node.js com Módelos ECMAScript) que simula um sistema de suporte acadêmico em memória.
O projeto demonstra conceitos fundamentais de Orientação a Objetos, como encapsulamento estrito com campos privados (`#`), composição, associação entre objetos, validação de invariantes e gerenciamento de filas FILO.

## Requisitos

- Node.js instalado
- npm

## Instalação

bash
npm install

## Execução

bash
npm start

## Funcionalidades

- **Gerenciamento de Estudantes**: Cadastro com matrícula, nome e curso, adição de notas validadas (entre 0 e 10) e cálculo automatizado de médias.
- **Gestão de Turmas e Composição**: Criação de turmas e matrícula de estudantes via controle interno de vínculos (VinculoNaTurma), garantindo o bloqueio de matrículas duplicadas para a mesma matrícula institucional.
- **Ciclo de Vida de Chamados**: Abertura de chamados vinculados a estudantes e controle rigoroso de transições de estado (ABERTO → EM_ATENDIMENTO → FINALIZADO).
- **Fila de Atendimento (FIFO)**: Organização e processamento de chamados na ordem de chegada (First In, First Out), garantindo retorno nulo ao consultar filas vazias.
- **Encapsulamento e Projeções**: Exposição segura do estado interno através de resumos literais e cópias defensivas, sem expor arrays e campos privados diretamente.

## Organização

- `src/models/`: Definição das classes principais com atributos privados (#), métodos de instância e invariantes do domínio (Estudante, Chamado, Turma, VinculoNaTurma, FilaAtendimento).
- `src/config/`: Configurações pontuais do sistema (como parâmetros de aprovação e versão) via objetos literais.
- `src/app.js`: Script principal com o cenário mínimo de demonstração e execução das regras do sistema.


## Limitações

- Todos os dados são mantidos apenas em memória e são perdidos ao encerrar a execução do programa.
- As exceções usadas durante validações rígidas devem ser tratadas na camada de chamada(ex: blocos try/catch).

## Autoria

Maria Clara Batista Viana Silva — TADS 2026.1 — 2026

