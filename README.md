<h1>Decodificador de código morse</h1>
<h2>Descrição 📜</h2>
<p>Código que transforma escritas em morse para texto legível. Foi feito baseado num desafio do <a href='https://www.codewars.com/kata/54b724efac3d5402db00065e'>Codewars</a>.
<hr>
<h2>Baixando o repositório:</h2>
<p>Por ser apenas um arquivo e de poucas linhas, você pode optar por copiar e colar, caso o contrário, também pode baixar na sua máquina com o uso da ferramenta <a href='https://git-scm.com/'>Git</a>. Recomenda-se o uso de um editor de código como o <a href='https://code.visualstudio.com/'>Vscode</a>.</p>

```bash
#Clone o repositório
git clone https://github.com/davimoreiraa/morse-decoder.git

#Entre no repositório baixado
cd morse-decoder
```

<hr>
<h2>Como usar:</h2>
<p>Para traduzir um texto morse, basta chamar a função decodeMorse() passando seu código em morse como parâmetro. Para fazer um teste, basta imprimir no console o chamado da função.
<br>
Ao passar o código morse, é preciso se atantar a algumas regras: cada letra do texto é separada por um espaço, e cada palavra é separada por três espaços.
</p>
<h3>Exemplo:</h3>

```bash
console.log(decodeMorse('--- ..   -.. .- ...- ..'))
// OI DAVI
```

<hr>
<h2>Tabela código morse</h2>
<img width='70%' src='morse-chart.jpg'/>
