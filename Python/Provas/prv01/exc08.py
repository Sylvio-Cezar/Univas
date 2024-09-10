grades = list();
media = 0;

for i in [1, 2, 3, 4]:
    grades.append(float(input(f"Digite a {i}ª nota: ")));

for g in grades:
    media += g;

if ((media / 4) >= 7):
    print("APROVADO");
else:
    media += float(input(f"Digite a nota da prova final: "));
    if ((media / 5) >= 7):
        print("APROVADO");
    else:
        print("REPROVADO");