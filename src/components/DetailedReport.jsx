import React, { useState, useEffect } from "react";
import "../css/DetailedReport.css";
import { CiImport, CiExport } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { PiLessThan, PiGreaterThan } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import EditModal from "./EditModal";

const DetailedReport = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formMode, setFormMode] = useState("add");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Đưa fetchData ra ngoài để dùng lại
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://67cd3719dd7651e464edabb9.mockapi.io/users"
      );
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getStatusBadge = (status) => {
    let className = "status-badge ";
    switch (status) {
      case "New":
        className += "bg-blue-100 text-blue-600";
        break;
      case "In-progress":
        className += "bg-yellow-100 text-yellow-700";
        break;
      case "Completed":
        className += "bg-green-100 text-green-700";
        break;
      default:
        className += "bg-gray-100 text-gray-600";
    }
    return <span className={className}>{status}</span>;
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setFormMode("add");
    setIsModalOpen(true);
  };

  const handleEditUser = async (user) => {
    try {
      const res = await fetch(
        `https://67cd3719dd7651e464edabb9.mockapi.io/users/${user.id}`
      );
      const data = await res.json();
      setSelectedUser(data);
      setFormMode("edit");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container-detailed-report">
      {/* Header */}
      <div className="header-detailed-report">
        <div className="logo-detailed-report">
          <img src="../../img/File text 1.png" alt="logo" />
          Detailed Report
        </div>
        <div className="button-ex-im">
          <button className="button-adduser" onClick={handleAddUser}>
            <FaRegUserCircle /> Add user
          </button>
          <button className="button-import">
            <CiImport /> Import
          </button>
          <button className="button-export">
            <CiExport /> Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="main-detailed-report">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>CUSTOMER NAME</th>
              <th>COMPANY</th>
              <th>ORDER VALUE</th>
              <th>ORDER DATE</th>
              <th style={{ textAlign: "center" }}>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id || index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img
                    src="../../img/Avatar 313.png"
                    alt="avatar"
                    style={{
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                    }}
                  />
                  {user.customerName}
                </td>
                <td>{user.company}</td>
                <td>${user.orderValue}</td>
                <td>{user.orderDate}</td>
                <td style={{ textAlign: "center" }}>
                  {getStatusBadge(user.status)}
                </td>
                <td>
                  <button onClick={() => handleEditUser(user)}>
                    <GoPencil />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <EditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        user={selectedUser}
        mode={formMode}
        onSuccess={() => {
          fetchData(); // Gọi lại sau khi submit thành công
        }}
      />

      {/* Pagination Footer */}
      <div className="footer-detailed-report">
        <p>{users.length} results</p>
        <div className="number-page-navigation">
          <PiLessThan />
          <button>
            <span>1</span>
          </button>
          <button>
            <span>2</span>
          </button>
          <button>
            <span>3</span>
          </button>
          <button>
            <span>4</span>
          </button>
          <button>
            <span>...</span>
          </button>
          <button>
            <span>10</span>
          </button>
          <button>
            <span>11</span>
          </button>
          <PiGreaterThan />
        </div>
      </div>
    </div>
  );
};

export default DetailedReport;
