<div align="center">
    <h1>📊 K6 Performance Tests 📊</h1>
</div>
O repositório K6 Performance Tests foi desenvolvido com o objetivo de criar testes de desempenho na API de teste do K6 usando a ferramenta K6 com JavaScript. Os testes foram executados localmente e no Grafana Cloud através do terminal.

## 🎯 Resultados dos testes

<img width="100%" alt="k6_grafana1" src="https://github.com/DjalmaHenry/k6-performance-tests/assets/45500812/4cf174c3-0261-49a1-ae88-4a1f1c29a2c3">
<img width="100%" alt="k6_grafana2 (1)" src="https://github.com/DjalmaHenry/k6-performance-tests/assets/45500812/87832a1d-0c8a-4e40-ada0-125ab9091a12">
<img width="100%" alt="k6_grafana3 (1)" src="https://github.com/DjalmaHenry/k6-performance-tests/assets/45500812/751749f3-572f-48ec-be0d-1b792251bfb1">
<img width="100%" alt="k6_grafana4 (1)" src="https://github.com/DjalmaHenry/k6-performance-tests/assets/45500812/6d809c11-fd4c-4f8c-a57f-0cab5d32d201">
<img width="100%" alt="k6_grafana5" src="https://github.com/DjalmaHenry/k6-performance-tests/assets/45500812/8a48fa8f-7518-42a8-9046-8220ae863fdf">


## 🖥️ Deploy com K6 Reporter

Link do deploy: https://djalmahenry.github.io/k6-performance-tests/

## 🛠 Tecnologias Utilizadas
Este projeto utiliza as seguintes tecnologias:

* [K6](https://k6.io/docs/) 🐊
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide) 🟨
* [Grafana Cloud](https://grafana.com/docs/grafana-cloud/) ☁

Cada uma dessas tecnologias desempenha um papel importante nos testes de desempenho realizados por este repositório:

<b>K6:</b> É a ferramenta principal usada para criar e executar os testes de desempenho. Ele permite a criação de scripts de teste em JavaScript para simular o tráfego para a API e coletar métricas de desempenho.

<b>JavaScript:</b> É a linguagem de programação usada para escrever os scripts de teste. O K6 suporta JavaScript, o que permite a criação de testes complexos e personalizados.

<b>Grafana Cloud:</b> É a plataforma utilizada para visualizar os resultados dos testes. Os resultados dos testes realizados localmente e na nuvem podem ser enviados para o Grafana Cloud para análise e visualização.

## ⚙️ Como rodar o projeto
Para começar, é necessário instalar o K6 em seu ambiente.<br>
Aqui estão as instruções para instalação no Linux, MacOS, Windows e Docker:

### Linux

#### Para Debian/Ubuntu:

```
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

#### Para Fedora/CentOS:

```
sudo dnf install https://dl.k6.io/rpm/repo.rpm
sudo dnf install k6
```

#### MacOS

```
brew install k6
```

#### Windows

Com Chocolatey:
```
choco install k6
```

Com Windows Package Manager:
```
winget install k6
```

#### Docker

```
docker pull grafana/k6
```

Após a instalação, clone o repositório:

```
git clone https://github.com/DjalmaHenry/K5-Performance-Tests.git
```

### 🏃‍♂️ Rodando um teste local

Para executar um teste local, você pode usar um dos scripts de exemplo para executar, use o comando:
```
k6 run loginUsers.js
```

### ☁️ Rodando um teste no Grafana Cloud

Primeiro, é necessário fazer login no Grafana Cloud usando o comando:
```
k6 login cloud --token YourToken
```

Em seguida, você pode executar os testes no Grafana Cloud usando o comando:
```
k6 cloud loginUsers.js
```
