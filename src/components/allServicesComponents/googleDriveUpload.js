import React from "react";
import useDrivePicker from "react-google-drive-picker";

export default function GoogleDriveUpload(props) {
  //const [contacts, setContacts] = useState([]);

  const CLIENT_ID =
    "891792574135-ifpgmstrb480daqmk2ajitcrgkebjj80.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDD0fA8LuMQKMDs2LoUFDwzcVlc187MKPU";

  const [openPicker, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    let contactData;
    let downloadUrl;

    openPicker({
      clientId: CLIENT_ID,
      developerKey: API_KEY,
      //token: authResponse.access_token,
      viewId: "DOCS",
      //viewMimeTypes: 'text/x-vcard',
      viewMimeTypes: "text/plain",
      showUploadView: false,
      showUploadFolders: false,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          props.setShowDropdown(false);
          props.setPlaceholder("Input Numbers or select other options");
        } else {
          contactData = data.docs;
          props.setShowDropdown(false);
          props.setPlaceholder("Input Numbers or select other options");
          console.log(contactData);

          for (const key in contactData) {
            //console.log(contactData[key].url);
            downloadUrl = contactData[key].url;
            console.log(downloadUrl);

            fetch("https://cors-anywhere.herokuapp.com/" + downloadUrl)
              .then((response) => response.text())
              .then((text) => {
                console.log(text);
              });
          }
        }
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
