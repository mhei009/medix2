// /pages/api/login.ts
import { Account, Client, ID } from "node-appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("<PROJECT_ID>");

const account = new Account(client);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      await account.updateMagicURLSession(
        ID.unique(),
        email,
        "https://[YOUR_CALLBACK_URL]"
      );
      res.status(200).json({ message: "Magic link sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error sending magic link", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
