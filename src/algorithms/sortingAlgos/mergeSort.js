import { updateArray } from "./../../redux/actions/updateArray";
import { delay } from "./../helpers/delayer";

function min(a, b) {
    return a < b ? a : b;
}

function merge(arr, leftArr, rightArr) {
    console.log(leftArr);
    console.log(rightArr);
    let li = 0,
        ri = 0;
    for (let i = 0; i < arr.length; i++) {
        let min_value = 0;

        if (li >= leftArr.length) {
            min_value = rightArr[ri];
            ri++;
        } else if (ri >= rightArr.length) {
            min_value = leftArr[li];
            li++;
        } else {
            min_value = min(leftArr[li], rightArr[ri]);
            if (leftArr[li] < rightArr[ri]) {
                li++;
            } else {
                ri++;
            }
        }

        arr[i] = min_value;
        console.log(arr);
    }
}

function recursiveMergeSort(arr) {
    if (arr.length <= 1) {
        return;
    }

    let middle = Math.floor((0 + arr.length - 1) / 2);

    let left_half = arr.filter((element, indx) => indx <= middle);
    let right_half = arr.filter((element, indx) => indx > middle);

    recursiveMergeSort(left_half);
    recursiveMergeSort(right_half);

    merge(arr, left_half, right_half);
}

const mergeSort = async (
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
    recursiveMergeSort(array);

    sortedCandle(array.length);
    dispatch(updateArray({ arr: array.map((e) => e) }));

    await delay(1000);
    sortedCandle(-1);
    dispatch(updateArray({ arr: array.map((e) => e) }));

    console.log(array);
    updateRunning(false);
};

export default mergeSort;
