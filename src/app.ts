import { merge } from "./merge"

export function main () {

    // change the values in array here !
    const collection_1 = [1, 4, 7, 10]
    const collection_2 = [13, 10, 6, 2]
    const collection_3 = [3, 5, 9, 15]

    // execute merge function and log the result 
    console.log(merge(collection_1, collection_2, collection_3))

}

main()