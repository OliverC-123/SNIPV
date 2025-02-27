import { Text } from "@nextui-org/react";
import Head from "next/head";
import React from "react";
import PatchNotes from "../../components/Settings/PatchNotes";

const PatchnotesSettings = () => {
  return (
    <div className="min-h-[70vh]">
      <Head>
        <title>Opdateringer - SNIPV</title>
        <meta name="description" content="Created by Peter G" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div>
          <Text h4>Opdateringer</Text>
        </div>
        <hr />

        <div>
          <PatchNotes />
        </div>
      </div>
    </div>
  );
};

export default PatchnotesSettings;
