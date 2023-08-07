export interface Weather {

    weather: WeatherInfo[],

    maind:{
        temp: number;
        pressure: number;
        humidity: number;
    };

    wind:{
        speed: number;
    };

    sys:{
        country: string;
    };

    name: string;
}

interface WeatherInfo{
    main: string;
    icon: string;
}
