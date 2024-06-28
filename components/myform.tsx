"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MyFormSchema } from "@/schemas/loremSchema";
import { createLorem } from "@/actions/createLorem";

export const MyForm = () => {
  const form = useForm<z.infer<typeof MyFormSchema>>({
    resolver: zodResolver(MyFormSchema),
    defaultValues: {
      text: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof MyFormSchema>) {
    createLorem(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center space-x-6"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-[930px] border-2 border-slate-700"
                  placeholder="Enter task here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size={"lg"} type="submit">
          Add Task
        </Button>
      </form>
    </Form>
  );
};
