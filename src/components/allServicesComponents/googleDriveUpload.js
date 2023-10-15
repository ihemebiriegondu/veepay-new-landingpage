import React from "react";
import GooglePicker from "react-google-picker";

export default function GoogleDriveUpload() {
  //const [data, setData] = useState([]);
  const CLIENT_ID =
    "891792574135-d3d45975advcmsbc8uo2rcuibebacllh.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDD0fA8LuMQKMDs2LoUFDwzcVlc187MKPU";
  const APP_ID = "arched-bot-311203";
  const scope = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.photos",
  ];

  return (
    <GooglePicker
      clientId={CLIENT_ID}
      developerKey={API_KEY}
      scope={scope}
      onChange={(data) => console.log("on change:", data)}
      onAuthFailed={(data) => console.log("on auth failed:", data)}
      navHidden
      mimeTypes={["image/png", "image/jpeg", "image/jpg"]}
      createPicker={(google, oauthToken) => {
        const picker = new google.picker.PickerBuilder()
          .addView(new google.picker.View(google.picker.ViewId.DOCS_IMAGES))
          .addView(new google.picker.DocsUploadView())
          .setOAuthToken(oauthToken)
          .setDeveloperKey(API_KEY)
          .setAppId(APP_ID)
          .setCallback((data) => {
            if (data.action === google.picker.Action.PICKED) {
              var fileId = data.docs[0].id;
              console.log(fileId)
            }
          })
          .enableFeature(google.picker.Feature.NAV_HIDDEN)
          .enableFeature(google.picker.Feature.MULTISELECT_ENABLED);

        picker.build().setVisible(true);
      }}
    >
      <button>Continue with google</button>
      {/* <li className="flex items-center gap-x-2.5 lg:px-10 md:px-6 xs:px-3 px-2 py-px transition duration-100 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs">
      Upload contacts from Google Drive
    </li> */}
    </GooglePicker>
  );
}
