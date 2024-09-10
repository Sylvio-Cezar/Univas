cpf = input("Insira um CPF no formato '___.___.___-__': ");
sum = 0;

cpfArray = cpf.split(".");
for c in cpfArray:
    if (len(c) == 3):
        sum += int(c);
    else:
        sub = c.split("-");
        for elem in sub:
            sum += int(elem);
            
if (sum % 2 == 0):
    print("O CPF informado é par!");
else:
    print("O CPF informado é ímpar!");