tupleList = [
    ("Estiva", 31, 25, 28, 30, 34, 30, 31),
    ("Pouso Alegre", 28, 24, 29, 32, 31, 28, 33),
    ("Cambuí", 30, 28, 27, 25, 30, 32, 30),
];

def calc_media(tuples):
    mediaList = [];
    finalList = [];
    index = 0;
    for t in tuples:
        temp = 0
        for city in t:
            try:
                aux = len(city);
            except:
                temp += city;
        mediaList.append(temp / len(t) - 1);
    for t in tuples:
        finalList.append(
            (t[0], mediaList[index])
        );
        index += 1;
    print(finalList);
        
calc_media(tupleList);