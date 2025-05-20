function fetchData() {
    
    const data = slowNetworkRequest();
    console.log(data);
}

fetchData();
console.log("This will not run until fetchData completes");
