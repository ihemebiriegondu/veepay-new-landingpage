import React from "react";
import GooglePicker from "react-google-picker";

export default function GoogleDriveUpload() {
  //const [data, setData] = useState([]);
  const CLIENT_ID =
    "891792574135-ifpgmstrb480daqmk2ajitcrgkebjj80.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDD0fA8LuMQKMDs2LoUFDwzcVlc187MKPU";
  const SCOPE = ["https://www.googleapis.com/auth/drive.readonly"];

  return (
    <GooglePicker
      clientId={CLIENT_ID}
      developerKey={API_KEY}
      scope={SCOPE}
      onChange={(data) => console.log("on change:", data)}
      onAuthFailed={(data) => console.log("on auth failed:", data)}
      multiselect={true}
      navHidden={true}
      authImmediate={false}
      viewId={"FOLDERS"}
      createPicker={(google, oauthToken) => {
        const googleViewId = google.picker.ViewId.FOLDERS;
        const docsView = new google.picker.DocsView(googleViewId)
          .setIncludeFolders(true)
          .setMimeTypes("application/vnd.google-apps.folder")
          .setSelectFolderEnabled(true);

        const picker = new window.google.picker.PickerBuilder()
          .addView(docsView)
          .setOAuthToken(oauthToken)
          .setDeveloperKey(API_KEY)
          .setCallback(() => {
            console.log("Custom picker is ready!");
          });

        picker.build().setVisible(true);
      }}
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
