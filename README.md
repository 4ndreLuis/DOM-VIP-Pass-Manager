# VIP Pass Manager

Um sistema de controle de acesso para eventos exclusivos desenvolvido para praticar gerenciamento de estado e manipulação de DOM com TypeScript.

## O que este projeto faz?

Este projeto simula a portaria de um evento VIP com limite de lotação. Ele controla a entrada de convidados, valida os dados inseridos e gerencia a disponibilidade de vagas em tempo real.

## Conceitos aplicados

Neste projeto, foquei em aplicar conceitos fundamentais de desenvolvimento web moderno:

- **Estado Global:** Uso de variáveis para persistir dados (como o nome do último convidado e o número de vagas) entre diferentes funções.
- **Manipulação de DOM com TS:** Seleção estrita de elementos e uso de _Type Assertion_ para garantir a segurança do código.
- **Lógica de Fluxo:** Implementação de "Guard Clauses" para validar inputs vazios e travas de segurança para impedir entradas quando o limite é atingido.
- **Interface Dinâmica:** Feedback visual em tempo real (mudança de cores e desativação de botões) baseado no estado do sistema.

## Tecnologias

- HTML5 / CSS3 (Layout moderno com variáveis CSS)
- TypeScript

---

_Este é um projeto de estudo para consolidação de fundamentos de lógica e interação com o usuário._
