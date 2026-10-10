function AddressItem() {
    return(
<div className="item-body">
        <table className="item-table-cat">
          <thead>
            <tr>
              <th className="item-catname">address</th>
           
                  <th>
                <button  onClick={""} className="button-item-edit">
                  ویرایش
                </button>
              </th>
              <th>
                <button onClick={""} className="button-item-delete">
                  حذف
                </button>
              </th>
            </tr>
          </thead>
        </table>
    </div>
    );
}
export default AddressItem;