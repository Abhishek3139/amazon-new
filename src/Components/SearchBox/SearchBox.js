import React from "react";
import "../SearchBox/SearchBox.css";
import { FaSearch } from "react-icons/fa";

export default function Searchbox(props) {
  return (
    <>
      {props.focus ? (
        <div className="searchboxs">
          <div class="select">
            <select onClick={props.focusLiftState}>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
            </select>
          </div>
          <div class="search">
            <input type="search" name="" id="" onClick={props.focusLiftState} />
            <div class="SearchIcon">
              <FaSearch id="sbtn" />
            </div>
          </div>
        </div>
      ) : (
        <div className="searchbox">
          <div class="select">
            <select>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
              <option value="All">All</option>
            </select>
          </div>
          <div class="search">
            <input type="search" name="" id="" onClick={props.focusLiftState} />
            <div class="SearchIcon">
              <FaSearch id="sbtn" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
