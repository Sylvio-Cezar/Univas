produtos = [];

def criar_produto(nome, codigo, preco, estoque):
    print(f"\n{nome} criado com sucesso!");
    return (nome, codigo, preco, estoque);

def atualizar_estoque(produto, estoque):
    print(f"\nEstoque de {produto[0]} atualizado com sucesso!");
    return (produto[0], produto[1], produto[2], estoque[0]);

def listar_produtos(produtos):
    index = 1;
    for p in produtos:
        print(f"\n{index}º produto:");
        print(f"Nome: {p[0]}");
        print(f"Código: {p[1]}");
        print(f"Preço unitário: {p[2]}");
        print(f"Quantidade em estoque: {p[3]}\n");
        index += 1

produtos.append(criar_produto("Produto 1", 1, 15.30, 15));
produtos.append(criar_produto("Produto 2", 2, 16.30, 10));
produtos.append(criar_produto("Produto 3", 3, 14.30, 20));

produtos[1] = atualizar_estoque(produtos[1], (25,));

listar_produtos(produtos);