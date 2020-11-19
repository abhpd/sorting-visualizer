import { updateArray } from "./../../redux/actions/updateArray";
import { delay } from "./../helpers/delayer";

const selectionSort = async (
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
    console.log("selectionSort");
    console.log(newArr);

    for (let i = 0; i < newArr.length; i++) {
        await delay(delay_time);
        var min_indx = i;

        for (let j = i + 1; j < newArr.length; j++) {
            await delay(delay_time);
            compareCandleOk([min_indx, -1]);
            compareCandle([j, -1]);
            dispatch(updateArray({ arr: newArr.map((e) => e) }));

            if (newArr[j] < newArr[min_indx]) {
                await delay(delay_time);
                compareCandleOk([-1, -1]);
                compareCandle([-1, -1]);
                compareCandleNotOk([min_indx, j]);

                dispatch(updateArray({ arr: newArr.map((e) => e) }));
                await delay(delay_time);

                min_indx = j;

                compareCandleNotOk([-1, -1]);
                compareCandleOk([min_indx, -1]);
                dispatch(updateArray({ arr: newArr.map((e) => e) }));
            }
        }
        dispatch(updateArray({ arr: newArr.map((e) => e) }));
        await delay(delay_time);

        compareCandle([-1, -1]);
        dispatch(updateArray({ arr: newArr.map((e) => e) }));

        compareCandleNotOk([i, min_indx]);
        dispatch(updateArray({ arr: newArr.map((e) => e) }));
        await delay(delay_time);

        const temp = newArr[i];
        newArr[i] = newArr[min_indx];
        newArr[min_indx] = temp;

        compareCandleNotOk([-1, -1]);
        compareCandleOk([i, min_indx]);
        dispatch(updateArray({ arr: newArr.map((e) => e) }));
        await delay(delay_time);
        compareCandleOk([-1, -1]);

        sortedCandle(i);
        dispatch(updateArray({ arr: newArr.map((e) => e) }));
    }

    compareCandleOk([-1, -1]);
    compareCandle([-1, -1]);
    compareCandleNotOk([-1, -1]);

    await delay(1000);
    sortedCandle(-1);
    dispatch(updateArray({ arr: newArr.map((e) => e) }));
    console.log(newArr);

    updateRunning(false);
};

export default selectionSort;
