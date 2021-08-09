import React,{useEffect,useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SideTable from './SideTable';
import Body from './Body';



function Header() {
    
     const [countries,setCountries]=useState([]);
     const [country,setCountry]=useState('worldwide');
     const [countryInfo,setCountryInfo]=useState({});
     const [tableInfo,setTableInfo]=useState([]);


     useEffect(()=>{
  
        fetch('https://api.caw.sh/v3/covid-19/all').then(res=>res.json()).then((data)=>{
          setCountryInfo(data);
          console.log(data);
        })
      
       },[]);
       


     const onCountryChange=async(e)=>{
       const change=e.target.value;

            const url=`https://disease.sh/v3/covid-19/countries/${change}`
          await fetch(url).then(res=>res.json()).then((data)=>{
            console.log(data);
        setCountry(change);
        setCountryInfo(data);
        })
        
    
        
        
     }
   
    useEffect(async() => {
        let url="https://disease.sh/v3/covid-19/countries";
       await fetch(url).then(res=>res.json()).then((data)=>{
           console.log(data);
           let countries=data.map((country)=>(
               {
               country:country.country,
               countryShort:country.countryInfo.iso2
               }
           ))
           setCountries(countries);
           setTableInfo(data);
           
       })
}, [])


    return (
        <div>
            <h1>covid cases in World</h1>
           <FormControl variant="outlined" >
        <Select value={country} variant="outlined" onChange={onCountryChange}>
        <MenuItem value="worldwide">WorldWide</MenuItem>
        {countries.map((country)=>(
          <MenuItem value={country.country}>{country.country}</MenuItem>
        ))}
        
        </Select>
         </FormControl> 

<div>
<SideTable title="total CoronaVirus cases" total={countryInfo.cases} />
<SideTable  title="recovered cases" total={countryInfo.recovered}/>
<SideTable title="total deaths" total={countryInfo.deaths}/>
</div>

<Body table={tableInfo}/>
       
        </div>
    )
}

export default Header;
