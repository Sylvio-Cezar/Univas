def fibonacci_sequence(n):
    fibo = list(range(n));
    for f in fibo:
        if (f > 1):
            fibo[f] = fibo[f-1] + fibo[f-2];
    print(f"A sequência de Fibonacci com {n} termos é: {fibo}");        

fibonacci_sequence(int(input("Digite o tamanho desejado para a sequência: ")));
    