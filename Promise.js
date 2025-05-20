const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { name: "John Doe", age: 30 };
        resolve(data);
    }, 2000);
});

fetchData.then((data) => {
    console.log("Data fetched:", data);
}).catch((error) => {
    console.error("An error occurred:", error);
});
