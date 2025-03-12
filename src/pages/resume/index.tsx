import { Box, Text } from "@chakra-ui/react";
import ResponsiveContainer from "@presentation/wrappers/ResponsiveContainer";
import { t } from "i18next";

const PDFViewer = () => {

  return (
    <ResponsiveContainer containerProps={{ style: { maxHeight: "100%" } }}>
        <Box maxH="63vh" h={500} w="100%">
          <object
            data="/assets/resume.pdf"
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
