// Adiciona um ouvinte de evento ao botão com id 'btnDownload'
    document.getElementById('btnDownload').addEventListener('click', function () {
      
      // Cria dinamicamente um elemento <a> (âncora) no DOM
      const link = document.createElement('a');
      
      // Define o destino do link como o caminho do arquivo a ser baixado
      link.href = 'https://raw.githubusercontent.com/Yuoneeh/Projeto_Game_and_Site_Portas/main/Jogo_executável/Logic_gate_GDscript.rar'; // Caminho relativo para o arquivo no servidor
      
      // Define o nome padrão que o arquivo terá ao ser baixado
      link.download = 'Logic_gate_GDscript.rar';

      // Adiciona o link invisivelmente ao corpo do documento
      document.body.appendChild(link);

      // Simula um clique no link para iniciar o download
      link.click();

      // Remove o link do DOM após o clique
      document.body.removeChild(link);
    });
