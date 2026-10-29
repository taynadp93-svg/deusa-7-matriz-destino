// Lógica de cálculo e geração da leitura da Matriz do Destino
function calcularMapa() {
  const nomeInput = document.getElementById('nome').value.trim();
  const nascimentoInput = document.getElementById('nascimento').value;
  const erroForm = document.getElementById('erroFormulario');
  
  erroForm.innerText = '';
  
  if (!nomeInput || !nascimentoInput) {
    erroForm.innerText = 'Por favor, preencha o seu nome e data de nascimento.';
    return;
  }

  // Processo de data
  const partes = nascimentoInput.split('-');
  const ano = parseInt(partes[0], 10);
  const mes = parseInt(partes[1], 10);
  const dia = parseInt(partes[2], 10);

  // Redução dos arcanos (1 a 22)
  function reduzirArcano(num) {
    while (num > 22) {
      num = num.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    return num === 0 ? 22 : num;
  }

  const arcanoDia = reduzirArcano(dia);
  const arcanoMes = reduzirArcano(mes);
  const somaAno = ano.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
  const arcanoAno = reduzirArcano(somaAno);
  
  const somaBase = reduzirArcano(arcanoDia + arcanoMes + arcanoAno);
  const essencia = reduzirArcano(arcanoDia + arcanoMes + arcanoAno + somaBase);

  // Exibir na prévia
  document.getElementById('txtArcanoEssencia').innerText = `${essencia} - Arcano Principal`;
  document.getElementById('descEssencia').innerText = `A sua energia central vibra na frequência do Arcano ${essencia}, trazendo ensinamentos profundos sobre o seu propósito de alma e essência natural.`;

  const dinheiro = reduzirArcano(essencia + arcanoMes);
  document.getElementById('txtArcanoDinheiro').innerText = `${dinheiro} - Canal de Abundância`;
  document.getElementById('descDinheiro').innerText = `O seu potencial de prosperidade está ligado ao Arcano ${dinheiro}, indicando caminhos de desbloqueio financeiro e talentos ocultos.`;

  // Mostrar a caixa de prévia e paywall
  document.getElementById('resultadoPreview').style.display = 'block';

  // Gerar mandala se a função existir
  if (typeof desenharMandala === 'function') {
    desenharMandala(dia, mes, ano);
  }
}

function simularLiberacao(event) {
  if (event) event.preventDefault();
  document.getElementById('cardCalculadora').style.display = 'none';
  document.getElementById('blocoMandala').hidden = false;
  document.getElementById('cardSucesso').style.display = 'block';
  
  const nome = document.getElementById('nome').value || 'Viajante';
  const dataNasc = document.getElementById('nascimento').value || '';
  
  document.getElementById('tituloLeitura').innerText = `Matriz do Destino de ${nome}`;
  document.getElementById('dadosLeitura').innerText = `Data de Nascimento: ${dataNasc}`;
  
  // Conteúdo demonstrativo da leitura ampliada
  document.getElementById('conteudoLeitura').innerHTML = `
    <section class="report-section" id="leitura-essencia">
      <h3>1. A Essência e o Propósito Central</h3>
      <p>O seu mapa revela energias de transformação e liderança intuitiva. Compreender os seus arcanos permite alinhar as suas escolhas diárias com o seu potencial mais elevado, superando crenças limitantes.</p>
    </section>
    <section class="report-section" id="leitura-talentos">
      <h3>2. Talentos Ocultos e Dons</h3>
      <p>Os seus dons naturais estão focados na capacidade de inspirar e guiar os outros através da empatia, criatividade e forte intuição estratégica.</p>
    </section>
    <section class="report-section" id="leitura-abundancia">
      <h3>3. Canal de Abundância e Dinheiro</h3>
      <p>Identificar os bloqueios financeiros abre espaço para o fluxo próspero. A chave para a sua abundância reside em valorizar o seu trabalho autêntico e libertar o medo da escassez.</p>
    </section>
    <section class="report-section" id="leitura-relacoes">
      <h3>4. Padrões Relacionais e Afetos</h3>
      <p>Nas relações, a harmonia surge quando há espaço para a individualidade e comunicação transparente, curando feridas do passado e ciclos repetitivos.</p>
    </section>
  `;
}

function voltarCalculadora() {
  document.getElementById('cardSucesso').style.display = 'none';
  document.getElementById('blocoMandala').hidden = true;
  document.getElementById('cardCalculadora').style.display = 'block';
  document.getElementById('resultadoPreview').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
