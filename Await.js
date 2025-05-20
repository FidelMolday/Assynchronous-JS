function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John Doe", age: 30 };
        callback(data);
    }, 2000); 
}

fetchData((data) => {
    console.log("Data fetched:", data);
});
console.log("This will run before the data is fetched");
