mainFunction = async () => {
    const creattodo = async (todo) => {
        let options = {
            method: "post",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(todo),
        };
        let p = await fetch(
            "https://jsonplaceholder.typicode.com/posts  ",
            options
        );
        return p.json();
    };
    const gettodo = async (id) => {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + id
        );
        let r = await response.json();
        return r;
    };
    const extrafunction = async () => {
        let todo = {
            title: "Harry2",
            body: "bhai2",
            userId: 1100,
        };
        let todor = await creattodo(todo);
        console.log(todor);
        console.log(await gettodo(5));
    };
    extrafunction();
    console.log(await gettodo(6));
};
mainFunction();