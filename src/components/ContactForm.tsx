"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { FC, useRef, useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/TextArea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Enter a valid email.",
  }),
  message: z.string().min(30, {
    message: "You should send a longer message",
  }),
});

const ContactForm: FC<{ className?: string }> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const formRef = useRef<any>(null);

  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // if (values.favourite_colour !== "") {
      //   return;
      // }
      const req = await fetch("api/contact/", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      if (req.ok) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message. I'll reply shortly.",
        });
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      setResponseMessage({
        isSuccessful: false,
        message: "Something went wrong. Please try again.",
      });
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    } finally {
    }
  }

  if (responseMessage.message) {
    return (
      <div
        ref={formRef}
        className={clsx(
          "flex place-content-center items-center space-y-8 border-2 dark:border-tertiary/30 rounded-xl p-6 md:p-10",
          className,
        )}
      >
        <h4 className="text-fluid-md">{responseMessage.message}</h4>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className={clsx(
          "space-y-8 border-2 border-tertiary/30 rounded-xl p-6 md:p-10",
          className,
        )}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="xl" variant="outline" type="submit" className="w-full">
          Send
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
