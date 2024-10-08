def check_palindromo(word):
    try:
        list_word = [];
        new_word = '';
        for w in word:
            list_word.append(w);
        list_word.reverse();
        for w in list_word:
            new_word += w
        print(new_word)
        if(new_word == word):
            print(f"{word} é um palíndromo!");
        else:
            print(f"{word} não é um palíndromo!");
    except:
        print("Erro ao fazer a checagem!");
        


check_palindromo(input("Escreva uma palavra qualquer: "));