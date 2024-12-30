"use client";

import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";

const addToCartSchema = z.object({
  quantity: z.coerce.number().min(1).max(999),
});

type AddToCartPayload = z.infer<typeof addToCartSchema>;

interface AddToCartProps {
  product: Product;
}

export function AddToCart({ product }: AddToCartProps) {
  const { addItem } = useCart();

  const form = useForm<AddToCartPayload>({
    resolver: zodResolver(addToCartSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const onSubmit = (data: AddToCartPayload) => {
    addItem(product, data.quantity);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-end space-x-4"
      >
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Quantity</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={999}
                  className="h-10"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitted || form.formState.isSubmitting}
        >
          {form.formState.isSubmitted ? "Added" : "Add to cart"}
        </Button>
      </form>
    </Form>
  );
}
