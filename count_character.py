#conta quantas vezes cada letra aparece numa frase
#proibido o usdo de count()
frase = input('DIgite uma frase para ver quantas vezes cada letra aparece: ')

caractere_sem_duplicar = []
i = 0
while i < len(frase): #criando um array com as caractere, sem duplicatas
    if frase[i].lower() not in caractere_sem_duplicar:
        caractere_sem_duplicar.append(frase[i].lower())

    i += 1

resultado =[]
i = 0

while i < len(caractere_sem_duplicar): #comparando cada caractere do array criado com as letras da frase
    i_caractere_comparar = 0
    contador = 0
    while i_caractere_comparar < len(frase):
        if caractere_sem_duplicar[i] == frase[i_caractere_comparar].lower():
            contador += 1
        i_caractere_comparar += 1
    resultado.append(f'{caractere_sem_duplicar[i].lower()}={contador}')
    i += 1

print(resultado)