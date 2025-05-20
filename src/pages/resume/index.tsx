import { Box, Text } from "@chakra-ui/react";
import ResponsiveContainer from "@presentation/wrappers/ResponsiveContainer";
import i18n, { t } from "i18next";

const PDFViewer = () => {

  const document = i18n.language === "en-US" ? "/assets/resume_en.pdf" : "/assets/resume_pt_br.pdf";
  return (
    <ResponsiveContainer containerProps={{ id: "ResumeSection", style: { paddingTop: 35 } }}>
        <Box maxH="63vh" h={500} w="100%">
          <object
            data={document}
            type="application/pdf"
            height="100%"
            width="100%"
          >
            <Box textAlign="center" p={5}>
              <Text>{t("common:resume:error")}</Text>
            </Box>
          </object>
        </Box>
    </ResponsiveContainer>
  );
};

export default PDFViewer;
