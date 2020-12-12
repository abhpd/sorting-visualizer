import { updateArray } from "./../../redux/actions/updateArray";
import { delay } from "./../helpers/delayer";

const getPivot = async (
    arr,
    l,
    r,
    dispatch,
    delay_time,
    sortedCandle,
    compareCandle,
    compareCandleOk,
    compareCandleNotOk,
    currentPivot
) => {
    const pi = r;
    currentPivot(pi);

    let cur = l - 1;

    for (let i = l; i <= r; i++) {
        compareCandle([cur, i]);
        dispatch(updateArray({ arr: arr.map((e) => e) }));
        await delay(delay_time);

        if (arr[i] < arr[pi]) {
            cur++;

            compareCandle([-1, -1]);
            compareCandleNotOk([cur, i]);
            dispatch(updateArray({ arr: arr.map((e) => e) }));
            await delay(delay_time);

            [arr[cur], arr[i]] = [arr[i], arr[cur]];

            compareCandleNotOk([-1, -1]);
            compareCandleOk([cur, i]);
            dispatch(updateArray({ arr: arr.map((e) => e) }));
            await delay(delay_time);
        }

        compareCandleOk([-1, -1]);
    }

    cur++;

    currentPivot(-1);
    compareCandle([-1, -1]);
    compareCandleNotOk([cur, pi]);
    dispatch(updateArray({ arr: arr.map((e) => e) }));
    await delay(delay_time);

    [arr[cur], arr[pi]] = [arr[pi], arr[cur]];

    compareCandleNotOk([-1, -1]);
    compareCandleOk([cur, pi]);
    dispatch(updateArray({ arr: arr.map((e) => e) }));
    await delay(delay_time);
    compareCandleOk([-1, -1]);

    return cur;
};

const recursiveQuickSort = async (
    arr,
    l,
    r,
    dispatch,
    delay_time,
    sortedCandle,
    compareCandle,
    compareCandleOk,
    compareCandleNotOk,
    currentPivot
) => {
    if (l >= r) {
        return;
    }
    const pivot = await getPivot(
        arr,
        l,
        r,
        dispatch,
        delay_time,
        sortedCandle,
        compareCandle,
        compareCandleOk,
        compareCandleNotOk,
        currentPivot
    );

    await recursiveQuickSort(
        arr,
        l,
        pivot - 1,
        dispatch,
        delay_time,
        sortedCandle,
        compareCandle,
        compareCandleOk,
        compareCandleNotOk,
        currentPivot
    );
    await recursiveQuickSort(
        arr,
        pivot + 1,
        r,
        dispatch,
        delay_time,
        sortedCandle,
        compareCandle,
        compareCandleOk,
        compareCandleNotOk,
        currentPivot
    );

    return Promise.resolve(0);
};

const quickSort = async (
    updateRunning,
    delay_time,
    array,
    dispatch,
    sortedCandle,
    compareCandle,
    compareCandleOk,
    compareCandleNotOk,
    currentPivot
) => {
    updateRunning(true);
    await recursiveQuickSort(
        array,
        0,
        array.length - 1,
        dispatch,
        delay_time,
        sortedCandle,
        compareCandle,
        compareCandleOk,
        compareCandleNotOk,
        currentPivot
    );

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
