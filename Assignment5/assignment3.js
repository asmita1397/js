let fm = `
<form>
<table>
    <tr>
        <td><label>Username:<label><td>
        <td><input type="text"/>
    </tr>
    <tr>
        <td><label>Age:<label><td>
        <td><input type="text"/>
    </tr>
    <tr>
        <td><label>Address:<label><td>
        <td><input type="text"/>
    </tr>
    <tr>
        <td><label>DOB:<label><td>
        <td><input type="date"/>
    </tr>
</table>
</form>`

let frm=document.getElementById("f1");
frm.innerHTML=fm;
frm.className="add1";