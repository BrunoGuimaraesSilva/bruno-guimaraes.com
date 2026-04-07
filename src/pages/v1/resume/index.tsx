import { Box, Text } from "@chakra-ui/react";
import ResponsiveContainer from "@shared/wrappers/ResponsiveContainer";
import i18n from "@i18n";

const PDFViewer = () => {
  const { t } = i18n;
  const document = "/assets/Resume_new.pdf";

  return (
    <ResponsiveContainer containerProps={{ id: "ResumeSection", style: { paddingTop: 35 } }}>
      <Box maxH="63vh" h={500} w="100%">
        <object data={document} type="application/pdf" height="100%" width="100%">
          <Box textAlign="center" p={5}>
            <Text>{String(t("common:resume.error"))}</Text>
          </Box>
        </object>
      </Box>
    </ResponsiveContainer>
  );
};

export default PDFViewer;
