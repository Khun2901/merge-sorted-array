export const merge = (
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] => {

    const result: number[] = [];
    let i = 0;                  
    let j = collection_2.length - 1;  
    let k = 0;                 

    while (i < collection_1.length || j >= 0 || k < collection_3.length) {
        const candidates: { val: number; from: 'a' | 'b' | 'c' }[] = [];

        if (i < collection_1.length) candidates.push({ val: collection_1[i], from: 'a' });
        if (j >= 0) candidates.push({ val: collection_2[j], from: 'b' }); // read in reverse
        if (k < collection_3.length) candidates.push({ val: collection_3[k], from: 'c' });

        let min = candidates[0];
        for (const candidate of candidates) {
            if (candidate.val < min.val) min = candidate;
        }

        result.push(min.val);

        if (min.from === 'a') i++;
        else if (min.from === 'b') j--;
        else if (min.from === 'c') k++;
    }

    return result;
}
