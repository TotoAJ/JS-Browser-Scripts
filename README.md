# JS-Browser-Scripts

This is for chromebook.<br>
I just want to execute scripts in the bookmark bar.<br>
<br>
Also, if you want a barebones javascript ide (for those where literally everything is blocked) paste this into your search bar: `data:text/html,<!DOCTYPE html><html><head><title>Simple JavaScript IDE</title><style>body {font-family: 'Roboto';background-color: rgb(247, 247, 247);margin: 0;padding: 0;}h1 {text-align: center;margin-top: 30px;}.container {margin: 30px auto;width: 80%;max-width: 800px;background-color: white;padding: 20px;border-radius: 5px;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);}textarea {width: 100%;border: none;border-radius: 5px;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);padding: 10px;font-size: 16px;margin-bottom: 20px;resize:none;}button {padding: 10px 20px;background-color: rgb(76, 175, 80);color: white;border: none;border-radius: 5px;font-size: 16px;cursor: pointer;margin-bottom: 20px;}pre {background-color: rgb(247, 247, 247);padding: 10px;white-space: pre-wrap;word-wrap: break-word;border-radius: 5px;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);}</style></head><body><h1>Simple JavaScript IDE</h1><div class="container"><textarea id="input" cols="80" rows="10" placeholder="Type your code here"></textarea><br /><button onclick="runCode()">Eval</button><br /><pre id="output"></pre></div><script>function runCode() {var input = document.getElementById("input").value;var output = document.getElementById("output");try {var result = eval(input);output.textContent = result;} catch (e) {output.textContent = "Error: " + e.message;}}</script></body></html>`
