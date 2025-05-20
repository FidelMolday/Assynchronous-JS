fetchData
    .then((data) => {
        console.log("First data:", data);
        return fetchMoreData(); // Returns another Promise
    })
    .then((moreData) => {
        console.log("Second data:", moreData);
        return fetchEvenMoreData(); // Another Promise
    })
    .then((evenMoreData) => {
        console.log("Third data:", evenMoreData);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
