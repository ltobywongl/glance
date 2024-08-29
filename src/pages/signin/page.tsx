import { Button, Input, Image, Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { FormEvent } from "react";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export default function Page() {
    async function handleSignin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const res = await fetch(`${import.meta.env.BASE_URL}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                type: "signin",
                email: formData.get("email"),
                password: formData.get("password"),
            }),
        })
            
        const resJson = await res.json();
        if (resJson.error) {
            toast.error(resJson.error);
        } else {
            redirect("/dashboard");
        }
    }
    
    async function handleSignup(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const res = await fetch(`${import.meta.env.BASE_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                type: "signin",
                email: formData.get("email"),
                password: formData.get("password"),
            }),
        })
            
        const resJson = await res.json();
        if (resJson.error) {
            toast.error(resJson.error);
        } else {
            redirect("/dashboard");
        }
    }

    return (
        <main className="flex">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center z-20">
                <div className="w-4/5 md:w-2/3 max-w-96">
                    <Tabs aria-label="Options" color="primary" variant="light">
                        <Tab key="signin" title="Sign In">
                            <Card>
                                <CardBody>
                                    <form className="flex flex-col gap-4 p-2" onSubmit={(e) => handleSignin(e)}>
                                        <div className="font-semibold text-2xl">Sign in to Glance</div>
                                        <div className="text-sm">Welcome back!</div>
                                        <Input label="Email" type="email" placeholder="Enter your email address" color="primary" required />
                                        <Input label="Password" type="password" placeholder="" color="primary" required />
                                        <Button type="submit" className="w-full" color="primary">Submit</Button>
                                    </form>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="signup" title="Sign Up">
                            <Card>
                                <CardBody>
                                    <form className="flex flex-col gap-4 p-2" onSubmit={(e) => handleSignup(e)}>
                                        <div className="font-semibold text-2xl">Sign up to Glance</div>
                                        <div className="text-sm">Fast track your career!</div>
                                        <Input label="Email" type="email" placeholder="Enter your email address" color="primary" required />
                                        <Input label="Password" type="password" placeholder="" color="primary" required />
                                        <Button type="submit" className="w-full" color="primary">Submit</Button>
                                    </form>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <div className="absolute w-dvw h-dvh md:relative md:w-1/2 bg-gradient-to-tl from-primary/70 to-blue-200 z-10 flex items-center justify-center">
                <Image src="/assets/images/logo.png" />
            </div>
        </main>
    );
}