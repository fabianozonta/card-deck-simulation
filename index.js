/*
Escreva um programa em javascript para simular um baralho de cartas. 
O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho 
e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar 
o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho 
e mostrar na tela o nome da carta puxada.
O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

let opcao = ''
const baralho = []
do{

    
    opcao = prompt('O baralho contém ' + baralho.length + ' cartas\n' + '1 - Adicionar carta\n2 - Puxar uma carta\n3 - Sair')

    switch(opcao){
        case '1':
            const novaCarta = prompt('Digite o nome da carta que deseja adicionar: ')
            baralho.push(novaCarta)
            alert(novaCarta + ' foi adicionada com sucesso')
            break
        case '2':
            const cartaPuxada = baralho.pop()
            if(!cartaPuxada){
                alert('Nenhuma carta no baralho')
            }else{
            alert('Você puxou uma ' + cartaPuxada)
        }
            break
        case '3':
            alert('Saindo do programa')
            break
        default:
            alert('Número inválido')
            break
    }

}while(opcao != 3)

