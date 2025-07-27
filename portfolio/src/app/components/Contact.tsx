import { useForm, ValidationError } from "@formspree/react";
import {
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SendIcon } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Contact() {
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const [state, handleSubmit] = useForm("myzpwbel");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box id="contact" width={"100%"} sx={{ padding: 4 }}>
      <Snackbar
        open={state.succeeded}
        autoHideDuration={30}
        message="Thanks for joining"
      />
      <Stack
        sx={{
          margin: "0 auto",
          width: { xs: "90%", sm: "80%", md: "60%" },
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          padding: 2,
        }}
        spacing={2}
        alignItems="center"
        paddingY={2}
      >
        <Stack
          ref={headingRef}
          className="opacity-0"
          width={"100%"}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="h4" color="text.primary" fontWeight="bold">
            Contact Me
          </Typography>
        </Stack>
        <Box
          width={"100%"}
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          method="POST"
          className="opacity-0"
        >
          <Stack
            margin={"0 auto"}
            spacing={2}
            width={{ xs: "90%", sm: "80%", md: "70%" }}
            alignItems="flex-start"
          >
            <Stack direction={"row"} gap={3} width={"100%"}>
              <TextField
                sx={{ flex: 1 }}
                variant="outlined"
                label="Name"
                name="name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <TextField
                name="email"
                sx={{ flex: 1 }}
                variant="outlined"
                label="Email"
                type="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </Stack>
            <TextField
              name="message"
              sx={{ width: "100%" }}
              variant="outlined"
              label="Your Message"
              multiline
              minRows={4}
            ></TextField>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button
              disabled={state.submitting}
              endIcon={<SendIcon />}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Send Message
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
