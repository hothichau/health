import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="index3.html" className="nav-link">
                Trang chủ
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                Liên hệ
              </a>
            </li>
          </ul>
          {/* SEARCH FORM */}
          <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
              <input
                className="form-control form-control-navbar"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Notifications Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
                  15 thông báo mới
                </span>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /><b>+23</b> người dùng mới
                  <span className="float-right text-muted text-sm">3p</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2" /><b>+3</b> dùng gói Premium
                  <span className="float-right text-muted text-sm">
                    12g
                  </span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2" /><b>+2</b> dùng gói Pro
                  <span className="float-right text-muted text-sm">2n</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">
                  Xem tất cả thông báo
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="fullscreen"
                href="#"
                role="button"
              >
                <i className="fas fa-expand-arrows-alt" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                href="#"
                role="button"
              >
                <i className="fas fa-th-large" />
              </a>
            </li>
          </ul>
        </nav>
        {/* /.navbar */}
      </div>
    );
  }
}
