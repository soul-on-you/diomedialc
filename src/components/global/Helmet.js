import { Helmet } from "react-helmet";
import React from "react";
export default () => {
  return (
    <Helmet>
      <title>DiomedialC</title>
      <meta name={"description"} content={"AI modulating crash tests"} />
      <meta property={"og:title"} content={"DiomedialC"} />
      <meta property={"og:description"} content={"AI modulating crash tests"} />
      <meta
        property={"og:image"}
        content={
          "/DiomedialCNet/icons/logo1920x1080.jpg"
        }
      />
      <link
        rel={"shortcut icon"}
        href={
          "/DiomedialCNet/icons/logo32x32.ico"
        }
        type={"image/x-icon"}
      />
      <link
        rel={"apple-touch-icon"}
        href={
          "/DiomedialCNet/icons/logo152x152.ico"
        }
      />
      <link
        rel={"apple-touch-icon"}
        sizes={"76x76"}
        href={
          "/DiomedialCNet/icons/logo152x152.ico"
        }
      />
      <link
        rel={"apple-touch-icon"}
        sizes={"152x152"}
        href={
          "/DiomedialCNet/icons/logo152x152.ico"
        }
      />
      <link
        rel={"apple-touch-startup-image"}
        href={
          "/DiomedialCNet/icons/logo152x152.ico"
        }
      />
      <meta
        name={"msapplication-TileImage"}
        content={
          "/DiomedialCNet/icons/logo256x256.ico"
        }
      />
    </Helmet>
  );
};
