
// // let id=localStorage.getItem("id");
// // let url=`https://api.openbrewerydb.org/breweries/$${id}`;

// // fetchDataAndShowData(url);

// async function fetchDataAndShowData(url){
//     let res=await fetch(url);
//     let result=await res.json();
//     // console.log(result);
//     displayData(result);
// }

// function displayData(data){
//     let {id,name,brewery_type,city,state,postal_code,
//         country,phone,}=data;

//     let _id=document.createElement('p');
//     _id.textContent=id;

//     let _name=document.createElement('p');
//     _name.textContent=name;

//     let _brewery_type=document.createElement('p');
//     _brewery_type.textContent=brewery_type;

//     let _city=document.createElement('p');
//     _city.textContent=city;

//     let _state=document.createElement('p');
//     _state.textContent=state;

//     let _postal_code=document.createElement('p');
//     _postal_code.textContent=postal_code;

//     let _country=document.createElement('p');
//     _country.textContent=country;

//     let _phone=document.createElement('p');
//     _phone.textContent=phone;

//     document.querySelector("#container").append(
//         _id, _name,_brewery_type,_city,_state,_postal_code,
//         _country,_phone
//     );
    
// }
