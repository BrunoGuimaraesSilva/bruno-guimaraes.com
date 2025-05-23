import {
  Box,
  Button,
  Input,
  Textarea,
  Heading,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import ResponsiveContainer from "@presentation/wrappers/ResponsiveContainer";
import {
  LIGHT,
  useColorMode,
  useColorModeValue,
} from "@presentation/ui/color-mode";
import { useEffect } from "react";
import { Toaster, toaster } from "@presentation/ui/toaster";
import { useMail } from "@presentation/contexts/MailContext";
import LottieAnimation from "@presentation/animation/mail";
import useIsMobile from "@hooks/useIsMobile";
import i18n from "@i18n";

const ContactPage = () => {
  const { t } = i18n;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  
  const { sendMail, isSending } = useMail();

  type FormData = {
    name: string;
    email: string;
    message: string;
  };

  const onSubmit = async (data: FormData) => {
    await sendMail(data);
    reset();
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => {
        toaster.create({
          title: error?.message || t("contact:error:default"),
          type: "error",
          action: { label: t("contact:error:undo") },
        });
      });
    }
  }, [errors]);

  const { colorMode } = useColorMode();
  const bgDefaultColor = useColorModeValue(
    "background_dark",
    "background_light"
  );
  const defaultColor = useColorModeValue(
    "primary_light.50",
    "primary_dark.900"
  );
  const isMobile = useIsMobile();

  const inputStyles = {
    bg: "background_light",
    color: "primary_dark.900",
    border: colorMode === LIGHT ? "1px solid #2D3748" : "1px solid #E2E8F0",
  };

  return (
    <ResponsiveContainer containerProps={{ id: "ContactSection", style: { minHeight: "65vh" } }}>
      <Flex
        w="100%"
        py={10}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        gap={10}
      >
        <Box flex={1} p={6}>
          <Heading as="h2" size="xl" mb={4}>
            {t("contact:title")}
          </Heading>
          <Text mb={4}>{t("contact:description")}</Text>
          <VStack as="form" onSubmit={handleSubmit(onSubmit)} align="stretch">
            <Input
              placeholder={t("contact:form:name")}
              {...register("name", { required: t("contact:error:name") })}
              {...inputStyles}
            />
            <Input
              type="email"
              placeholder={t("contact:form:email")}
              {...register("email", {
                required: t("contact:error:email"),
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t("contact:error:invalidEmail"),
                },
              })}
              {...inputStyles}
            />
            <Textarea
              placeholder={t("contact:form:message")}
              {...register("message", { required: t("contact:error:message") })}
              {...inputStyles}
            />
            <Button
              type="submit"
              color={defaultColor}
              bg={bgDefaultColor}
              width="full"
              loading={isSending}
              disabled={isSending}
            >
              {t("contact:button")}
            </Button>
          </VStack>
        </Box>

        <Box display="flex" flex={1} width={"full"} height={"full"}>
          {!isMobile ? <LottieAnimation /> : <></>}
        </Box>
      </Flex>
      <Toaster />
    </ResponsiveContainer>
  );
};

export default ContactPage;
