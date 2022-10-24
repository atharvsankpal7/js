const creattodo = async (todo) => {
    let options = {
        method: "post",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(todo),
    };
    let p = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1  ",
        options
    );
    return await p.json();
};
const mainfunc = async () => {
    let todo = {
        title: "Harry2",
        body: "bhai2",
        userId: 1100,
    };
    let todor = await creattodo(todo);
    console.log(todor);
};
mainfunc();
