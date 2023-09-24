import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"
function ViewManufacturing(){
    
    return(
        <>
        <div className="container">
            <div className="card p-3">
                <div className="row">
                    <div className="col-8">

                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary">
                            Work Order
                        </button>
                    </div>
                </div>
                <div className="row">
                    <label className="form-label">
                    GH00002
                    </label>
                </div>
                <hr className="border-secondary opacity-3" />
                    <div className="">
                    <div className="row">
  <div className="col-md-6 panel-padding">
    <input type="hidden" name="id" defaultValue={447} />
    <table className="table border table-striped table-margintop">
      <tbody>
        <tr className="project-overview">
          <td className="bold td-width">Product</td>
          <td>ertert</td>
        </tr>
        <tr className="project-overview">
          <td className="bold">Unit of measure</td>
          <td>Kilogram</td>
        </tr>
        <tr className="project-overview">
          <td className="bold">Quantity</td>
          <td>10.00</td>
        </tr>
        <tr className="project-overview">
          <td className="bold">Bills of material</td>
          <td>ertert</td>
        </tr>
        <tr className="project-overview">
          <td className="bold">Routing</td>
          <td>aaaaaaaaaaa</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="col-md-6 panel-padding">
    <table className="table table-striped table-margintop">
      <tbody>
        <tr className="project-overview">
          <td className="bold" width="40%">
            Deadline
          </td>
          <td>2023-09-10 17:19:00</td>
        </tr>
        <tr className="project-overview">
          <td className="bold">Plan from</td>
          <td>2023-09-10 17:19:00</td>
        </tr>
        <tr className="project-overview">
          <td className="bold">Planned date</td>
          <td>2023-09-10 17:19:00 To 2023-09-11 10:00:00</td>
        </tr>
        <tr className="project-overview">
          <td className="bold">Responsible</td>
          <td>testaa testii</td>
        </tr>
        <tr className="project-overview">
          <td className="bold">Status</td>
          <td>
            <span className="label label-done">Done</span>
          </td>
        </tr>
        <tr className="project-overview">
          <td className="bold">Reference purchase request</td>
          <td>
            <a href="https://perfexmodules.gtssolution.site/admin/purchase/view_pur_request/119">
              PR--887507-Sep-2023-SALES
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

                    </div>
                    <div className="">
                        <Tabs
              defaultActiveKey="payment2"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="payment2" title="Component">
               <div className="">
               <div className="tab-content active">
  <div role="tabpanel" className="tab-pane active" id="component_tab">
    <div className="form">
      <div
        id="product_tab_hs"
        className="product_tab handsontable ht__manualColumnMove ht__manualRowMove htRowHeaders htColumnHeaders"
        style={{ width: "100%" }}
        data-originalstyle="width: 100%;"
      >
        <div className="ht_master handsontable" style={{ overflow: "visible" }}>
          <div
            className="wtHolder"
            style={{ position: "relative", overflow: "visible" }}
          >
            <div className="wtHider" style={{ width: "1047.1px", height: 301 }}>
              <div
                className="wtSpreader"
                style={{ position: "relative", top: 0, left: 0 }}
              >
                <table className="htCore">
                  <colgroup>
                    <col className="rowHeader" style={{ width: 44 }} />
                    <col style={{ width: "0.1px" }} />
                    <col style={{ width: 201 }} />
                    <col style={{ width: 180 }} />
                    <col style={{ width: 233 }} />
                    <col style={{ width: 180 }} />
                    <col style={{ width: 209 }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="" style={{ height: 40 }}>
                        <div className="relative">
                          <span className="colHeader cornerHeader">&nbsp;</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">ID</span>
                        </div>
                      </th>
                      <th className="firstVisibleColumn afterHiddenColumn">
                        <div className="relative">
                          <span className="colHeader">Product</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Unit</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">To consume</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Reserved</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Consumed</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">1</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="">Kilogram</td>
                      <td
                        className="htRight"
                        style={{
                          background: "rgb(255, 255, 255)",
                          color: "rgb(76, 175, 80)"
                        }}
                      >
                        10.00
                      </td>
                      <td
                        className="htRight"
                        style={{
                          background: "rgb(255, 255, 255)",
                          color: "rgb(76, 175, 80)"
                        }}
                      >
                        10.00
                      </td>
                      <td
                        className="htRight"
                        style={{
                          background: "rgb(255, 255, 255)",
                          color: "rgb(76, 175, 80)"
                        }}
                      >
                        0.00
                      </td>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">2</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">3</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">4</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">5</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">6</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">7</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">8</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">9</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">10</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                  </tbody>
                </table>
                <div className="htBorders">
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current corner"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill corner"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ht_clone_top handsontable"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
            height: 0,
            transform: "translate3d(0px, 0px, 0px)"
          }}
        >
          <div
            className="wtHolder"
            style={{ position: "relative", height: 17 }}
          >
            <div className="wtHider" style={{ width: "1047.1px" }}>
              <div
                className="wtSpreader"
                style={{ position: "relative", left: 0 }}
              >
                <table className="htCore">
                  <colgroup>
                    <col className="rowHeader" style={{ width: 44 }} />
                    <col style={{ width: "0.1px" }} />
                    <col style={{ width: 201 }} />
                    <col style={{ width: 180 }} />
                    <col style={{ width: 233 }} />
                    <col style={{ width: 180 }} />
                    <col style={{ width: 209 }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="" style={{ height: 40 }}>
                        <div className="relative">
                          <span className="colHeader cornerHeader">&nbsp;</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">ID</span>
                        </div>
                      </th>
                      <th className="firstVisibleColumn afterHiddenColumn">
                        <div className="relative">
                          <span className="colHeader">Product</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Unit</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">To consume</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Reserved</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Consumed</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
                <div className="htBorders">
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current corner"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill corner"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ht_clone_bottom handsontable"
          style={{ position: "absolute", top: 0, left: 0, overflow: "hidden" }}
        >
          <div className="wtHolder" style={{ position: "relative" }}>
            <div className="wtHider">
              <div className="wtSpreader" style={{ position: "relative" }}>
                <table className="htCore">
                  <colgroup />
                  <thead>
                    <tr />
                  </thead>
                  <tbody />
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ht_clone_left handsontable"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
            width: 0,
            transform: "translate3d(0px, 0px, 0px)"
          }}
        >
          <div className="wtHolder" style={{ position: "relative", width: 17 }}>
            <div className="wtHider" style={{ height: 301 }}>
              <div
                className="wtSpreader"
                style={{ position: "relative", top: 0 }}
              >
                <table className="htCore">
                  <colgroup>
                    <col className="rowHeader" style={{ width: 44 }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="" style={{ height: 40 }}>
                        <div className="relative">
                          <span className="colHeader cornerHeader">&nbsp;</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">1</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">2</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">3</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">4</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">5</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">6</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">7</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">8</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">9</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">10</span>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
                <div className="htBorders">
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current corner"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill corner"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ht_clone_top_left_corner handsontable"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
            transform: "translate3d(0px, 0px, 0px)",
            height: 0,
            width: 0
          }}
        >
          <div className="wtHolder" style={{ position: "relative" }}>
            <div className="wtHider">
              <div className="wtSpreader" style={{ position: "relative" }}>
                <table className="htCore">
                  <colgroup>
                    <col className="rowHeader" style={{ width: 44 }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="" style={{ height: 40 }}>
                        <div className="relative">
                          <span className="colHeader cornerHeader">&nbsp;</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
                <div className="htBorders">
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current corner"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill corner"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="manualColumnResizer"
          style={{ top: 0, left: 419, height: 41 }}
        />
      </div>
      <input type="hidden" name="product_tab_hs" defaultValue="" />
    </div>
  </div>
  <div role="tabpanel" className="tab-pane" id="finished_product_tab">
    Use the Produce button or process the work orders to create some finished
    products.{" "}
  </div>
  <div role="tabpanel" className="tab-pane" id="miscellaneous_tab">
    <div className="row">
      <div className="col-md-6 panel-padding">
        <table className="table table-striped table-margintop">
          <tbody>
            <tr className="project-overview">
              <td className="bold" width="40%">
                Components warehouse
              </td>
              <td>All</td>
            </tr>
            <tr className="project-overview">
              <td className="bold">Finished Products warehouse</td>
              <td>TZ-WA3-2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

               </div>
              </Tab>
              <Tab eventKey="Finished Product" title="Finished Product">
                <div className="mt-3">
                Use the Produce button or process the work orders to create some finished products.
                <hr className="border-secondary opacity-3" />
                </div>
              </Tab>
              <Tab eventKey="Miscellaneous" title=" Miscellaneous">
              <div className="tab-content active">
  <div role="tabpanel" className="tab-pane" id="component_tab">
    <div className="form">
      <div
        id="product_tab_hs"
        className="product_tab handsontable ht__manualColumnMove ht__manualRowMove htRowHeaders htColumnHeaders"
        style={{ width: "100%" }}
        data-originalstyle="width: 100%;"
      >
        <div className="ht_master handsontable" style={{ overflow: "visible" }}>
          <div
            className="wtHolder"
            style={{ position: "relative", overflow: "visible" }}
          >
            <div className="wtHider" style={{ width: "1047.1px", height: 301 }}>
              <div
                className="wtSpreader"
                style={{ position: "relative", top: 0, left: 0 }}
              >
                <table className="htCore">
                  <colgroup>
                    <col className="rowHeader" style={{ width: 44 }} />
                    <col style={{ width: "0.1px" }} />
                    <col style={{ width: 201 }} />
                    <col style={{ width: 180 }} />
                    <col style={{ width: 233 }} />
                    <col style={{ width: 180 }} />
                    <col style={{ width: 209 }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="" style={{ height: 40 }}>
                        <div className="relative">
                          <span className="colHeader cornerHeader">&nbsp;</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">ID</span>
                        </div>
                      </th>
                      <th className="firstVisibleColumn afterHiddenColumn">
                        <div className="relative">
                          <span className="colHeader">Product</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Unit</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">To consume</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Reserved</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Consumed</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">1</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="">Kilogram</td>
                      <td
                        className="htRight"
                        style={{
                          background: "rgb(255, 255, 255)",
                          color: "rgb(76, 175, 80)"
                        }}
                      >
                        10.00
                      </td>
                      <td
                        className="htRight"
                        style={{
                          background: "rgb(255, 255, 255)",
                          color: "rgb(76, 175, 80)"
                        }}
                      >
                        10.00
                      </td>
                      <td
                        className="htRight"
                        style={{
                          background: "rgb(255, 255, 255)",
                          color: "rgb(76, 175, 80)"
                        }}
                      >
                        0.00
                      </td>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">2</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">3</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">4</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">5</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">6</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">7</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">8</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">9</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">10</span>
                        </div>
                      </th>
                      <td className="" />
                      <td className="afterHiddenColumn firstVisibleColumn" />
                      <td className="" />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                      <td
                        className=""
                        style={{ background: "rgb(255, 255, 255)" }}
                      />
                    </tr>
                  </tbody>
                </table>
                <div className="htBorders">
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current corner"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill corner"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ht_clone_top handsontable"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
            height: 0,
            transform: "translate3d(0px, 0px, 0px)"
          }}
        >
          <div
            className="wtHolder"
            style={{ position: "relative", height: 17 }}
          >
            <div className="wtHider" style={{ width: "1047.1px" }}>
              <div
                className="wtSpreader"
                style={{ position: "relative", left: 0 }}
              >
                <table className="htCore">
                  <colgroup>
                    <col className="rowHeader" style={{ width: 44 }} />
                    <col style={{ width: "0.1px" }} />
                    <col style={{ width: 201 }} />
                    <col style={{ width: 180 }} />
                    <col style={{ width: 233 }} />
                    <col style={{ width: 180 }} />
                    <col style={{ width: 209 }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="" style={{ height: 40 }}>
                        <div className="relative">
                          <span className="colHeader cornerHeader">&nbsp;</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">ID</span>
                        </div>
                      </th>
                      <th className="firstVisibleColumn afterHiddenColumn">
                        <div className="relative">
                          <span className="colHeader">Product</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Unit</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">To consume</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Reserved</span>
                        </div>
                      </th>
                      <th className="">
                        <div className="relative">
                          <span className="colHeader">Consumed</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
                <div className="htBorders">
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current corner"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill corner"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ht_clone_bottom handsontable"
          style={{ position: "absolute", top: 0, left: 0, overflow: "hidden" }}
        >
          <div className="wtHolder" style={{ position: "relative" }}>
            <div className="wtHider">
              <div className="wtSpreader" style={{ position: "relative" }}>
                <table className="htCore">
                  <colgroup />
                  <thead>
                    <tr />
                  </thead>
                  <tbody />
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ht_clone_left handsontable"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
            width: 0,
            transform: "translate3d(0px, 0px, 0px)"
          }}
        >
          <div className="wtHolder" style={{ position: "relative", width: 17 }}>
            <div className="wtHider" style={{ height: 301 }}>
              <div
                className="wtSpreader"
                style={{ position: "relative", top: 0 }}
              >
                <table className="htCore">
                  <colgroup>
                    <col className="rowHeader" style={{ width: 44 }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="" style={{ height: 40 }}>
                        <div className="relative">
                          <span className="colHeader cornerHeader">&nbsp;</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">1</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">2</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">3</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">4</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">5</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">6</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">7</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">8</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">9</span>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th className="" style={{ height: 29 }}>
                        <div className="relative">
                          <span className="rowHeader">10</span>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
                <div className="htBorders">
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current corner"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill corner"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ht_clone_top_left_corner handsontable"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
            transform: "translate3d(0px, 0px, 0px)",
            height: 0,
            width: 0
          }}
        >
          <div className="wtHolder" style={{ position: "relative" }}>
            <div className="wtHider">
              <div className="wtSpreader" style={{ position: "relative" }}>
                <table className="htCore">
                  <colgroup>
                    <col className="rowHeader" style={{ width: 44 }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="" style={{ height: 40 }}>
                        <div className="relative">
                          <span className="colHeader cornerHeader">&nbsp;</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
                <div className="htBorders">
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 2,
                        width: 2,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder current corner"
                      style={{
                        backgroundColor: "rgb(75, 137, 255)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: 0 }}>
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 1,
                        width: 1,
                        display: "none"
                      }}
                    />
                    <div
                      className="wtBorder fill corner"
                      style={{
                        backgroundColor: "rgb(255, 0, 0)",
                        height: 6,
                        width: 6,
                        border: "1px solid rgb(255, 255, 255)",
                        display: "none"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="manualColumnResizer"
          style={{ top: 0, left: 419, height: 41 }}
        />
      </div>
      <input type="hidden" name="product_tab_hs" defaultValue="" />
    </div>
  </div>
  <div role="tabpanel" className="tab-pane" id="finished_product_tab">
    Use the Produce button or process the work orders to create some finished
    products.{" "}
  </div>
  <div role="tabpanel" className="tab-pane active" id="miscellaneous_tab">
    <div className="row">
      <div className="col-md-6 panel-padding">
        <table className="table table-striped table-margintop">
          <tbody>
            <tr className="project-overview">
              <td className="bold" width="40%">
                Components warehouse
              </td>
              <td>All</td>
            </tr>
            <tr className="project-overview">
              <td className="bold">Finished Products warehouse</td>
              <td>TZ-WA3-2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

              </Tab>
             
   </Tabs>
                        </div>
            </div>
        </div>
        </>
    )
}
export default ViewManufacturing