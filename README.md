# Projeto Clima Agora 🌦️

Este projeto tem como objetivo exibir o clima atual de qualquer cidade utilizando a API do OpenWeatherMap, com funcionalidades adicionais de **autocomplete** para facilitar a busca, **modo escuro/claro** e **armazenamento local de buscas recentes**.

## Funcionalidades

- **Busca de clima por cidade**: Insira o nome de uma cidade e obtenha o clima atual, incluindo temperatura, condição climática e descrição.
- **Autocomplete**: Sugestões de cidades são mostradas enquanto você digita, tornando a busca mais rápida e intuitiva.
- **Modo escuro/claro**: Alterne entre o modo claro e escuro para uma experiência mais confortável.
- **Buscas recentes**: O histórico das últimas cidades pesquisadas é salvo no `localStorage` e exibido na tela. Basta clicar em uma busca recente para visualizá-la novamente.

## Tecnologias

- **Frontend**: HTML, CSS, JavaScript
- **Backend (API)**: Node.js, Express, Fetch API, dotenv
- **APIs**: OpenWeatherMap API, Teleport API (para autocomplete)
- **Armazenamento**: LocalStorage

## Como executar localmente

### Pré-requisitos

- **Node.js** instalado (https://nodejs.org)
- **Chave da API OpenWeatherMap**: Você pode obter sua chave de API gratuita [aqui](https://openweathermap.org/appid).

### Passo a passo para rodar o projeto:

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/ProjetoClima.git
   cd ProjetoClima
