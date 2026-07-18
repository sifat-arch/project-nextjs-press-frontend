"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useActionState, useEffect } from "react";
import { loginAction } from "../_actions/authActions";
import { toast } from "sonner";
// import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [state, action, pending] = useActionState(loginAction, false);
  // const router = useRouter();

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Login successfull");
      // router.push("/dashboard");
    }

    if (!state.success) {
      toast.error(state.message || "login faild");
    }
  }, [state]);

  return (
    <form className="space-y-4" action={action}>
      <Card className="p-5 space-y-4">
        <Input type="email" name="email" placeholder="email" required />
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
        />

        <Button type="submit">{pending ? "Submitting..." : "Login"}</Button>
      </Card>
    </form>
  );
};

export default LoginForm;
