import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
console.log(process.env.NEXT_RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  await resend.emails.send({
    from: "Zeema Homes <info@zeemahomes.com>",
    to: "info@zeemahomes.com",
    subject: `New Contact Form Submission from ${name}`,
    replyTo: email,

    html: `
      <h2>New Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `,
  });

  return Response.json({ success: true });
}