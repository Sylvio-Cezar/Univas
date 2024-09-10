library = list();

def add_book(library, title, author):
    try:
        library.append({
            "title": title,
            "author": author 
        });
        
        print("\nLivro adicionado com sucesso!\n");
    except:
        print("\nFalha ao adicionar o livro!\n");

def list_books(library):
    if (library):
        actual = 1;
        print("\nLivros encontrados com sucesso:");
        for l in library:
            print(f"Livro {actual}:");
            print(f"Nome do livro: {l["title"]}");
            print(f"Autor do livro: {l["author"]}\n");
            actual += 1;
    else:
        print("\nNenhum livro encontrado!\n");
    
def find_book_by_title(library, title):
    if (library):
        hasBook = False;
        for l in library:
            if (l["title"] == title):
                print("\nLivro encontrado com sucesso:");
                print(f"Nome do livro: {l["title"]}");
                print(f"Autor do livro: {l["author"]}\n");
                hasBook = True;
        if (not hasBook):
            print("\nLivro não encontrado!\n");
    else:
        print("\nLivro não encontrado!\n");
    
def main():
    while True:
        print("1 - Adicionar livro");
        print("2 - Listar livros");
        print("3 - Buscar livro pelo título");
        print("9 - Sair");
        option = input("Selecione: ");
        
        match (option):
            case '1':
                title = input("Digite o título do livro: ");
                author = input("Digite o autor do livro: ");
                add_book(library, title, author);
            case '2':
                list_books(library);
            case '3':
                title = input("Digite o título do livro que deseja buscar: ");
                find_book_by_title(library, title);
            case '9':
                print("\nPrograma encerrado com sucesso!\n")
                break;
            case _:
                print("\nValor inválido!\n");
                
main();