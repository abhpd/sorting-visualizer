import { updateArray } from "./../../redux/actions/updateArray";
import { delay } from "./../helpers/delayer";

const bubbleSort = async (
    delay_time,
    array,
    sortedCandle,
    compareCandle,
    compareCandleOk,
    compareCandleNotOk,
    dispatch
) => {
    var newArr = [...array];
    console.log("hello");
    console.log(newArr);

    for (let i = 0; i < newArr.length; i++) {
        var no_swap = true;
        for (let j = 0; j < newArr.length - i - 1; j++) {
            compareCandle([j, j + 1]);
            dispatch(updateArray({ arr: newArr.map((e) => e) }));
            await delay(delay_time);

            if (newArr[j] > newArr[j + 1]) {
                compareCandle([-1, -1]);
                compareCandleNotOk([j, j + 1]);
                dispatch(updateArray({ arr: newArr.map((e) => e) }));
                await delay(delay_time);

                no_swap = false;
                [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
                dispatch(updateArray({ arr: newArr.map((e) => e) }));

                compareCandleNotOk([-1, -1]);
            }
            compareCandle([-1, -1]);
            compareCandleOk([j, j + 1]);
            dispatch(updateArray({ arr: newArr.map((e) => e) }));
            await delay(delay_time);
            compareCandleOk([-1, -1]);
        }

        if (no_swap) {
            sortedCandle(-1);
            dispatch(updateArray({ arr: newArr.map((e) => e) }));
            break;
        } else {
            sortedCandle(newArr.length - i - 1);
        }
    }
    await delay(1000);
    sortedCandle(newArr.length);
    dispatch(updateArray({ arr: newArr.map((e) => e) }));
    console.log(newArr);
};

export default bubbleSort;
