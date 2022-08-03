# Instruções
### Pré-Requisitos
 - Ter [Docker Compose](https://docs.docker.com/compose/install/) instalado :whale: na máquina
 - Ter um usuário registrado no [weatherapi](https://www.weatherapi.com/) 

### Execução 
- Pegar a sua chave de api e colocar no arquivo [api](./src/services/weatherapi/api.js)
- No terminal, executar o seguinte comando:
  > ` docker-compose up -d`

### To do
- [ ] Animação de loading
- [ ] Melhorar o esquema de cores do background
- [ ] Configurar o docker pra utilizar o .env file
- [ ] Melhorar qualidade das imagens dos icones
- [ ] Implementar mais casos de testes
- [ ] Datalist com possiveis cidades para a seleção de previsão