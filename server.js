const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve tutti i file statici nella cartella corrente
app.use(express.static(path.join(__dirname)));

// Fallback: serve il file HTML principale
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'camilla_delfino_v10_final.html'));
});

app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
