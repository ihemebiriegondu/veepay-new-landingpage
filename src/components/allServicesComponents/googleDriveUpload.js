import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

export default function GoogleDriveUpload() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: "AIzaSyCCd3uDvDOE3m99T58pB1yvzPJNvOUqs54",
        clientId:
          "891792574135-nbfadngfq66m846gv327ubmhrls0mn41.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/drive",
      });

      gapi.client.load("drive", "v3").then(() => {
        let response;

        try {
          response = gapi.client.drive.files.list({
            pageSize: 10,
            fields: "files(id, name)",
          });
          console.log(response);
          /*.get({ fileId, alt: "media" })
            .then((response) => {
              const fileContent = response.result;
              setData(fileContent);
            })
            .catch((error) => {
              console.log(error);
            });*/
        } catch (error) {
          console.log(error);
        }
        const files = response.result;
        console.log(files);
        setData(files)
      });
    }

    gapi.load("client", start);
  }, []);
  console.log(data);

  return (
    <li className="flex items-center gap-x-2.5 lg:px-10 md:px-6 xs:px-3 px-2 py-px transition duration-100 ease-in-out hover:bg-primary/10 cursor-pointer lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs">
      Upload contacts from Google Drive
    </li>
  );
}
