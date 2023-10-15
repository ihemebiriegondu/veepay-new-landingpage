import React from "react";
import GooglePicker from "react-google-picker";

export default function GoogleDriveUpload() {
  //const [data, setData] = useState([]);
  const CLIENT_ID =
    "891792574135-d3d45975advcmsbc8uo2rcuibebacllh.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDD0fA8LuMQKMDs2LoUFDwzcVlc187MKPU";

  return (
    <GooglePicker
      clientId={CLIENT_ID}
      developerKey={API_KEY}
      scope={["https://www.googleapis.com/auth/drive.readonly"]}
      onChange={(data) => console.log("on change:", data)}
      onAuthenticate={(token) => console.log("oauth token:", token)}
      onAuthFailed={(data) => console.log("on auth failed:", data)}
      multiselect={true}
      navHidden={true}
      authImmediate={false}
      mimeTypes={["image/png", "image/jpeg", "image/jpg"]}
      viewId={"DOCS"}
    >
      <li className="flex items-center gap-x-2.5 lg:px-10 md:px-6 xs:px-3 px-2 py-px transition duration-100 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs">
        Upload contacts from Google Drive
      </li>
    </GooglePicker>
  );
}

/* <li className="flex items-center gap-x-2.5 lg:px-10 md:px-6 xs:px-3 px-2 py-px transition duration-100 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs">
      Upload contacts from Google Drive
    </li> */
