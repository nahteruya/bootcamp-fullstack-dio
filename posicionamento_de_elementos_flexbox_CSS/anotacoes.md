# Anotações referentes a aula de Posicionamento de elementos com Flexbox em CSS

## Flex Container

Aplicando a propriedade "display: flex" em uma tag pai, todos itens contidos nela serão transformados em flex itens. Dessa forma, os itens filhos serão posicionados um ao lado do outro.

### Propriedades relacionadas:

 - display: inicializador da propriedade flex;

 - flex-direction: direcionamento em linha ou em coluna;
   -  row: direção horizontal no sentido da esquerda para a direta;
   - row-reverse: direção horizontal no sentido da direita para a esquerda;
   - column: direção vertical no sentido de cima para baixo;
   - column: direção vertical no sentido de baixo para cima;

 - flex-wrap: quebra de linha ou não;
   - nowrap: não há a quebra de linha, o container comporta todos os itens contidos nele ou não comporta, fazendo com que os itens ultrapassem o limite do container.
   - wrap: permite a quebra de linha, de forma que o primeiro elemento que não seja comportado na primeira linha do container, ele passe a ocupar a segunda linha
   - wrap-reverse: permite a quebra de linha, de forma que o primeiro elemento que não seja comportado na primeira linha do container, ele passe a ocupar a linha acima.

 - flex-flow: concilia a propriedade flex-direction e flex-wrap;
   - flex-flow: row nowrap;

 - justify-content: alinhar os itens do container de acordo com a sua direção;
   - justify-content: flex-start => posiciona os itens ajustados para o lado esquerdo;
   - justify-content: flex-end => posiciona os itens ajustados para o lado direito;
   - justify-content: center => posisiona os itens ajustados ao centro;
   - justify-content: space-between => posiciona os itens de forma a adicionar espaços iguais entre os itens.
   - justify-content: space-around => posiciona os itens de forma a adicionar "margens" iguais ao redor de cada item.

 - align-itens: alinhar os itens de acordo com o eixo do container;
   - center: alinha os itens ao centro;
   - stretch: padrão;
   - flex-start: alinhamento dos itens no início;
   - flex-end: alinhamento dos itens no final;
   - baseline: alinhamento de acordo com a linha base da tipografia dos itens;

 - align-content: alinhar as linhas do container;

## Flex Item

São os elementos filhos diretos de um flex container. E que tambpem podem ser flex container, desde que o flex item contenha itens netos.

### Propriedades relacionadas:

 - flex-grow: define o fator de crescimento;
 - flex-basis: define o tamanho inicial do item antes da distribuição do espaço restante dentro do container;
 - flex-shrink: capacidade de redução;
 - flex: concilia as propriedades flex-grow, flex-basis e flex-shrink;
 - order: ordem de distribuição e listagem dos itens;
 - align-self: alinhamento de um item específico do flex container, 

