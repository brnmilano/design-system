import { colors } from '@brnmilano-ui/tokens'
import { getContrast } from 'polished'

/**
 * @description Permite fazer vários calculos com as cores, como por exemplo,
 * pegar a cor de contraste de uma cor, para que o texto tenha uma boa legibilidade.
 * Caso o contraste da cor seja maior que 3.5, a cor do texto será preta, caso
 * contrário, será branca. 
 * @param color - string
 * @param color2 - string
 * @returns string
 */
function getContrastColor(color: string, color2: string) {
  return getContrast(color, color2) > 3.5 ? 'black' : 'white'
}

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrastColor(color, '#000000'),
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
