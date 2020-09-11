import React from "react";
import { Global, css, connect } from "frontity";
/* Fonts from Bw Quinta Pro */
import BwQuintaProBlack from "../../fonts/bw-quinta-pro/BwQuintaPro-Black.woff"
import BwQuintaProBlackItalic from "../../fonts/bw-quinta-pro/BwQuintaPro-BlackItalic.woff"
import BwQuintaProBold from "../../fonts/bw-quinta-pro/BwQuintaPro-Bold.woff"
import BwQuintaProBoldItalic from "../../fonts/bw-quinta-pro/BwQuintaPro-BoldItalic.woff"
import BwQuintaProLight from "../../fonts/bw-quinta-pro/BwQuintaPro-Light.woff"
import BwQuintaProLightItalic from "../../fonts/bw-quinta-pro/BwQuintaPro-LightItalic.woff"
import BwQuintaProMedium from "../../fonts/bw-quinta-pro/BwQuintaPro-Medium.woff"
import BwQuintaProMediumItalic from "../../fonts/bw-quinta-pro/BwQuintaPro-MediumItalic.woff"
import BwQuintaProRegular from "../../fonts/bw-quinta-pro/BwQuintaPro-Regular.woff"
import BwQuintaProRegularItalic from "../../fonts/bw-quinta-pro/BwQuintaPro-RegularItalic.woff"

const FontFace = ({ state }) => {
  let fonts = null;
  let fontDisplay = "swap";
  switch (state.theme.fontSets) {
    case "us-ascii":
      fonts = [BwQuintaProRegular, BwQuintaProMedium, BwQuintaProBold];
      fontDisplay = "block";
      break;
    case "latin":
      fonts = [BwQuintaProRegular, BwQuintaProMedium, BwQuintaProBold];
      break;
    default:
      fonts = [BwQuintaProRegular, BwQuintaProMedium, BwQuintaProBold];
  }

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Bw Quinta Pro";
          font-style: sans-serif;
          font-weight: 400;
          src: url(${fonts[0]}) format("woff");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Bw Quinta Pro";
          font-style: sans-serif;
          font-weight: 500;
          src: url(${fonts[1]}) format("woff");
          font-display: ${fontDisplay};
        }

        @font-face {
          font-family: "Bw Quinta Pro";
          font-style: sans-serif;
          font-weight: 600;
          src: url(${fonts[2]}) format("woff");
          font-display: ${fontDisplay};
        }
      `}
    />
  );
};

export default connect(FontFace);
