async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "[Your RapidAPI-Key]",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/price",
    options
  );
  const record = await res.json();
  document.getElementById("cryptocoins").innerHTML =
    "BTC : " + record.data.price;
}
fetchData();
