const randomizer = (length) => {
    var arr = new Array(length).fill(0);
    return arr.map((element) => {
        return Math.floor(Math.random() * 500) + 50;
    });
};

export default randomizer;
