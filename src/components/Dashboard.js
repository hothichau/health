import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Bảng điều khiển</h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active">Tổng quát</li>
                  </ol>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>150</h3>
                      <p>Tổng số người dùng</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                    <a href="#" className="small-box-footer">
                      Xem thêm <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>
                        53<sup style={{ fontSize: 20 }}>%</sup>
                      </h3>
                      <p>Doanh thu</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars" />
                    </div>
                    <a href="#" className="small-box-footer">
                      Xem thêm <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>44</h3>
                      <p>Người đăng ký</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add" />
                    </div>
                    <a href="#" className="small-box-footer">
                      Xem thêm <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>3</h3>
                      <p>Gói ưu đãi</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph" />
                    </div>
                    <a href="#" className="small-box-footer">
                      Xem thêm <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <section className="col-lg-7 connectedSortable">
                  {/* Custom tabs (Charts with tabs)*/}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fas fa-chart-pie mr-1" />
                        Gói ưu đãi
                      </h3>
                      <div className="card-tools">
                        <ul className="nav nav-pills ml-auto">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#revenue-chart"
                              data-toggle="tab"
                            >
                              Theo tháng
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#sales-chart"
                              data-toggle="tab"
                            >
                              Tổng số
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content p-0">
                        {/* Morris chart - Sales */}
                        <div
                          className="chart tab-pane active"
                          id="revenue-chart"
                          style={{ position: "relative", height: 300 }}
                        >
                          <canvas
                            id="revenue-chart-canvas"
                            height={300}
                            style={{ height: 300 }}
                          />
                        </div>
                        <div
                          className="chart tab-pane"
                          id="sales-chart"
                          style={{ position: "relative", height: 300 }}
                        >
                          <canvas
                            id="sales-chart-canvas"
                            height={300}
                            style={{ height: 300 }}
                          />
                        </div>
                        <div
                          className="chart tab-pane"
                          id="sales-chart"
                          style={{ position: "relative", height: 300 }}
                        >
                          <canvas
                            id="sales-chart-canvas"
                            height={300}
                            style={{ height: 300 }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                  {/* DIRECT CHAT */}
                  <div className="card direct-chat direct-chat-primary">
                    <div className="card-header">
                      <h3 className="card-title">Tin nhắn</h3>
                      <div className="card-tools">
                        <span
                          title="3 New Messages"
                          className="badge badge-primary"
                        >
                          3
                        </span>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-tool"
                          title="Contacts"
                          data-widget="chat-pane-toggle"
                        >
                          <i className="fas fa-comments" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      {/* Conversations are loaded here */}
                      <div className="direct-chat-messages">
                        {/* Message. Default to the left */}
                        <div className="direct-chat-msg">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-left">
                              Admin
                            </span>
                            <span className="direct-chat-timestamp float-right">
                              23 Jan 2:00 pm
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="/dist/img/user1-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            Chào bạn, chúng tôi có thể giúp được gì cho bạn?
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message to the right */}
                        <div className="direct-chat-msg right">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-right">
                              Mai Liên
                            </span>
                            <span className="direct-chat-timestamp float-left">
                              23 Jan 2:05 pm
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="/dist/img/user4-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                           Sao tôi không thể dùng được chức năng chẩn đoán bệnh?
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message. Default to the left */}
                        <div className="direct-chat-msg">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-left">
                              Admin
                            </span>
                            <span className="direct-chat-timestamp float-right">
                              23 Jan 5:37 pm
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="/dist/img/user1-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            Bạn cần phải nâng cấp tài khoản bằng việc trả phí mỗi tháng để sử dụng chức năng trên ạ.
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message to the right */}
                        <div className="direct-chat-msg right">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-right">
                              Mai Liên
                            </span>
                            <span className="direct-chat-timestamp float-left">
                              23 Jan 6:10 pm
                            </span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img
                            className="direct-chat-img"
                            src="/dist/img/user4-128x128.jpg"
                            alt="message user image"
                          />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            Tôi phải trả bao nhiêu?
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                      </div>
                      {/*/.direct-chat-messages*/}
                      {/* Contacts are loaded here */}
                      <div className="direct-chat-contacts">
                        <ul className="contacts-list">
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="/dist/img/user8-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Anh Tú
                                  <small className="contacts-list-date float-right">
                                    2/28/2021
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  Hãy giải đáp thắc mắc...
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="#">
                              <img
                                className="contacts-list-img"
                                src="/dist/img/user7-128x128.jpg"
                                alt="User Avatar"
                              />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Cody
                                  <small className="contacts-list-date float-right">
                                    2/23/2021
                                  </small>
                                </span>
                                <span className="contacts-list-msg">
                                  Hãy hướng dẫn tôi nâng cấp tài khoản
                                </span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                        </ul>
                        {/* /.contacts-list */}
                      </div>
                      {/* /.direct-chat-pane */}
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <form action="#" method="post">
                        <div className="input-group">
                          <input
                            type="text"
                            name="message"
                            placeholder="Nhập tin nhắn ..."
                            className="form-control"
                          />
                          <span className="input-group-append">
                            <button type="button" className="btn btn-primary">
                              Gửi
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                    {/* /.card-footer*/}
                  </div>
                  {/*/.direct-chat */}
                </section>
                {/* /.Left col */}
                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                <section className="col-lg-5 connectedSortable">
                  {/* Map card */}
                  <div className="card bg-gradient-primary">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-map-marker-alt mr-1" />
                        Visitors
                      </h3>
                      {/* card tools */}
                      <div className="card-tools">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm daterange"
                          title="Date range"
                        >
                          <i className="far fa-calendar-alt" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          data-card-widget="collapse"
                          title="Collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                      </div>
                      {/* /.card-tools */}
                    </div>
                    <div className="card-body">
                      <div
                        id="world-map"
                        style={{ height: 250, width: "100%" }}
                      />
                    </div>
                    {/* /.card-body*/}
                    <div className="card-footer bg-transparent">
                      <div className="row">
                        <div className="col-4 text-center">
                          <div id="sparkline-1" />
                          <div className="text-white">Visitors</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <div id="sparkline-2" />
                          <div className="text-white">Online</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <div id="sparkline-3" />
                          <div className="text-white">Sales</div>
                        </div>
                        {/* ./col */}
                      </div>
                      {/* /.row */}
                    </div>
                  </div>
                  {/* /.card */}
                  {/* solid sales graph */}
                  <div className="card bg-gradient-info">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-th mr-1" />
                        Sales Graph
                      </h3>
                      <div className="card-tools">
                        <button
                          type="button"
                          className="btn bg-info btn-sm"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn bg-info btn-sm"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <canvas
                        className="chart"
                        id="line-chart"
                        style={{
                          minHeight: 250,
                          height: 250,
                          maxHeight: 250,
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer bg-transparent">
                      <div className="row">
                        <div className="col-4 text-center">
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            defaultValue={20}
                            data-width={60}
                            data-height={60}
                            data-fgcolor="#39CCCC"
                          />
                          <div className="text-white">Mail-Orders</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            defaultValue={50}
                            data-width={60}
                            data-height={60}
                            data-fgcolor="#39CCCC"
                          />
                          <div className="text-white">Online</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            defaultValue={30}
                            data-width={60}
                            data-height={60}
                            data-fgcolor="#39CCCC"
                          />
                          <div className="text-white">In-Store</div>
                        </div>
                        {/* ./col */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.card-footer */}
                  </div>
                  {/* /.card */}
                  {/* Calendar */}
                  <div className="card bg-gradient-success">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="far fa-calendar-alt" />
                        Calendar
                      </h3>
                      {/* tools card */}
                      <div className="card-tools">
                        {/* button with a dropdown */}
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-success btn-sm dropdown-toggle"
                            data-toggle="dropdown"
                            data-offset={-52}
                          >
                            <i className="fas fa-bars" />
                          </button>
                          <div className="dropdown-menu" role="menu">
                            <a href="#" className="dropdown-item">
                              Add new event
                            </a>
                            <a href="#" className="dropdown-item">
                              Clear events
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                              View calendar
                            </a>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                      {/* /. tools */}
                    </div>
                    {/* /.card-header */}
                    <div className="card-body pt-0">
                      {/*The calendar */}
                      <div id="calendar" style={{ width: "100%" }} />
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </section>
                {/* right col */}
              </div>
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </div>
    );
  }
}
