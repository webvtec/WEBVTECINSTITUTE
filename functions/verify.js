import fetch from 'node-fetch';

export async function handler(event) {
  try {
    const { licenseKey } = JSON.parse(event.body);
    const GUMROAD_ACCESS_TOKEN = process.env.GUMROAD_ACCESS_TOKEN;

    const response = await fetch(`https://api.gumroad.com/v2/licenses/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product_permalink: 'YOUR_PRODUCT_PERMALINK',
        license_key: licenseKey
      }),
    });

    const data = await response.json();

    if (data.success && data.purchase) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          valid: true,
          content: `<h2>Welcome, Paid Member!</h2>
                    <p>This is your exclusive content.</p>`
        })
      };
    } else {
      return { statusCode: 200, body: JSON.stringify({ valid: false }) };
    }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
