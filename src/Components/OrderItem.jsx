function OrderItem() {
    return(
<div className="item-body">
        <table className="item-table-cat">
          <thead>
            <tr>
              <th className="item-catname">number</th>
            <th className="item-catname">date</th>
                        <th className="item-catname">price</th>

                  <th>
                <button  onClick={""} className="button-item-edit">
                  detail
                </button>
              </th>
              <th>
           
              </th>
            </tr>
          </thead>
        </table>
    </div>
    );
}
export default OrderItem;