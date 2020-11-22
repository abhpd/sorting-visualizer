import { updateArray } from "./../../redux/actions/updateArray";
import { delay } from "./../helpers/delayer";

const insertionSort = async (
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

    var newArr = [...array];
    console.log("insertionSort");
    console.log(newArr);

    sortedCandle(0);
    dispatch(updateArray({ arr: newArr.map((e) => e) }));
    await delay(delay_time);
    for (let i = 1; i < newArr.length; i++) {
        compareCandle([i, -1]);
        dispatch(updateArray({ arr: newArr.map((e) => e) }));
        await delay(delay_time);

        if (newArr[i - 1] > newArr[i]) {
            compareCandleNotOk([i, -1]);
            dispatch(updateArray({ arr: newArr.map((e) => e) }));
            await delay(delay_time);

            let j = i;
            while (newArr[j - 1] > newArr[j]) {
                const temp = newArr[j];
                newArr[j] = newArr[j - 1];
                newArr[j - 1] = temp;

                sortedCandle(i);
                compareCandleNotOk([j - 1, -1]);
                dispatch(updateArray({ arr: newArr.map((e) => e) }));
                await delay(delay_time);

                j--;
            }
            compareCandleNotOk([-1, -1]);
            compareCandleOk([j, -1]);
            dispatch(updateArray({ arr: newArr.map((e) => e) }));
            await delay(delay_time);
            compareCandleOk([-1, -1]);
        }

        sortedCandle(i);
        dispatch(updateArray({ arr: newArr.map((e) => e) }));
    }
    compareCandle([-1, -1]);
    await delay(1000);
    sortedCandle(-1);
    dispatch(updateArray({ arr: newArr.map((e) => e) }));
    console.log(newArr);

    updateRunning(false);
};

export default insertionSort;
