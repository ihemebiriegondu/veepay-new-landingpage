import React, { useEffect } from "react";
import { gapi } from "gapi-script";

export default function GoogleDriveUpload() {
  //const [data, setData] = useState([]);

  useEffect(() => {
    gapi.load("client", initializeGapClient);
  }, []);

  async function initializeGapClient() {
    // Initialize the JavaScript client library and auth.
    await gapi.client.init({
      apiKey: "AIzaSyCCd3uDvDOE3m99T58pB1yvzPJNvOUqs54",
      clientId:
        "891792574135-nbfadngfq66m846gv327ubmhrls0mn41.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/drive",
    });
  }

  const getGoogleDriveContact = () => {
    listFiles();
  };

  const listFiles = async () => {
    let response;

    try {
      response = await gapi.client.drive.files.list({
        pageSize: 10,
        fields: "files(id, name)",
      });
    } catch (err) {
      //document.getElementById("content").innerText = err.message;
      return;
    }
    const files = response.result.files;
    if (!files || files.length === 0) {
      // document.getElementById("content").innerText = "No files found.";
      return;
    }
    // Flatten to string to display
    const output = files.reduce(
      (str, file) => `${str}${file.name} (${file.id})\n`,
      "Files:\n"
    );
    //document.getElementById("content").innerText = output;
    console.log(output);
  };

  return (
    <li
      onClick={() => {
        getGoogleDriveContact();
      }}
      className="flex items-center gap-x-2.5 lg:px-10 md:px-6 xs:px-3 px-2 py-px transition duration-100 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs"
    >
      Upload contacts from Google Drive
    </li>
  );
}
