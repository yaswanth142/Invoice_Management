
import { DataGrid } from "@material-ui/data-grid";
import React ,{useEffect,useState} from 'react'
import axios from "axios";
import "../styles/Navbar.css";

import {ButtonGroup,Button} from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import {TextField} from '@material-ui/core'
import RefreshIcon from '@mui/icons-material/Refresh';
import AddDialog from "./AddDialog";
import { makeStyles } from "@material-ui/core";
import {Dialog,DialogTitle,DialogContent,DialogActions,} from "@mui/material";


const columns = [
    { field: "sl_no", headerName: "ID", width: 120 },
    {
      field: "business_code",
      headerName: "Business_Code",
      width: 150,
      editable: true
    },
    {
      field: "cust_number",
      headerName: "Cust_Number",
  
      width: 110,
      editable: true
    },
    {
        field: "clear_date",
        headerName: "Clear_Date",
    
        width: 110,
        editable: true
      },

      {
        field: "buisness_year",
        headerName: "Buisness_Year",
        type: "number",
        width: 110,
        editable: true
      },
      {
        field: "doc_id",
        headerName: "Doc_Id",
    
        width: 110,
        editable: true
      },
      {
        field: "posting_date",
        headerName: "Posting_Date",
     
        width: 110,
        editable: true
      },
      {
        field: "document_create_date",
        headerName: "Document_Create_Date1",
      
        width: 110,
        editable: true
      },
      {
        field: "document_create_date1",
        headerName: "Document_Create_Date1",

        width: 110,
        editable: true
      },
      {
        field: "due_in_date",
        headerName: "Due_In_Date",
       
        width: 110,
        editable: true
      },
      {
        field: "invoice_currency",
        headerName: "Invoice_Currency",
     
        width: 110,
        editable: true
      },
      {
        field: "document_type",
        headerName: "Document_Type",

        width: 110,
        editable: true
      },
      {
        field: "posting_id",
        headerName: "Posting_Id",
    
        width: 110,
        editable: true
      },
      {
        field: "area_business",
        headerName: "Area_Business",
    
        width: 110,
        editable: true
      },
      {
        field: "total_open_amount",
        headerName: "Total_open_amount",
    
        width: 110,
        editable: true
      },
      {
        field: "baseline_create_date",
        headerName: "Baseline_create_date",
    
        width: 110,
        editable: true
      },
      {
        field: "cust_payment_term",
        headerName: "Cust_Payment_Term",
    
        width: 110,
        editable: true
      },
      {
        field: "invoice_id",
        headerName: "Invoice_Id",
    
        width: 110,
        editable: true
      },
      {
        field: "isOpen",
        headerName: "IsOpen",
    
        width: 110,
        editable: true
      },
      {
        field: "aging_bucket",
        headerName: "Aging_Bucket",
    
        width: 110,
        editable: true
      },
      {
        field: "is_deleted",
        headerName: "Is_Deleted",
    
        width: 110,
        editable: true
      },
    
  ];

