import{r as i,U as y,u as j,c as A,a as B,b as t,d as f,j as a,S as g,E as s,B as q,F as L,e as S}from"./index-ButMNUXy.js";const b=({initObj:d,viewHive:o})=>{const{user:n}=i.useContext(y),[u,l]=i.useState(!d),{setHives:h}=j(),{addItem:c,updateItem:m}=S(h,"hives",null,o),x=d?{dateAdded:d.dateAdded||"",material:d.material||"",addressLine:d.addressLine||"",city:d.city||"",state:d.state||"",postalCode:d.postalCode||""}:{dateAdded:"",material:"",addressLine:"",city:"",state:"",postalCode:""},p=d?r=>m(r,d.id):r=>{c(r)},v=A({dateAdded:B().required("Date is required").typeError("Invalid date format"),material:t().oneOf(["Wood","Polystyrene","Other"],"Material must be Wood, Polystyrene, or Other").required("Material is required"),addressLine:t().required("Address is required"),city:t().required("City is required"),state:t().required("State is required"),postalCode:t().matches(/^\d{5}(-\d{4})?$/,"Invalid zipcode format").required("Zipcode is required")}),e=f({initialValues:x,validationSchema:v,onSubmit:r=>{const C={...r,userId:n.id};p(C),l(!1)}});return a.jsx("div",{children:u?a.jsxs(g,{onSubmit:e.handleSubmit,children:[a.jsx("h2",{children:d?"Update Hive Details":"Add New Hive"}),a.jsx("br",{}),a.jsxs("div",{className:"form-input",children:[a.jsx("label",{htmlFor:"dateAdded",children:"Date Added"}),a.jsx("input",{type:"date",id:"dateAdded",name:"dateAdded",value:e.values.dateAdded,onChange:e.handleChange,onBlur:e.handleBlur}),e.touched.dateAdded&&e.errors.dateAdded&&a.jsx(s,{children:e.errors.dateAdded})]}),a.jsxs("div",{className:"form-input",children:[a.jsx("label",{htmlFor:"material",children:"Material"}),a.jsxs("select",{id:"material",name:"material",value:e.values.material,onChange:e.handleChange,onBlur:e.handleBlur,children:[a.jsx("option",{value:"",label:"Select material"}),a.jsx("option",{value:"Wood",label:"Wood"}),a.jsx("option",{value:"Polystyrene",label:"Polystyrene"}),a.jsx("option",{value:"Other",label:"Other"})]}),e.touched.material&&e.errors.material&&a.jsx(s,{children:e.errors.material})]}),a.jsxs("div",{className:"form-input",children:[a.jsx("label",{htmlFor:"addressLine",children:"Address Line"}),a.jsx("input",{id:"addressLine",name:"addressLine",value:e.values.addressLine,onChange:e.handleChange,onBlur:e.handleBlur}),e.touched.addressLine&&e.errors.addressLine&&a.jsx(s,{children:e.errors.addressLine})]}),a.jsxs("div",{className:"form-input",children:[a.jsx("label",{htmlFor:"city",children:"City"}),a.jsx("input",{id:"city",name:"city",value:e.values.city,onChange:e.handleChange,onBlur:e.handleBlur}),e.touched.city&&e.errors.city&&a.jsx(s,{children:e.errors.city})]}),a.jsxs("div",{className:"form-input",children:[a.jsx("label",{htmlFor:"state",children:"State"}),a.jsx("input",{id:"state",name:"state",value:e.values.state,onChange:e.handleChange,onBlur:e.handleBlur}),e.touched.state&&e.errors.state&&a.jsx(s,{children:e.errors.state})]}),a.jsxs("div",{className:"form-input",children:[a.jsx("label",{htmlFor:"postalCode",children:"Zip Code"}),a.jsx("input",{id:"postalCode",name:"postalCode",value:e.values.postalCode,onChange:e.handleChange,onBlur:e.handleBlur}),e.touched.postalCode&&e.errors.postalCode&&a.jsx(s,{children:e.errors.postalCode})]}),a.jsx(q,{type:"submit",children:d?"Update Hive":"Add Hive"})]}):a.jsx(L,{label:"Hive Details",formValues:e.values,setIsEditing:l})})};export{b as default};
