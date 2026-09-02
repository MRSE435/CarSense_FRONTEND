import { NextResponse } from "next/server";
export function  middleware(request){
    if(!request.cookies.get("access_token")){

        const pathname=request.nextUrl.pathname;
        const loginurl=new URL("/Login",request.url);
        loginurl.searchParams.set("callbackurl",pathname);
        return NextResponse.redirect(loginurl);
    }
    return NextResponse.next();


}
export const config = {
    matcher:["/Predict","/Compare"]
}