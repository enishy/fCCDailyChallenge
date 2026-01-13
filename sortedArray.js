function isSorted(arr) {
    let actual = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > actual)
            actual = element;
        if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1])
            return "Not sorted";
    }
    if (actual > arr[0])
        return "Ascending"
    else
        return "Descending"
}

isSorted([1, 2, 3, 4, 5])
isSorted([10, 8, 6, 4, 2])
isSorted([1, 3, 2, 4, 5])
isSorted([3.14, 2.71, 1.61, 0.57])
isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9])
isSorted([0.4, 0.5, 0.3])