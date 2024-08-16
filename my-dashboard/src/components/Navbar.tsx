import React from "react";
import {
  Search,
  Settings,
  Notifications,
  AccountCircle,
} from "@mui/icons-material";
import { TextField, IconButton } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <div
      className="w-full h-16 bg-white text-black p-4 fixed top-0 left-0 z-50 flex items-center justify-between rounded-full shadow-md"
    >
      <h2 className="text-2xl font-bold ml-4 md:ml-8">Overview</h2>

      <div className="flex flex-1 justify-center md:justify-end px-4">
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          className="bg-gray-300 text-black rounded-lg w-full max-w-xs md:max-w-sm"
          InputProps={{
            startAdornment: (
              <IconButton>
                <Search style={{ color: "black" }} />
              </IconButton>
            ),
          }}
        />
      </div>

      <div className="flex items-center space-x-4 mr-4">
        <IconButton>
          <Settings style={{ color: "black" }} />
        </IconButton>
        <IconButton>
          <Notifications style={{ color: "black" }} />
        </IconButton>

        <div className="flex items-center">
          <AccountCircle style={{ color: "black" }} />
          <span className="ml-2 hidden md:inline">Gopika</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
