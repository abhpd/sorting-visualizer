import { updateArray } from "./../../redux/actions/updateArray";
import { delay } from "./../helpers/delayer";

function getPivot(arr, l, r) {
    const pi = r;

    let cur = l - 1;

    for (let i = l; i <= r; i++) {
        if (arr[i] < arr[pi]) {
            cur++;
            [arr[cur], arr[i]] = [arr[i], arr[cur]];
        }
    }

    cur++;
    [arr[cur], arr[pi]] = [arr[pi], arr[cur]];

    return cur;
}

function recursiveQuickSort(arr, l, r) {
    if (l >= r) {
        return;
    }

    const pivot = getPivot(arr, l, r);

    recursiveQuickSort(arr, l, pivot - 1);
    recursiveQuickSort(arr, pivot + 1, r);

    console.log(arr);
}

const quickSort = async (
    updateRunning,
    delay_time,
    array,
    dispatch,
    sortedCandle,
    compareCandle,
    compareCandleOk,
    compareCandleNotOk
) => {
    updateRunning(true);
    recursiveQuickSort(array, 0, array.length - 1);

    sortedCandle(array.length);
    dispatch(updateArray({ arr: array.map((e) => e) }));

    await delay(1000);
    sortedCandle(-1);
    dispatch(updateArray({ arr: array.map((e) => e) }));

    console.log(array);
    updateRunning(false);
};

export default quickSort;

// const aa = [
//     234,
//     21,
//     34,
//     214,
//     12,
//     34,
//     2,
//     34,
//     213,
//     42,
//     4,
//     23,
//     4,
//     12,
//     4,
//     214,
//     213,
//     4,
//     231,
//     5,
//     32,
//     5,
//     235,
//     23,
//     5,
//     23,
//     5,
//     32,
//     512,
//     5,
//     321,
//     35,
//     12,
//     35,
//     12,
//     5,
//     123,
//     5213,
//     5,
//     2,
//     1,
// ];

// recursiveQuickSort(aa, 0, aa.length - 1);
