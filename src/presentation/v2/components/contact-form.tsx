import { useState } from "react";
import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FiSend, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { V2_COLORS, liquidGlassStyle, cardBaseStyle } from "@infra/theme/v2-glass";
import { useMail } from "@shared/contexts/MailContext";
import i18n from "@i18n";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { t } = i18n;
  const { sendMail, isSending } = useMail();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await sendMail(data);
    reset();
    setSubmitted(true);
  };

  const inputStyles = {
    width: "100%",
    padding: "0.875rem 1.25rem",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    color: V2_COLORS.onSurface,
    fontFamily: '"Inter", sans-serif',
    fontSize: "0.95rem",
    transition: "all 0.2s ease",
    outline: "none",
    "&::placeholder": {
      color: "rgba(198, 198, 205, 0.4)",
    },
    "&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.06)",
      borderColor: V2_COLORS.primary,
      boxShadow: `0 0 0 1px ${V2_COLORS.primary}`,
    }
  };

  return (
    <Box p={{ base: 6, md: 10 }} css={{ ...cardBaseStyle, ...liquidGlassStyle }}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Flex direction="column" align="center" justify="center" py={16} gap={4}>
              <Box p={5} borderRadius="full" bg={`${V2_COLORS.tertiary}20`}>
                <FiCheck size={32} color={V2_COLORS.tertiary} />
              </Box>
              <Text fontFamily='"Manrope", sans-serif' fontSize="2xl" fontWeight="700" color={V2_COLORS.onSurface} textAlign="center">
                Message sent!
              </Text>
              <Text fontFamily='"Inter", sans-serif' color={V2_COLORS.onSurfaceVariant} textAlign="center" maxW="sm">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </Text>
              <Box p={0}>
                <chakra.button
                  onClick={() => setSubmitted(false)}
                  mt={6}
                  px={6}
                  py={3}
                  bg="transparent"
                  border={`1px solid ${V2_COLORS.outlineVariant}`}
                  borderRadius="full"
                  color={V2_COLORS.onSurface}
                  fontFamily='"Inter", sans-serif'
                  fontSize="0.9rem"
                  fontWeight="600"
                  cursor="pointer"
                  transition="all 0.2s ease"
                  _hover={{ bg: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.4)" }}
                >
                  Send another message
                </chakra.button>
              </Box>
            </Flex>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Text fontFamily='"Manrope", sans-serif' fontSize="xl" fontWeight="700" color={V2_COLORS.onSurface} mb={8}>
              Send a message
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex direction="column" gap={5}>
                {/* Name */}
                <Box>
                  <Text fontFamily='"Inter", sans-serif' fontSize="xs" fontWeight="600" letterSpacing="0.08em" textTransform="uppercase" color={V2_COLORS.onSurfaceVariant} mb={2} suppressHydrationWarning>
                    {String(t("contact:form.name"))}
                  </Text>
                  <chakra.input type="text" placeholder="Your name" css={inputStyles} {...register("name", { required: String(t("contact:error.name")) })} />
                  {errors.name && (
                    <Text fontFamily='"Inter", sans-serif' fontSize="xs" color="#ff6b6b" mt={1}>{errors.name.message}</Text>
                  )}
                </Box>

                {/* Email */}
                <Box>
                  <Text fontFamily='"Inter", sans-serif' fontSize="xs" fontWeight="600" letterSpacing="0.08em" textTransform="uppercase" color={V2_COLORS.onSurfaceVariant} mb={2} suppressHydrationWarning>
                    {String(t("contact:form.email"))}
                  </Text>
                  <chakra.input type="email" placeholder="your@email.com" css={inputStyles} {...register("email", { required: String(t("contact:error.email")), pattern: { value: /\S+@\S+\.\S+/, message: String(t("contact:error.invalidEmail")) } })} />
                  {errors.email && (
                    <Text fontFamily='"Inter", sans-serif' fontSize="xs" color="#ff6b6b" mt={1}>{errors.email.message}</Text>
                  )}
                </Box>

                {/* Message */}
                <Box>
                  <Text fontFamily='"Inter", sans-serif' fontSize="xs" fontWeight="600" letterSpacing="0.08em" textTransform="uppercase" color={V2_COLORS.onSurfaceVariant} mb={2} suppressHydrationWarning>
                    {String(t("contact:form.message"))}
                  </Text>
                  <chakra.textarea rows={5} placeholder="Tell me about your project or opportunity..." css={inputStyles} {...register("message", { required: String(t("contact:error.message")) })} />
                  {errors.message && (
                    <Text fontFamily='"Inter", sans-serif' fontSize="xs" color="#ff6b6b" mt={1}>{errors.message.message}</Text>
                  )}
                </Box>

                {/* Submit */}
                <chakra.button
                  type="submit"
                  disabled={isSending}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                  w="100%"
                  py="1rem"
                  mt={2}
                  bg={V2_COLORS.primary}
                  color="#0f172a"
                  fontFamily='"Manrope", sans-serif'
                  fontSize="1rem"
                  fontWeight="700"
                  borderRadius="full"
                  cursor={isSending ? "not-allowed" : "pointer"}
                  opacity={isSending ? 0.7 : 1}
                  transition="all 0.2s ease"
                  border="none"
                  _hover={!isSending ? { filter: "brightness(1.1)", transform: "translateY(-1px)", boxShadow: "0 4px 12px rgba(137, 206, 255, 0.3)" } : {}}
                  _active={!isSending ? { transform: "translateY(0)" } : {}}
                >
                  <FiSend size={16} />
                  <chakra.span suppressHydrationWarning>
                    {isSending ? "Sending..." : String(t("contact:button"))}
                  </chakra.span>
                </chakra.button>
              </Flex>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
