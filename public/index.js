async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    let response = await fetch('https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=d2db3554d940452e9b4632daad2cc69b', {
        method: 'GET',
        headers: {
            'Authorization': 'apikey d2db3554d940452e9b4632daad2cc69b'
        },
        body: null
    })
    
}

main()