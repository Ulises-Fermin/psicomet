import Services from "../../Components/Services";
import React from "react";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Payment = () => {
    return (
        <div>
            <Services />
        </div>
    )
}

export default Payment
