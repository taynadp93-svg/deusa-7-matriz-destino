// Desenho da Mandala Gráfica SVG
function desenharMandala(dia, mes, ano) {
  const container = document.getElementById('desenhoMandala');
  if (!container) return;

  // Gerador visual simples e seguro em SVG para o mapa
  container.innerHTML = `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Fundo circular da mandala -->
      <circle cx="200" cy="200" r="180" fill="#18092b" stroke="#d4af37" stroke-width="2"/>
      <circle cx="200" cy="200" r="120" fill="none" stroke="#d4af37" stroke-dasharray="4,4" stroke-width="1.5"/>
      <circle cx="200" cy="200" r="60" fill="none" stroke="#fbe396" stroke-width="1"/>
      
      <!-- Linhas cruzadas principais -->
      <line x1="200" y1="20" x2="200" y2="380" stroke="#d4af37" stroke-width="1.5"/>
      <line x1="20" y1="200" x2="380" y2="200" stroke="#d4af37" stroke-width="1.5"/>
      <line x1="72" y1="72" x2="328" y2="328" stroke="#3d1466" stroke-width="1.5"/>
      <line x1="72" y1="328" x2="328" y2="72" stroke="#3d1466" stroke-width="1.5"/>

      <!-- Pontos nodais centrais e exteriores -->
      <circle cx="200" cy="200" r="22" fill="#d4af37"/>
      <text x="200" y="206" font-size="14" font-weight="bold" fill="#0a0512" text-anchor="middle">★</text>
      
      <circle cx="200" cy="50" r="16" fill="#3d1466" stroke="#d4af37" stroke-width="1"/>
      <text x="200" y="55" font-size="11" fill="#fbe396" text-anchor="middle">${dia}</text>

      <circle cx="350" cy="200" r="16" fill="#3d1466" stroke="#d4af37" stroke-width="1"/>
      <text x="350" y="205" font-size="11" fill="#fbe396" text-anchor="middle">${mes}</text>

      <circle cx="200" cy="350" r="16" fill="#3d1466" stroke="#d4af37" stroke-width="1"/>
      <text x="200" y="355" font-size="11" fill="#fbe396" text-anchor="middle">${ano % 100}</text>

      <!-- Texto descritivo -->
      <text x="200" y="388" font-size="10" fill="#c3b5d3" text-anchor="middle">Mandala Energética Oficial - Deusa 7</text>
    </svg>
  `;

  document.getElementById('valoresMandala').innerText = `Cálculos baseados na data ${dia}/${mes}/${ano}. Geometria sagrada ativa.`;
  document.getElementById('formulasMandala').innerText = `Os eixos representam o alinhamento entre o consciente (dia ${dia}), o inconsciente emocional (mês ${mes}) e a base ancestral (ano ${ano}).`;
}