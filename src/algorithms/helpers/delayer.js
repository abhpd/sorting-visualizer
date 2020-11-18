export function delay(delayInms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, delayInms);
    });
}
