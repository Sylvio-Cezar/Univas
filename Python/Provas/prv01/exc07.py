def calc_sum(vector):
    sum = 0;
    for v in vector:
        sum += int(v) * int(v);
    return sum;
        

def main():
    vector = list(range(10));
    print(f"Soma dos quadrados dos elementos do vetor: {calcSum(vector)}");
    
main();