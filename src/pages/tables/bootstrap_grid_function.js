import React from 'react';
import logo from "./image/011-boy-5.svg";
import WidgetDocument from "./WidgetDocument/widgetdocument";
export function nameFormatter(cell, row) {

    if (row.CaseTypeName === "Training") {
        return (
            <div className="">
                <span className="badge bg-light-primary">
                    {row.CaseTypeName}
                </span>
            </div>
        );
    } else {
        return (
            <div className="">
                <span className="badge bg-light-success">
                    {row.CaseTypeName}
                </span></div>

        );
    }
}
export function dateFormatter(cell, row) {
    return (
        <div className="text-primary text-center">
            {cell}
        </div>
    );
}
export function ownernameFormatter(cell, row) {
    return (
        <div className="d-flex align-items-center px-2">
            <div className="symbol-label">
                <img className="" src={logo} alt="photo" />
            </div>
            <div className="ml-4">
                <div className=" font-weight-bolder ">{row.CaseOwnerDisplayName}</div>
                <a href="#" className="font-weight-bold text-muted">dummy@dummy.com</a>
            </div>
        </div>
    );
}

export function attchmentFormatter(cell, row) {
    return (
        row.attchement &&
        <React.Fragment>
            <WidgetDocument attchement={row.attchement} />
        </React.Fragment>
    );
}