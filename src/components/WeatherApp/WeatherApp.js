import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './WeatherApp.scss'
import moment from 'moment'
import  {BsSearch} from 'react-icons/bs';
import {Container,Row,Col,Form,FormControl,Button}  from 'react-bootstrap';
const WeatherApp = () => {
    const [weather,setWeather]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const [search,setSearch]=useState('Hà Nội')
    const API_KEY='3edd96dd9d992eb5ffe5eba0806d1df5    '
    const getWeather=async ()=>{
        try{
            const response=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
            console.log(response)
            
                setIsLoading(false)
            
            setWeather(response.data)
        }catch(e){
            console.log(e)
            setIsLoading(true)
        }
    }
    
    useEffect(()=>{
        getWeather()
    },[])
    return (
        <div className="weather">
                <Container  className="search">
                <Form className="d-flex" onSubmit={(e)=>{
                    e.preventDefault()
                    getWeather()
                }}>
                    <FormControl
                        type="search"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder="Search"
                        className="mr-2 formSearch"
                        aria-label="Search"
                    />
                    <Button variant="outline-success" className="btnSearch">
                         <BsSearch />
                    </Button>
                </Form>
                </Container>
                {
                    (typeof weather.main !=='undefined')?(
                
                <Container fluid className="contain">
                    <div className="common text-center pt-5">
                                  <h1>{weather.name}</h1>
                                  <p>{ new Date().toLocaleDateString()},{weather.sys.country} </p>
                    </div>
                    <div className="detail1 text-center d-flex justify-content-center align-items-center">
                        <div className="icon">
                            <img 
                            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            />

                        </div>
                        <h1 >{Math.round(weather.main.temp-273.15)} °c</h1>
                    </div>
                    <h5 className="text-center">{weather.weather[0].description}</h5>
                    <div className="detail2 text-center mb-3">
                        <Container>
                            <Row>
                                <Col sm={6} md={4}>
                                    <h6>{Math.round(weather.main.temp_max-273.15)} °c</h6>
                                    <p>Hight</p>
                                </Col>
                                <Col sm={6} md={4}>
                                <h6>{Math.round(weather.main.temp_min-273.15)} °c</h6>
                                    <p>Low</p>
                                </Col>
                                <Col sm={6} md={4}>
                                <h6> {moment.unix(weather.sys.sunrise).format("hh:mm a")}</h6>
                                    <p>Sunrise</p>
                                </Col>
                                <Col sm={6} md={4}>
                                    <h6> {moment.unix(weather.sys.sunset).format("hh:mm a")}</h6>
                                    <p>Sunset</p>
                                </Col>
                                <Col sm={6} md={4}>
                                <h6>{weather.main.humidity} </h6>
                                    <p>humidity</p>
                                </Col>
                                <Col sm={6} md={4}>
                                <h6>{weather.wind.speed} </h6>
                                    <p>Speed</p>
                                </Col>
                                
                            </Row>
                            </Container>
                    </div>
                    <div className="detail2 text-center">
                    <Container>
                            <Row>
                                <Col sm={6} md={4}>
                                    <h6>{Math.round(weather.main.temp_max-273.15)} °c</h6>
                                    <p>Hight</p>
                                </Col>
                                <Col sm={6} md={4}>
                                <h6>{Math.round(weather.main.temp_min-273.15)} °c</h6>
                                    <p>Low</p>
                                </Col>
                                <Col sm={6} md={4}>
                                <h6> {moment.unix(weather.sys.sunrise).format("hh:mm a")}</h6>
                                    <p>Sunrise</p>
                                </Col>

                            </Row>
                            </Container>
                    </div>
                 </Container>
                   
                    ):(
                        <Container>...Loading</Container>
                    )
                    }
        </div>
       
    )
}

export default WeatherApp
   