const CRUD=()=> {

    const[tableData,setTableData]=useState([])
   useEffect(()=>{
       
      fetch("http://localhost:8080/Practice/testingh2hmainservlet")
       .then((data)=>data.json())
       .then((data)=>setTableData(data))
   },[tableData])

  
  
  //  .........................................................DELETE(Axios)............................................................................

   const [arrsl_no,setArrsl_no]=useState([

   ]);
   const sl_no=arrsl_no[0]
   const handleDelete=()=>{
     console.log(sl_no+"yesh")
console.log(arrsl_no);
    setOpenDelete(false)
   axios.get('http://localhost:12503/Practice/Deleteinvoice',{
     params:{
       sl_no
     }
   })
   .then(data=>{
     console.log(data)
   })
   .catch(err=>alert(err));
  };

  const formData = new FormData();
  arrsl_no.forEach(item => {
    formData.append(arrsl_no, item);
  });
//..................................................DELETE(AXIOS)END............................................................................
  //...............................................EDIT(Axios url)................................................................................
  const handleEdit=()=>{
   setOpenEdit(false)
  axios.get('http://localhost:12503/Practice/Editinvoice',{
    params:{
      
      invoicecurrency,
      customerpaymentterms,
      sl_no,
    }
  })
 };
 //.........................................................EDIT(AXIOS)END........................................................................

 
  //...................................................EDIT(Function)............................................................................
  
  const [openEdit, setOpenEdit] = React.useState(false);
  const editClick = () => setOpenEdit(false);
  const handleCloseEdit = () => setOpenEdit(false);
  const [invoicecurrency, setinvoicecurrency] = useState("");
  const [customerpaymentterms, setcustomerpaymentterms] = useState("");
  //.....................................................EDIT(END)............................................................................

  //...............................................................STYLEING......................................................................


  const useStyle = makeStyles({
    field: {
      marginTop: 10,
      marginBottom: 10,
      width: 100,
      padding: "5px",
      margin: "5px",
    },
    paper: { minWidth: "18%" },
    input: {
      background: "rgb(232, 241, 250)",
      "&:hover": {
        background: "rgb(232, 241, 250)",
      },
    },
  });


  //.....................................................DELETE(Function)........................................................................
  const classes = useStyle();
  const [openDelete, setOpenDelete] = React.useState(false);
  const addClick = () => setOpenDelete(false);
  const handleCloseDelete = () => setOpenDelete(false);
  //......................................................DELETEEND..............................................................................
  //............................................................ADVANCESEARCH..................................................................................

   const [openAdvanceSearch, setOpenAdvanceSearch] = React.useState(false);
  const searchClick = () => setOpenAdvanceSearch(false);
  const handleCloseAdvanceSearch = () => setOpenAdvanceSearch(false);
  const [documentId, setDocumentId] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [customerNumber, setcustomerNumber] = useState("");
  const [businessYear, setBusinessYear] = useState("");
 


  const postData = async () => {
    let response = await axios({
      method: "GET",
      url: "http://localhost:12503/Practice/AdvanceSearch",
      params: {
       documentId:documentId,
       invoiceId: invoiceId,
         customerNumber:customerNumber,
        businessYear:businessYear,
      }
    },[]);
    console.log(response.data);
     //setTableData(response);
    setOpenAdvanceSearch(false)
  };
  //...............................................................ADVANCESEARCH ENDS..........................................................


//.............................................................REFRESH..................................................................
  

   const [selectionModel, setSelectionModel,data] = React.useState([]);
   function refreshPage() {
    window.location.reload(false);
  }
  //.................................................................RETURN...................................................................................
     return (
<div>
<div className="navbar1">
        <div className="buttongroup" style={{ border: "1px solid #14AFF1"}}>
         <ButtonGroup >
           <Button  className="predictions" style={{color:"#fcfcfc", backgroundColor:"#14AFF1"}}>Prediction</Button>
           <Button style={{color:"#fcfcfc"}}>Analytics View</Button>
          
 {/* ...........................................................ADVANCESEARCH(DIALOGBOX).......................................................... */}
  <div className="buttongroup">
        
        <Button style={{color:"#fcfcfc"}}   onClick={(postData) => setOpenAdvanceSearch(true)}>ADVANCESEARCH</Button>
       

     <form action="">
       <Dialog
        
         open={openAdvanceSearch}
         onClose={() => setOpenAdvanceSearch(false)}
         classes={{ paper: classes.paper }}
        
         style={{ display: "flex", flexDirection: "column", gap: "10vh" }}
       >
         <DialogTitle style={{ backgroundColor: "#39495e", color: "white" }}>
             ADVANCESEARCH
         </DialogTitle>
         <DialogContent
           style={{
             display: "flex",
             flexDirection: "column",
             gap: "10vh",
             height: "80%",
             backgroundColor: "#39495e",
           }}
         >
             <center>
           <div>
          <div>
       
          <TextField
                 margin="dense"
                 className={classes.field}
                 InputProps={{ className: classes.input }}
                 backgroundColor="white"
                 id="filled-basic"
                 label="DocumentId"
                 variant="filled"
                 name="doc_id"
                 style={{ width: 250 }}
                 value={documentId}
                 onChange={(e) => {
                   setDocumentId(e.target.value);
                 }}
               />

             <TextField
                 id="filled-basic"
                 InputProps={{ className: classes.input }}
                 className={classes.field}
                 label="InvoiceId"
                 variant="filled"
                 style={{ width: 250 }}
                 name="invoice_id"
                 value={invoiceId}
                 onChange={(e) => {
                   setInvoiceId(e.target.value);
                 }}
               />

<TextField
                 id="filled-basic"
                 className={classes.field}
                 InputProps={{ className: classes.input }}
                 label="CustomerNumber"
                 variant="filled"
                 style={{ width: 250 }}
                 name="cust_number"
                 value={customerNumber}
                 onChange={(e) => {
                   setcustomerNumber(e.target.value);
                 }}
               />

<TextField
                 id="filled-basic"
                 InputProps={{ className: classes.input }}
                 className={classes.field}
                 label="BusinessYear"
                 variant="filled"
                 style={{ width: 250 }}
                 name="buisness_year"
                 value={businessYear}
                 onChange={(e) => {
                   setBusinessYear(e.target.value);
                 }}
               />
               
          </div>

           </div>
           </center>
         </DialogContent>
         <DialogActions style={{backgroundColor:"#39495e"}}>
       <Button onClick={postData}  type="submit" style={{ width: 800,border: "1px solid white" ,color:"white"}}autoFocus>AdvanceSearch</Button>
         <Button onClick={handleCloseAdvanceSearch} style={{ width: 800,  border: "1px solid white",color:"white" }}>Cancel</Button>
       </DialogActions>
       </Dialog>
     </form>
   </div>
 
); 
 {/* ................................................................................................................................. */}
           <Button style={{color:"#14AFF1"}} onClick={refreshPage}><RefreshIcon/></Button>
           </ButtonGroup>
          </div>
{/* ..................................................DELETE(DIALOG).......................................................................................... */}

          <div className="buttonbar">
         
          <div className="buttonbar">  
          <div className="button">
          <Button  style={{color:"#fcfcfc"}} startIcon={<Delete/>}
           onClick={() => setOpenDelete(true)}
           color="primary"
          >DELETE</Button>
        <form action="">
          <Dialog
           
            open={openDelete}
            onClose={() => setOpenDelete(false)}
            classes={{ paper: classes.paper }}
           
            style={{ display: "flex", flexDirection: "column", gap: "10vh" }}
          >
            <DialogTitle style={{ backgroundColor: "#39495e", color: "white" }}>
                DELETE
            </DialogTitle>
            <DialogContent
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10vh",
                height: "80%",
                backgroundColor: "#39495e",
              }}
            >
              <div>
               <span style={{color:"white",fontSize: 20}}> Are you Sure you want to delete these records[s]?</span>

              </div>
            </DialogContent>
            <DialogActions style={{backgroundColor:"#39495e"}}>
          <Button onClick={handleDelete}  type="submit" style={{ width: 800,border: "1px solid white" ,color:"white"}}autoFocus>Delete</Button>
            <Button onClick={handleCloseDelete} style={{ width: 800,  border: "1px solid white",color:"white" }}>Cancel</Button>
          </DialogActions>
          </Dialog>
        </form>
      </div>
    </div>

 {/* ................................................................................................................  */}
{/* ............................................EDIT(DIALOG)............................................................................... */}
 <div className="buttonbar">  
          <div className="buttonedit">
          <Button  style={{color:"#fcfcfc"}} startIcon={<Edit/>}
           onClick={() => setOpenEdit(true)}
           color="primary"
          >EDIT</Button>
        <form action="">
          <Dialog
           
            open={openEdit}
            onClose={() => setOpenEdit(false)}
            classes={{ paper: classes.paper }}
           
            style={{ display: "flex", flexDirection: "column", gap: "10vh" }}
          >
            <DialogTitle style={{ backgroundColor: "#39495e", color: "white" }}>
                EDIT
            </DialogTitle>
            <DialogContent
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10vh",
                height: "80%",
                backgroundColor: "#39495e",
              }}
            >
                <center>
              <div>
             <div>
             <TextField
                    id="filled-basic"
                    margin="dense"
                    InputProps={{ className: classes.input }}
                    className={classes.field}
                    label="InvoiceCurrency"
                    variant="filled"
                    style={{ width: 200 }}
                    name="invoice_currency"
                    value={invoicecurrency}
                    onChange={(e) => {
                      setinvoicecurrency(e.target.value);
                    }}
                  />
                   <TextField
                    id="filled-basic"
                    InputProps={{ className: classes.input }}
                    className={classes.field}
                    label="CustPaymentTerms"
                    variant="filled"
                    style={{ width: 200 }}
                    name="cust_payment_terms"
                    value={customerpaymentterms}
                    onChange={(e) => {
                      setcustomerpaymentterms(e.target.value);
                    }}
                  />
             </div>

              </div>
              </center>
            </DialogContent>
            <DialogActions style={{backgroundColor:"#39495e"}}>
          <Button onClick={handleEdit}  type="submit" style={{ width: 800,border: "1px solid white" ,color:"white"}}autoFocus>Edit</Button>
            <Button onClick={handleCloseEdit} style={{ width: 800,  border: "1px solid white",color:"white" }}>Cancel</Button>
          </DialogActions>
          </Dialog>
        </form>
      </div>
    </div>
 {/* .................................................................................................................................. */}
          <AddDialog/>
          <div className="br">
          <TextField label="Search Customer Id"/>
</div>
          </div>
          
     </div>
    
       <div style={{ background:"#071d29cc",height: 600, width: "100%", marginTop: "7vh" }}>
  {/* ................................................................DATAGRID............................................................... */}
           <DataGrid
           rows={tableData}
           columns={columns}
           getRowId={(row) => row.sl_no}
           pageSize={10}
           checkboxSelection
           disableSelectionOnClick
           style={{ color: "white" }}

          onSelectionModelChange={(sl_no)=>{
            setArrsl_no(sl_no);
            console.log(formData);
            console.log(arrsl_no);
           
          }}
          
           />
       </div>
       </div>
     )
   }
   export default CRUD