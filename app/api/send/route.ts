// import { EmailTemplate } from '@/components/email-template';
import { Resend } from "resend";

const resend = new Resend("re_68Bsip71_95jE2CLWJiHwYfABinYENMhc");
export async function POST(req: Request) {
  const { name, email, msg } = await req.json();
  console.log("====================================");
  console.log(name, email, msg);
  console.log("====================================");

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "huleshjangde1@gmail.com",
      subject: "Hello World",
      html: `<h2> ${name}</h2>
        <p>${email}</p>
        <p>Message:  ${msg}</p>`,
    });

    return new Response(JSON.stringify({ data }));
  } catch (error) {
    return new Response(JSON.stringify({ error }));
  }
}
