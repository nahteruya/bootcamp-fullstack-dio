# Anotações referentes a aula de Posicionamento de elementos com Flexbox em CSS

## Flex Container

Aplicando a propriedade "display: flex" em uma tag pai, todos itens contidos nela serão transformados em flex itens. Dessa forma, os itens filhos serão posicionados um ao lado do outro.

### Propriedades relacionadas:

 - display: inicializador da propriedade flex;
 - flex-direction: direcionamento em linha ou em coluna;
 - flex-wrap: quebra de linha ou não;
 - flex-flow: concilia a propriedade flex-direction e flex-wrap;
 - justify-content: alinhar os itens do container de acordo com a sua direção;
 - align-itens: alinhar os itens de acordo com o eixo do container;
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
