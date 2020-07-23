import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CustomTemplateCertificate extends Document {
  name: string;
  recipient: {
    name: string
  };
}

export const cocTemplateCertificate: CustomTemplateCertificate = {
  name: "OpenAttestation Tutorial Certificate of Completion",
  recipient: {
    name: "John Doe"
  },
  $template: {
    name: "COC",
    type: "EMBEDDED_RENDERER",
    // url: "http://localhost:3000"
    url: "https://vigilant-shirley-690ecd.netlify.app"
  }
};