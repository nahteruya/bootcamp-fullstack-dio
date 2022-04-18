# Comandos Git para sistema Windows
## Comandos Git para navegação 
 - dir: comando para listar as pastas presentes dentro do diretório em que está.
 - cd <file>: comando para acessar uma pasta do diretório em que está.
 - cd ..: comando para sair da pasta e retornar o diretório que contém a pasta.
 - ls: comando para listar as pastas e documentos presentes no diretório em que está.
    - ls -a: comando para listar as pastas ocultas presentes no diretório em que está. 

## Comandos Git para criação/remoção de diretórios/documentos
 - mkdir <novo_diretorio>: comando para criar um diretório.
 - touch <novo_arquivo>: comando para criar um arquivo (é necessário colocar a extensão do arquivo, por exemplo, .txt, .md, .html, .css, .js, etc).
 - echo text > text.txt: comando para criar um arquivo text.txt e escrever "text" no arquivo recém criado.
 - del diretorio: comando para deletar todas as pastas/documentos do diretório.
 - rmdir : deletar diretório e todas as pastas contidas nele.

## Comando Git para inicialização do repositório do Git
 - git init: comando para inicializar um repositório do Git. Pelo que entendi, você cria um diretório (mkdir), acessa-o (cd) e depois o inicializa como repositório do Git. Dessa forma, você transforma o diretório em um repositório Git com o subdiretório .git, possibilitando a inicialização da gravação das versões do seu projeto.
  
## Comandos Git para configuração
  1. git config --global user.email "_name@email.com_"
  2. git config --global user.name _Nickname_

## Comandos Git para alteração do status do arquivo
![File Status Lifecycle](https://git-scm.com/book/en/v2/images/lifecycle.png)
 - git add <file>: comando para adicionar arquivo no status staged.
 - git commit: comando para comitar as alterações realizadas no arquivo, movendo-o para o status unmodified e possibilitando novas alterações.
 - git rm <file>: comando para remover o arquivo do repositório, movendo-o para o status untracked.

## Comandos Git para alteração de repositório local <=> ropositório remoto
![File areas](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkR67ou_uFvWpmLZQ4EFd-0UWz5mFuu8B5hEg0ti9ofxEQV7QbVD1hX6dEIeRz3R2tbSY&usqp=CAU)
O repositório local refere-se ao repositório da máquina em que está utilizando para desenvolver o código. Já o repositório remoto refere-se ao GitHub.
 - git push origin main: comando para subir na nuvem o arquivo staged com as devidas alterações.
   - OBS: não é possível dar git push em um arquivo sem comitar antes. 
 - git pull origin main: comando para baixar o arquivo com as alterações realizadas diretamente no GitHub. 
   - OBS: não é possível dar git push em um arquivo que sofreu alterações diretamente no GitHub ou que outro usuário alterou localmente. Por isso, é necessário dar git pull e comparar as duas alterações realizadas, evitando conflitos entre alterações diferentes feitas na mesma linha de código. 