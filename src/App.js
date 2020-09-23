import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Results from './components/Results'
import Home from './components/Home'

let ctr_data = [
  {
    Id: 11732,
    Shape: 'POINT (-117.25548991805664 34.102940010854255)',
    SiteUrl: 'www.sachealthsystem.org',
    DwRecordCreateDt: '/Date(1600833600000)/',
    CtrNm: 'SACHS-Norton Clinic',
    CtrAddress: '1455 3rd Ave',
    CtrCity: 'San Bernardino',
    CtrStateAbbr: 'CA',
    CtrZipCd: '92408-0218',
    CtrPhoneNum: '909-382-7100',
    ParentCtrNm: 'Sac Health System',
    CountyNm: 'San Bernardino County',
    StateNm: 'California',
    ApproxValueCd: 'Y',
    UrlTxt: 'www.sachealthsystem.org',
    LocNameDesc: 'Data was matched at the Street Address level using AGOL, and Service Objects',
    Longitude: -117.25548991,
    Latitude: 34.10294001,
    EndDt: null,
    ParentCtrCity: null,
    Covid19TestStatus: 'Yes',
    TeleHealthStatus: 'Yes',
    TelehealthText: 'As of 07/03/2020, this health center reported providing COVID-19 testing and services via telehealth at one or more sites. Please call the center for more information.',
    Distance: 3.46,
    FilteredResultsReturned: false
  },
  {
    Id: 2943,
    Shape: 'POINT (-117.24434198683329 34.116145979667152)',
    SiteUrl: '',
    DwRecordCreateDt: '/Date(1600833600000)/',
    CtrNm: 'METROPOLITAN FAMILY MEDICAL CLINIC- HIGHLAND',
    CtrAddress: '7576 Sterling Ave, Ste C',
    CtrCity: 'San Bernardino',
    CtrStateAbbr: 'CA',
    CtrZipCd: '92410-4202',
    CtrPhoneNum: '909-381-8983',
    ParentCtrNm: 'BORREGO COMMUNITY HEALTH FOUNDATION',
    CountyNm: 'San Bernardino County',
    StateNm: 'California',
    ApproxValueCd: 'N',
    UrlTxt: '',
    LocNameDesc: 'Data was matched at the Address level using AGOL',
    Longitude: -117.24434198,
    Latitude: 34.11614597,
    EndDt: null,
    ParentCtrCity: null,
    Covid19TestStatus: 'Yes',
    TeleHealthStatus: 'Yes',
    TelehealthText: 'As of 09/11/2020, this health center reported providing COVID-19 testing and services via telehealth at one or more sites. Please call the center for more information.',
    Distance: 3.75,
    FilteredResultsReturned: false
  },
  {
    Id: 9761,
    Shape: 'POINT (-117.27187071971629 34.092209227570969)',
    SiteUrl: 'http://www.sbcounty.gov/DPH/PublicHealth/ph_divisions/public_health_clinics/public_health_clinics.asp',
    DwRecordCreateDt: '/Date(1600833600000)/',
    CtrNm: 'San Bernardino Health Center',
    CtrAddress: '606 E Mill St',
    CtrCity: 'San Bernardino',
    CtrStateAbbr: 'CA',
    CtrZipCd: '92415-0620',
    CtrPhoneNum: '909-383-3001',
    ParentCtrNm: 'SAN BERNARDINO, COUNTY OF',
    CountyNm: 'San Bernardino County',
    StateNm: 'California',
    ApproxValueCd: 'N',
    UrlTxt: 'http://www.sbcounty.gov/DPH/PublicHealth/ph_divisions/public_health_clinics/public_health_clinics.asp',
    LocNameDesc: 'Data was matched at the Address level using AGOL, and Service Objects',
    Longitude: -117.27187071,
    Latitude: 34.09220922,
    EndDt: null,
    ParentCtrCity: null,
    Covid19TestStatus: 'Yes',
    TeleHealthStatus: 'Yes',
    TelehealthText: 'As of 09/11/2020, this health center reported providing COVID-19 testing and services via telehealth at one or more sites. Please call the center for more information.',
    Distance: 3.86,
    FilteredResultsReturned: false
  }
]

function App() {

  // const handleSubmit = () => {
  //   e.prevent.default

  // }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/results/" render={(props) => <Results {...props} data={ctr_data}/>}/>
      </Switch>
    </div>
  );
}

export default App;
