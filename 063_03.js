const loadscript = async (src) => {
    let p1 = new Promise((resolve, reject) => {
        let script = document.createElement("script");

        script.src = src;
        script.onload = () => {
            console.log(`The script ${script.src} has been loaded`);
            console.log(new Date().getMinutes());
            // resolve(src);
        };
        setTimeout(() => {
            reject(new Error("the script cannot be accepted"));
        }, 3000);
        document.body.appendChild(script);
    });

    return p1; //This return is imp if this is not here there will be no problems expect the line number 19 will print undefined since the function will be returning nothing
};
const bootstrap = async () => {
    console.log(new Date().getMinutes());
  try {
      let a = await loadscript(
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      );
      console.log(a);
  } catch (error) {
    console.log(error)
  };

    console.log(new Date().getMinutes());
};
bootstrap();
