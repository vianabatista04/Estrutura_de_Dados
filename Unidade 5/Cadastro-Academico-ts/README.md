# Cadastro Acadêmico Modular

Aplicação didática refatorada para **TypeScript** para cadastro e gerenciamento de alunos, turmas e chamados em memória. 
O projeto demonstra conceitos de tipagem estática (*type aliases*, *union types*, *unknown* narrowing, *readonly*), funções de serviço e módulos ECMAScript.

## Requisitos

- Node.js
- npm

## Instalação

bash
npm install

## Execução

bash
npm start

# Outros scripts disponíveis:
- npm run build: Compila os arquivos do projeto de src/ para dist/.
- npm run type-check: Executa a checagem estática de tipos via npx tsc --noEmit sem emitir arquivos de saída.

## Funcionalidades

- Cadastrar aluno
- Validar dados de entrada
- Calcular média e situação do estudante
- Buscar estudante por matrícula (com tratamento para registros inexistentes)
- Criar turma e matricular alunos ativos
- Abrir chamado associado ao estudante
- Atualizar status do chamado (ABERTO, EM_ATENDIMENTO, FINALIZADO)

## Organização

- `tipos`: Definição dos type aliases e interfaces imutáveis
- `validacao`: Funções utilitárias de verificação e narrowing de dados
- `servicos`: Coordenação dos casos de uso e armazenamento em memória
- `app.ts`: Ponto de entrada que executa o fluxo principal e a apresentação no console

## Limitações

- Os dados são mantidos em memória e são reinicializados quando o programa encerra.

## Autoria

Maria Clara Batista Viana Silva — TADS 2026.1 — 2026

