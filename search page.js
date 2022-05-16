document.querySelector("#search-btn").addEventListener("click",function(){
    
    let searchText=document.querySelector("#search").value;
    // console.log(searchText);
    let url=`https://api.openbrewerydb.org/breweries?by_name=${searchText}`;
    fetchDataAndShowData(url);
});


async function fetchDataAndShowData(url){
    let res=await fetch(url);
    let result=await res.json();

    // console.log(result);
    document.querySelector("#container").innerHTML=`<div id="data-container">
    <table>
       <tr>
           <th>Name</th>
           <th>Brewery Type</th>
           <th>City</th>
           <th>State</th>
       </tr> 
    </table>

</div>`;
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
       
        moreDetail.textContent="More Details";
        moreDetail.setAttribute("id","more-detail");
        moreDetail.addEventListener("click",function(){
            localStorage.setItem("id",id);
            location.href="brewery Page.html";
        });        
       

        row.append(_name,_brewery_type,_city,_state,moreDetail);
        document.querySelector("table").append(row);


    });
}