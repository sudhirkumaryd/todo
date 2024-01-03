function Additem()
{
   // let item=["apple","ferbarary","march","april"];
    let item=["january","ferbary","march","april"];
   
    let month=[];
    return <>
     {month.length === 0 ? <h1>sudhir</h1> :null }
      {item.map(wr => 
      <div class="container text-center">
  <div className="row row-su" >
    <div class="col-6">{wr}</div>
    <div class="col-4">12/05/2013</div>
    <div class="col-2"><button type="button" class="btn btn-danger aapna">DELATE</button>
</div>
   
  </div>
</div>
)}
    </>
}
export default Additem;