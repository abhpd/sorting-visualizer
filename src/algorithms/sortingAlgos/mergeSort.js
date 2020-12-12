import { updateArray } from "./../../redux/actions/updateArray";
import { delay } from "./../helpers/delayer";

let original_array = [];

const merge = async (
    arr,
    leftArr,
    rightArr,
    base_indx,
    dispatch,
    delay_time,
    sortedCandle,
    compareCandle,
    compareCandleOk,
    compareCandleNotOk
) => {
    let li = 0,
        ri = 0;

    compareCandle([base_indx, base_indx + arr.length - 1]);

    for (let i = 0; i < arr.length; i++) {
        //--
        compareCandleOk([-1, -1]);
        compareCandleNotOk([-1, base_indx + i]);

        dispatch(updateArray({ arr: original_array.map((e) => e) }));
        await delay(delay_time);
        //--
        let min_value = 0;

        if (li >= leftArr.length) {
            min_value = rightArr[ri];
            ri++;
        } else if (ri >= rightArr.length) {
            min_value = leftArr[li];
            li++;
        } else {
            if (leftArr[li] < rightArr[ri]) {
                min_value = leftArr[li];
                li++;
            } else {
                min_value = rightArr[ri];
                ri++;
            }
        }

        arr[i] = min_value;

        //reflecting new merged array to the current state
        for (let i = 0; i < arr.length; i++) {
            original_array[base_indx + i] = arr[i];
        }
        compareCandleNotOk([-1, -1]);
        compareCandleOk([-1, base_indx + i]);
        dispatch(updateArray({ arr: original_array.map((e) => e) }));
        await delay(delay_time);
        //--
    }

    compareCandleOk([-1, -1]);
    compareCandle([-1, -1]);

    return Promise.resolve(0);
};

const recursiveMergeSort = async (
    arr,
    base_indx,
    dispatch,
    delay_time,
    sortedCandle,
    compareCandle,
    compareCandleOk,
    compareCandleNotOk
) => {
    if (arr.length <= 1) {
        return Promise.resolve(0);
    }

    let middle = Math.floor(arr.length / 2);

    let left_half = arr.filter((element, indx) => indx < middle);
    let right_half = arr.filter((element, indx) => indx >= middle);

    await recursiveMergeSort(
        left_half,
        base_indx,
        dispatch,
        delay_time,
        sortedCandle,
        compareCandle,
        compareCandleOk,
        compareCandleNotOk
    );

    await recursiveMergeSort(
        right_half,
        base_indx + middle,
        dispatch,
        delay_time,
        sortedCandle,
        compareCandle,
        compareCandleOk,
        compareCandleNotOk
    );

    arr = await merge(
        arr,
        left_half,
        right_half,
        base_indx,
        dispatch,
        delay_time,
        sortedCandle,
        compareCandle,
        compareCandleOk,
        compareCandleNotOk
    );

    return Promise.resolve(0);
};

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

    original_array = array;

    await recursiveMergeSort(
        array,
        0,
        dispatch,
        delay_time,
        sortedCandle,
        compareCandle,
        compareCandleOk,
        compareCandleNotOk
    );

    sortedCandle(array.length);
    dispatch(updateArray({ arr: array.map((e) => e) }));

    await delay(1000);
    sortedCandle(-1);
    dispatch(updateArray({ arr: array.map((e) => e) }));

    console.log(array);
    updateRunning(false);
};

export default mergeSort;
