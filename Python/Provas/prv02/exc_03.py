numbers = [12, 3, 1, 7, 13, 8, 5, 6, 78, 37];

def verify_numbers(numbers):
    primos = [];
    naoPrimos = [];
    
    for n in numbers:
        if (n > 1):
            if (n != 2 and n % 2 == 0):
                naoPrimos.append(n);
            elif (n != 3 and n % 3 == 0):
                naoPrimos.append(n);
            elif (n != 4 and n % 4 == 0):
                naoPrimos.append(n);
            elif (n != 5 and n % 5 == 0):
                naoPrimos.append(n);
            elif (n != 6 and n % 6 == 0):
                naoPrimos.append(n);
            elif (n != 7 and n % 7 == 0):
                naoPrimos.append(n);
            elif (n != 8 and n % 8 == 0):
                naoPrimos.append(n);
            elif (n != 9 and n % 9 == 0):
                naoPrimos.append(n);
            elif (n != 10 and n % 10 == 0):
                naoPrimos.append(n);
            else:
                primos.append(n);
        else:
            naoPrimos.append(n);
            
    print(f"Números primos: {primos}")
        
verify_numbers(numbers);