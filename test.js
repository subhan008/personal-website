function heapify(arr,n,i) {
    let largest = i
    let l = 2*i+1
    let r = 2*i+2

    if(l<n && arr[l] > arr[largest]){
        largest = l
    }
    if(r < n && arr[r] > arr[largest]){
        largest = r
    }

    if(largest != i){
        let temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp

        heapify(arr,n,largest)
    }

}


    function heapSort(arr) {
    let n = arr.length
    for (let i = Math.floor(n/2)-1; i>=0 ; i--) {
        
        heapify(arr,n,i)
        
    }

    for (let i = n-1 ; i >0  ; i++) {
         let temp = arr[0]
         arr[0] = arr[i]
         arr[i] = temp

         heapify(arr,i,0)
    }
 }

let arr = [8,7,100,20,1,14]

heapSort(arr)

console.log(arr);