import React from "react";
import useDrivePicker from "react-google-drive-picker";

export default function GoogleDriveUpload() {
  //const [data, setData] = useState([]);
  const CLIENT_ID =
    "891792574135-ifpgmstrb480daqmk2ajitcrgkebjj80.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDD0fA8LuMQKMDs2LoUFDwzcVlc187MKPU";
  //const SCOPE = ["https://www.googleapis.com/auth/drive.readonly"];

  const [openPicker, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId: CLIENT_ID,
      developerKey: API_KEY,
      viewId: "DOCS",
      token:
        "ya29.a0AfB_byCoTyhJTYRfMf7aH2AotLXcNNkcVDMVvUzw5W8py_z8gfFZ97kdalM84AzeZ6xbqJNlA1AuryvLwJng41aHXzHW9k34zjoEyBiYJWJSpv8LB992B0hcB6ahsq4L8RrA0LPF0ZP2avH0pn5wRdGtndkV1e-M8_jeaCgYKATgSARMSFQGOcNnCIoAkWxdVbOHtsBIp-M6YRw0171",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
      },
    });
    console.log(authResponse);
  };

  return (
    <li
      onClick={() => handleOpenPicker()}
      className="flex items-center gap-x-2.5 lg:px-10 md:px-6 xs:px-3 px-2 py-px transition duration-100 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs"
    >
      Upload contacts from Google Drive
    </li>
  );
}

/* <li className="flex items-center gap-x-2.5 lg:px-10 md:px-6 xs:px-3 px-2 py-px transition duration-100 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs">
      Upload contacts from Google Drive
    </li> */
