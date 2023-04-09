getInfo()

  function getInfo() {
     
    const url = (`https://data.nasa.gov/resource/gvk9-iz74.json`)

    fetch (url)
        .then(res => res.json())
        .then(data => {
          console.log(data)
            for (let i = 0; i < data.length; i++) {
                let lat = data[i].location.latitude
                let long = data[i].location.longitude
                let center = data[i].center
                let facility = data[i].facility
                let zipcode = data[i].zipcode
                let city = data[i].city
                let country = data[i].country

                let information = `${center},${facility},${city},${zipcode},${country}`
                console.log(`${lat}, ${long}`)

                let locations = document.getElementById('listofCenters')
                let list = document.createElement('li')

                const textNode = document.createTextNode(information)
                list.appendChild(textNode)
                locations.appendChild(list)
                list.innerText = `${information}`

                let weatherUrl = `https://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${long}&key=9877b787eec0403bb7ae761fd4dc5f2b&include=minutely`

                fetch(weatherUrl)
                .then(res => res.json())
                .then(data2 => {
                    console.log(data2)

                    console.log(data2.data[0].app_temp);
                    let celsius = data2.data[0].app_temp;
                    let fahrenheit = (celsius * 1.8) + 32;
                    list.innerText += `, ${Math.floor(fahrenheit)}°F`;

                    // throw "stopHere"
                }) .catch(err => {
                    console.log(`error ${err}`)
                      })
                  
                  
            }
        })
     
        
        .catch(err => {
          console.log(`error ${err}`)
            })
        
        }

