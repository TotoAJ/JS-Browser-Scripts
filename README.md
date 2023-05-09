# JS-Browser-Scripts

This is for chromebook.<br>
I just want to execute scripts in the bookmark bar.<br>
<br>
Also, if you want a barebones javascript ide paste this into your search bar: `data:text/html,<!DOCTYPE html><html><head><title>Simple JavaScript IDE</title></head><body><h1>Simple JavaScript IDE</h1><textarea id="input" cols="80" rows="10"></textarea><br /><button onclick="runCode()">Eval</button><br /><pre id="output"></pre><script>function runCode() {var input = document.getElementById("input").value;var output = document.getElementById("output");try {var result = eval(input);output.textContent = result;} catch (e) {output.textContent = "Error: " + e.message;}}</script></body></html>`
