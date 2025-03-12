import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";

export default function Page() {
    return (
        <div className="grid grid-cols-5 gap-2">
            <Button size={"lg"} pointer={false}> Default </Button>
            <Button variant={"destructive"}> destructive </Button>
            <Button variant='ghost'> gost </Button>
            <Button variant='link'> link </Button>
            <Button variant='outline'> outline </Button>
            <Button variant='secondary'> secondary </Button>
            <Button disabled size={"sm"}> disable </Button>
            <Button variant="outline" size="icon">
                <ChevronRight />
            </Button>
            <Button>
                <Mail /> Login with Email
            </Button>
            <Button disabled pointer={false}>
                <Loader2 className="animate-spin" />
                Please wait
            </Button>
        </div>
    );
}