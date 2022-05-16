// https://api.openbrewerydb.org/breweries
let url="https://api.openbrewerydb.org/breweries";

fetchDataAndShowData(url);






async function fetchDataAndShowData(url){
    let res=await fetch(url);
    let result=await res.json();
    // console.log(result);
    displayData(result);


}

function displayData(data){
    data.forEach(breweryData => {
        let {id,name,brewery_type,city,state}=breweryData;

        let row= document.createElement('tr');

        let _name=document.createElement('td');
        _name.textContent=name;

        let _brewery_type=document.createElement('td');
        _brewery_type.textContent=brewery_type;

        let _city=document.createElement('td');
        _city.textContent=city;

        let _state=document.createElement('td');
        _state.textContent=state;

        let moreDetail=document.createElement("button");
        moreDetail.setAttribute("onClick",detailsPage(id))
        moreDetail.textContent="More Details"
        
       

        row.append(_name,_brewery_type,_city,_state,moreDetail);
        document.querySelector("table").append(row);


    });
}



function detailsPage(id){
    console.log(id);
}