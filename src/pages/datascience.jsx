import React from "react";
import { DataSc } from "../datasc";
import './datascience.css'

export default function DataScience() {
    return(
        <div className="container">
            {
                DataSc.map((x, index) => {
                    return(
                        <div className="container-data" key={index}>
                            <h1>{x.title}</h1>
                            <div className="image-container">
                                <img src={x.image} alt={x.title} className="img"/>
                            </div>
                            <div className="content">
                                <p>{x.moreDescription}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}