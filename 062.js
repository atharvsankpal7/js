let a = () => {
    try {
        console.log(undeclared_variable);
        // return 23;
    } catch (error) {
        console.log("The error has been fixed");
        console.log(another_error);
    } finally {
        //The finally clause is used for cleanups in the actual projects
        console.log("This will run no matter what");
    }
};
a();
