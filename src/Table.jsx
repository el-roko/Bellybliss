

function Table(){
    return (
    <>  
    <div classname="col-md-10">
        <h1 className="border p-4">Table Section</h1>
    </div>

    <div className="col-md-12">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Product</th>
                    <th>Price</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>PMS</td>
                    <td>620</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Kerosine</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Diesel</td>
                    <td>680</td>
                </tr>
            </tbody>
        </table>
    
    </div>

     </>
    );
    
}

export default Table