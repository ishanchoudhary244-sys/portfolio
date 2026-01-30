# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from your contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Set Up Your Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - Gmail
   - Outlook
   - Yahoo
   - Or any other SMTP provider
4. Follow the instructions to connect your email account
5. Copy your **Service ID** (looks like `service_xxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Name it something like "Contact Form"
4. Use these template variables:
   ```
   From: {{from_email}}
   Name: {{from_name}}
   
   Message:
   {{message}}
   ```
5. Copy your **Template ID** (looks like `template_xxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (starts with `key_`)

## Step 5: Update Your Code

In [src/components/ContactSection.tsx](src/components/ContactSection.tsx), replace these placeholders:

```tsx
emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Line ~29
```

Replace with your actual public key:
```tsx
emailjs.init('key_xxxxxxxxxxxx');
```

Then update the email sending section (around line ~44):

```tsx
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',      // Your Service ID
  'YOUR_TEMPLATE_ID_HERE',     // Your Template ID
  {
    to_email: 'YOUR_EMAIL@example.com',  // Where you want to receive emails
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
);
```

Example:
```tsx
await emailjs.send(
  'service_abc123',
  'template_xyz789',
  {
    to_email: 'myemail@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
);
```

## Step 6: Test Your Form

1. Run your development server: `npm run dev` or `bun dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. You should receive an email in your inbox!

## Features Included

- ✅ Form validation
- ✅ Loading state with spinner
- ✅ Success message
- ✅ Error handling
- ✅ Auto-clear form on success
- ✅ Disabled inputs while sending
- ✅ Auto-dismiss feedback after 5 seconds

## Troubleshooting

**"Failed to send message" error:**
- Check that your Service ID and Template ID are correct
- Verify your email account is properly connected in EmailJS
- Check that your template variables match (from_name, from_email, message)

**"Invalid public key" error:**
- Make sure you're using your Public Key (not the API Key)
- Check for typos in the key

**Not receiving emails:**
- Check your spam/junk folder
- Verify the `to_email` address is correct
- Test sending a template email from the EmailJS dashboard

## Secure Setup (Optional but Recommended)

For production, store your keys in environment variables:

1. Create a `.env.local` file in your project root:
```
VITE_PUBLIC_EMAILJS_KEY=key_xxx
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_CONTACT_EMAIL=your@email.com
```

2. Update ContactSection.tsx:
```tsx
emailjs.init(import.meta.env.VITE_PUBLIC_EMAILJS_KEY);
```

And in the send method:
```tsx
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    to_email: import.meta.env.VITE_CONTACT_EMAIL,
    // ... rest of the data
  }
);
```

Note: Environment variables prefixed with `VITE_PUBLIC_` are exposed to the client, which is fine for EmailJS public keys.
