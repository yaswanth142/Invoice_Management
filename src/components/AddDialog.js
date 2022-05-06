import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Add from '@material-ui/icons/Add'
import {Dialog,DialogTitle,DialogContent,DialogActions,} from "@mui/material";

function AddDialog(props) {
  const useStyle = makeStyles({
    field: {
      marginTop: 10,
      marginBottom: 10,
      width: 500,
      padding: "5px",
      margin: "5px",
    },
    paper: { minWidth: "78%" },
    input: {
      background: "rgb(232, 241, 250)",
      "&:hover": {
         background: "rgb(232, 241, 250)",
      },
    },
  });
  const classes = useStyle();
  const [openAdd, setOpenAdd] = React.useState(false);
  const addClick = () => setOpenAdd(false);
  const handleCloseAdd = () => setOpenAdd(false);
  const [businesscode, setbusinesscode] = useState("");
  const [cleardate, setcleardate] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [customerNumber, setcustomerNumber] = useState("");
  const [businessYear, setBusinessYear] = useState("");
  const [postingdate, setpostingdate] = useState("");
  const [documentcreatedate, setdocumentcreatedate] = useState("");
  const [duedate, setduedate] = useState("");
  const [invoicecurrency, setinvoicecurrency] = useState("");
  const [documenttype, setdocumenttype] = useState("");
  const [postingid, setpostingid] = useState("");
  const [totalopenamount, settotalopenamount] = useState("");
  const [baselinecreatedate, setbaselinecreatedate] = useState("");
  const [customerpaymentterms, setcustomerpaymentterms] = useState("");
  const postData = () => {
    setOpenAdd(false)
    axios.get(`http://localhost:12503/Practice/AddServlet`, {
      params:{
        businesscode,
        customerNumber,
        cleardate,
        businessYear,
        documentId,
        postingdate,       
        documentcreatedate,
        duedate,
        invoicecurrency,
        documenttype,
        postingid,
        totalopenamount,
        baselinecreatedate,
        customerpaymentterms,
        invoiceId,
      }
    })};

  return (
   
      <div className="buttonbar">  
          <div className="button">
          <Button  style={{color:"#fcfcfc"}} startIcon={<Add/>}
           onClick={() => setOpenAdd(true)}
           color="primary"
          >ADD</Button>
        <form action="">
          <Dialog
            // fullScreen
            open={openAdd}
            onClose={() => setOpenAdd(false)}
            classes={{ paper: classes.paper }}
            // fullscreen
            style={{ display: "flex", flexDirection: "column", gap: "10vh" }}
          >
            <DialogTitle style={{ backgroundColor: "#39495e", color: "white" }}>
              ADD
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
                <div>
                  <TextField
                    margin="dense"
                    className={classes.field}
                    InputProps={{ className: classes.input }}
                    backgroundColor="white"
                    id="filled-basic"
                    label="BusinessCode"
                    variant="filled"
                    name="business_code"
                    style={{ width: 250 }}
                    value={businesscode}
                    onChange={(e) => {
                      setbusinesscode(e.target.value);
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
                    className={classes.field}
                    InputProps={{ className: classes.input }}
                    label="ClearDate"
                    type="date"
                    variant="filled"
                    style={{ width: 250 }}
                    name="clear_date"
                    value={cleardate}
                    onChange={(e) => {
                      setcleardate(e.target.value);
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
                    className={classes.field}
                    InputProps={{ className: classes.input }}
                    type="date"
                    label="PostingDate"
                    variant="filled"
                    style={{ width: 250 }}
                    name="posting_date"
                    value={postingdate}
                    onChange={(e) => {
                      setpostingdate(e.target.value);
                    }}
                  />
                  <TextField
                    id="filled-basic"
                    className={classes.field}
                    InputProps={{ className: classes.input }}
                    label="DocumentCreatedate"
                    type="date"
                    variant="filled"
                    style={{ width: 250 }}
                    name="document_create_date"
                    value={documentcreatedate}
                    onChange={(e) => {
                      setdocumentcreatedate(e.target.value);
                    }}
                  />
                  <TextField
                    id="filled-basic"
                    InputProps={{ className: classes.input }}
                    className={classes.field}
                    type="date"
                    label="Duedate"
                    variant="filled"
                    style={{ width: 250 }}
                    name="due_in_date"
                    value={duedate}
                    onChange={(e) => {
                      setduedate(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="filled-basic"
                    InputProps={{ className: classes.input }}
                    className={classes.field}
                    label="InvoiceCurrency"
                    variant="filled"
                    style={{ width: 250 }}
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
                    label="DocumentType"
                    variant="filled"
                    style={{ width: 250 }}
                    value={documenttype}
                    name="document_type"
                    onChange={(e) => {
                      setdocumenttype(e.target.value);
                    }}
                  />
                  <TextField
                    id="filled-basic"
                    className={classes.field}
                    InputProps={{ className: classes.input }}
                    label="PostingId"
                    variant="filled"
                    style={{ width: 250 }}
                    name="posting_id"
                    value={postingid}
                    onChange={(e) => {
                      setpostingid(e.target.value);
                    }}
                  />
                  <TextField
                    id="filled-basic"
                    InputProps={{ className: classes.input }}
                    className={classes.field}
                    label="TotalOpenAmount"
                    variant="filled"
                    style={{ width: 250 }}
                    name="total_open_amount"
                    value={totalopenamount}
                    onChange={(e) => {
                      settotalopenamount(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <TextField
                    margin="dense"
                    InputProps={{ className: classes.input }}
                    className={classes.field}
                    id="filled-basic"
                    type="date"
                    label="BaselineCreateDate"
                    variant="filled"
                    style={{ width: 250 }}
                    name="baseline_create_date"
                    value={baselinecreatedate}
                    onChange={(e) => {
                      setbaselinecreatedate(e.target.value);
                    }}
                  />
                  <TextField
                    id="filled-basic"
                    InputProps={{ className: classes.input }}
                    className={classes.field}
                    label="CustPaymentTerms"
                    variant="filled"
                    style={{ width: 250 }}
                    name="cust_payment_terms"
                    value={customerpaymentterms}
                    onChange={(e) => {
                      setcustomerpaymentterms(e.target.value);
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
                </div>
              </div>
            </DialogContent>
            <DialogActions style={{backgroundColor:"#39495e"}}>
          <Button onClick={postData}  type="submit" style={{ width: 800,border: "1px solid white" ,color:"white"}}autoFocus>Add</Button>
            <Button onClick={handleCloseAdd} style={{ width: 800,  border: "1px solid white",color:"white" }}>Cancel</Button>
          </DialogActions>
          </Dialog>
        </form>
      </div>
    </div>
  );
}

export default AddDialog;